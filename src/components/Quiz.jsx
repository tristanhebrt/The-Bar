import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Quiz = ({ cocktails }) => {
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [answer, setAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [isCorrect, setIsCorrect] = useState(false); // State to track if the answer was correct
    const [animateCorrect, setAnimateCorrect] = useState(false); // State to trigger the animation
    const [correctAnswer, setCorrectAnswer] = useState(null); // Track the correct answer separately
    const [totalQuestionsAnswered, setTotalQuestionsAnswered] = useState(0); // State to track the total number of questions answered

    useEffect(() => {
        const retryCount = 0;

        // Safeguard: Check if cocktails is available and not empty
        if (!cocktails || cocktails.length === 0) {
            console.log('No cocktails available');
            setCurrentQuestion(null);
            return;
        }
        
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
            console.log("Cocktails array is empty or undefined.");
            setCurrentQuestion(null);
            return;
        }
    
        const randomCocktail = cocktails[Math.floor(Math.random() * cocktails.length)];
    
        // Safeguard: Check if ingredients object exists and has expected properties
        const ingredients = randomCocktail?.ingredients || {};
        const booze = ingredients.booze || [];
        const syrups = ingredients.syrups || [];
        const others = ingredients.others || [];
        const garnishes = ingredients.garnishes || [];
        const bitters = ingredients.bitters || [];
    
        const allIngredients = [
            ...booze,
            ...syrups,
            ...others,
            ...garnishes,
            ...bitters,
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
                    ),
                };
                break;
            case 1:
                if (
                    (booze.includes(randomIngredientString) || syrups.includes(randomIngredientString))
                ) {
                    question = {
                        text: `How much ${ingredientName} is in a ${randomCocktail.title}?`,
                        answer: ingredientQuantity.replace(/[a-zA-Z]/g, ''),
                    };
                } else {
                    generateQuestion(retryCount + 1);
                    return;
                }
                break;
            case 2:
                question = {
                    text: `Which cocktail is made with the following ingredients: ${allIngredients.join(', ')}?`,
                    answer: randomCocktail.title,
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

        // Check if currentQuestion is undefined
        if (!currentQuestion) {
            console.error("Current question is undefined.");
            return; // Exit early if no question is available
        }

        let submittedAnswer = answer;
        if (currentQuestion.text.startsWith('How much')) {
            submittedAnswer = submittedAnswer.replace(/[a-zA-Z]/g, '').trim();
        }

        // Check if the submitted answer is blank. If it is, treat it as incorrect.
        if (submittedAnswer.trim() === '') {
            console.log("Blank answer submitted, treated as incorrect.");
            if (currentQuestion.allAnswers) {
                setFeedback(`Incorrect.`);
                // Update correct answer only when incorrect, but avoid updating if it's already displayed in feedback
                if (!feedback.includes('The correct answer is:')) {
                    setCorrectAnswer(currentQuestion.allAnswers.join(', '));
                }
            } else {
                setFeedback(`Incorrect.`);
                // Update correct answer only when incorrect, but avoid updating if it's already displayed in feedback
                if (!feedback.includes('The correct answer is:')) {
                    setCorrectAnswer(currentQuestion.answer);
                }
            }
            setAnswer('');
            setIsCorrect(false); // Mark as incorrect
            setAnimateCorrect(false); // Reset animation state
            setTimeout(() => generateQuestion(), 0); // Automatically generate next question after 2 seconds
            setTotalQuestionsAnswered(totalQuestionsAnswered + 1); // Increment total questions answered
            return;
        }

        console.log('Submitted Answer:', submittedAnswer);
        console.log('Correct Answer:', currentQuestion.answer);

        let isAnswerCorrect = false;
        if (currentQuestion.text.startsWith('What is one of the ingredients')) {
            // Only proceed with word-based match if the submitted answer is a full word.
            const fullWordPattern = new RegExp(`\\b${submittedAnswer.trim()}\\b`, 'i');

            // Check if the submitted answer matches a full word in the list of valid answers.
            if (currentQuestion.allAnswers.some(ans => fullWordPattern.test(ans))) {
                isAnswerCorrect = true;
            }
        } else if (submittedAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
            isAnswerCorrect = true;
        }

        if (isAnswerCorrect) {
            setScore(score + 1);
            setFeedback("Correct!");
            setIsCorrect(true); // Mark as correct
            setAnimateCorrect(true); // Trigger animation
            setTimeout(() => setAnimateCorrect(false), 500); // Reset animation state after 0.5 seconds
        } else {
            setFeedback(`Incorrect`);
            // Only update correct answer when the answer is incorrect, and it's not already shown in the feedback
            if (!feedback.includes('The correct answer is:')) {
                setCorrectAnswer(currentQuestion.answer);
            }
        }

        setAnswer('');
        setTimeout(() => generateQuestion(), 0); // Automatically generate next question after 2 seconds
        setTotalQuestionsAnswered(totalQuestionsAnswered + 1); // Increment total questions answered
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
                                <FeedbackText
                                    isCorrect={isCorrect}
                                    animateCorrect={animateCorrect} // Pass animation state to the styled component
                                >
                                    {feedback}
                                    {/* Display the correct answer below "Incorrect" if the answer is wrong */}
                                    {!isCorrect && correctAnswer && (
                                        <CorrectAnswerText>
                                            The correct answer is: {correctAnswer}
                                        </CorrectAnswerText>
                                    )}
                                </FeedbackText>
                            </FeedbackContainer>
                        )}
                    </div>
                ) : (
                    <p>Loading question...</p>
                )
            ) : (
                <p>No cocktails available to generate questions.</p>
            )}
            <ScoreText>Score: {score} / {totalQuestionsAnswered}</ScoreText>
        </QuizContainer>
    );
};

/* Styled Components */
const QuizContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin: 10vh;
    overflow-x: hidden;
`;

const QuestionText = styled.p`
    font-size: 2em;
    max-width: 800px;
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
    animation: ${({ animateCorrect }) => (animateCorrect ? 'pop 0.5s ease' : 'none')}; /* Animation triggered when correct */
    font-size: ${({ isCorrect }) => (isCorrect ? '2.5em' : '1.5em')}; /* Larger size when correct */
    
    /* Keyframes for the pop-up effect */
    @keyframes pop {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.5); /* Grow larger */
        }
        100% {
            transform: scale(1); /* Return to normal size */
        }
    }
`;

const CorrectAnswerText = styled.p`
    font-size: 1.2em;
    color: red; /* You can change the color or style */
    margin-top: 10px;
`;

export default Quiz;
