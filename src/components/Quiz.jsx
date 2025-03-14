import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Quiz = ({ cocktails }) => { 
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [answer, setAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState('');

    useEffect(() => {
        const retryCount = 0;
        console.log('Cocktails:', cocktails);
        generateQuestion(retryCount + 1);
    }, [cocktails]);

    const generateQuestion = (retryCount = 0) => {
        const MAX_RETRIES = 10;
        if (retryCount >= MAX_RETRIES) {
            setCurrentQuestion(null);
            return;
        }
        if (!cocktails || cocktails.length === 0) {
            setCurrentQuestion(null);
            return;
        }
        const randomCocktail = cocktails[Math.floor(Math.random() * cocktails.length)];
        const allIngredients = [
            ...(randomCocktail.ingredients.booze || []),
            ...(randomCocktail.ingredients.syrups || []),
            ...(randomCocktail.ingredients.others || []),
            ...(randomCocktail.ingredients.garnishes || []),
            ...(randomCocktail.ingredients.bitters || [])
        ];
        if (allIngredients.length === 0) {
            generateQuestion(retryCount + 1);
            return;
        }
        const validIngredients = allIngredients.filter(ingredient => ingredient.split(' ').length > 1);
        if (validIngredients.length === 0) {
            generateQuestion(retryCount + 1);
            return;
        }

        const randomIngredientString = validIngredients[Math.floor(Math.random() * validIngredients.length)];
        const [ingredientQuantity, ...ingredientNameParts] = randomIngredientString.split(' ');

        const measurementUnits = ["oz", "ml", "cl", "tsp", "tbsp", "dashes"];
        // Remove the measurement unit if it's the first element
        let filteredIngredientNameParts = measurementUnits.includes(ingredientNameParts[0]?.toLowerCase())
            ? ingredientNameParts.slice(1)
            : ingredientNameParts;
        const ingredientName = filteredIngredientNameParts.join(' ');

        // If filtering produces an empty name, try again
        if (!ingredientName.trim()) {
            generateQuestion(retryCount + 1);
            return;
        }

        const questionType = Math.floor(Math.random() * 3);
        let question;
        switch (questionType) {
            case 0:
                question = {
                    text: `What is one of the ingredients in a ${randomCocktail.title}?`,
                    answer: ingredientName,
                    allAnswers: allIngredients.map(ingredient =>
                        ingredient.replace(/^\d+(\.\d+)?\s?(oz|ml|dashes|cl|tsp|tbsp)?\s?/i, '')
                    )
                };
                break;
            case 1:
                if (randomCocktail.ingredients.booze.includes(randomIngredientString) || randomCocktail.ingredients.syrups.includes(randomIngredientString)) {
                    question = {
                        text: `How much ${ingredientName} is in a ${randomCocktail.title}?`,
                        answer: ingredientQuantity.replace(/[a-zA-Z]/g, '')
                    };
                } else {
                    generateQuestion(retryCount + 1);
                    return;
                }
                break;
            case 2:
                question = {
                    text: `Which cocktail is made with the following ingredients: ${allIngredients.join(', ')}?`,
                    answer: randomCocktail.title
                };
                break;
            default:
                break;
        }
        console.log('Generated Question:', question);
        setCurrentQuestion(question);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        let submittedAnswer = answer;
        if (currentQuestion.text.startsWith('How much')) {
            submittedAnswer = submittedAnswer.replace(/[a-zA-Z]/g, '').trim();
        }
        
        // Check if the submitted answer is blank. If it is, treat it as incorrect.
        if (submittedAnswer.trim() === '') {
            console.log("Blank answer submitted, treated as incorrect.");
            setFeedback(`Incorrect. The correct answer is: ${currentQuestion.answer}`);
            setAnswer('');
            return;
        }
        
        console.log('Submitted Answer:', submittedAnswer);
        console.log('Correct Answer:', currentQuestion.answer);
        
        let isCorrect = false;
        if (currentQuestion.text.startsWith('What is one of the ingredients')) {
            if (currentQuestion.allAnswers.some(ans => ans.toLowerCase() === submittedAnswer.toLowerCase()) || 
                currentQuestion.allAnswers.some(ans => ans.toLowerCase().includes(submittedAnswer.toLowerCase()))) {
                isCorrect = true;
            }
        } else if (submittedAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
            isCorrect = true;
        }
        
        if (isCorrect) {
            setScore(score + 1);
            setFeedback("Correct!");
        } else {
            setFeedback(`Incorrect. The correct answer is: ${currentQuestion.answer}`);
        }
        setAnswer('');
    };

    // Handler for moving to the next question
    const handleNextQuestion = () => {
        setFeedback('');
        generateQuestion();
    };

    return (
        <QuizContainer>
            <h1>Quiz</h1>
            {cocktails && cocktails.length > 0 ? (
                currentQuestion ? (
                    <div>
                        <QuestionText>{currentQuestion.text}</QuestionText>
                        <form onSubmit={handleSubmit}>
                            <Input
                                type="text"
                                value={answer}
                                onChange={(e) => setAnswer(e.target.value)}
                            />
                            <Button type="submit">Submit</Button>
                        </form>
                        {feedback && (
                            <FeedbackContainer>
                                <FeedbackText>{feedback}</FeedbackText>
                                <Button onClick={handleNextQuestion}>Next</Button>
                            </FeedbackContainer>
                        )}
                    </div>
                ) : (
                    <p>Loading question...</p>
                )
            ) : (
                <p>No cocktails available to generate questions.</p>
            )}
            <ScoreText>Score: {score}</ScoreText>
        </QuizContainer>
    );
};

/* Styled Components */
const QuizContainer = styled.div`
    text-align: center;
    margin: 10vh;
`;

const QuestionText = styled.p`
    font-size: 2em;
    margin-bottom: 10px;
`;

const ScoreText = styled.p`
    font-size: 2em;
    margin-top: 20px;
`;

const Input = styled.input`
    padding: 0.5rem 2rem;
    margin-right: 10px;
    border-radius: 5px;
    font-family: var(--main-font);
    font-size: 1.5em;
    background-color: var(--highlight3);
    color: var(--black);
`;

const Button = styled.button`
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-family: var(--main-font);
    font-size: 1.5em;
    background-color: var(--highlight3);
    color: var(--black);
    transition: background 0.3s ease;
    &:hover {
        background-color: var(--secondary);
    }
`;

const FeedbackContainer = styled.div`
    margin-top: 20px;
`;

const FeedbackText = styled.p`
    font-size: 1.5em;
    margin-bottom: 10px;
`;

export default Quiz;
