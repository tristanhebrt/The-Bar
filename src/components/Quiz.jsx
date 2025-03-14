import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const QuizContainer = styled.div`
    text-align: center;
    margin: 20px;
`;

const QuestionText = styled.p`
    font-size: 1.2em;
    margin-bottom: 10px;
`;

const ScoreText = styled.p`
    font-size: 1em;
    margin-top: 20px;
`;

const Input = styled.input`
    padding: 10px;
    margin-right: 10px;
    font-size: 1em;
`;

const Button = styled.button`
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
    background-color: #007BFF;
    color: white;
    border: none;
    border-radius: 5px;

    &:hover {
        background-color: #0056b3;
    }
`;

const Quiz = ({ cocktails }) => { 
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [answer, setAnswer] = useState('');
    const [score, setScore] = useState(0);

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
        const ingredientName = ingredientNameParts.join(' ');
        const questionType = Math.floor(Math.random() * 3);

        let question;
        switch (questionType) {
            case 0:
                question = {
                    text: `What is one of the ingredients in a ${randomCocktail.title}?`,
                    answer: ingredientName,
                    allAnswers: allIngredients.map(ingredient => ingredient.split(' ').slice(1).join(' '))
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
        console.log('Submitted Answer:', submittedAnswer);
        console.log('Correct Answer:', currentQuestion.answer);
        if (currentQuestion.text.startsWith('What is one of the ingredients')) {
            if (currentQuestion.allAnswers.some(ans => ans.toLowerCase() === submittedAnswer.toLowerCase()) || 
                currentQuestion.allAnswers.some(ans => ans.toLowerCase().includes(submittedAnswer.toLowerCase()))) {
                setScore(score + 1);
            }
        } else if (submittedAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
            setScore(score + 1);
        }
        setAnswer('');
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

export default Quiz;
