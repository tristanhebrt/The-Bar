import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const Quiz = ({ cocktails }) => {
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [answer, setAnswer] = useState('');
    const [score, setScore] = useState(0);
    const [feedback, setFeedback] = useState('');
    const [isCorrect, setIsCorrect] = useState(false);
    const [animateCorrect, setAnimateCorrect] = useState(false);
    const [correctAnswer, setCorrectAnswer] = useState(null);
    const [totalQuestionsAnswered, setTotalQuestionsAnswered] = useState(0);
    const [isOverlayVisible, setIsOverlayVisible] = useState(false); // State to control overlay visibility

    useEffect(() => {
        const retryCount = 0;

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
        let filteredIngredientNameParts = measurementUnits.includes(ingredientNameParts[0]?.toLowerCase())
            ? ingredientNameParts.slice(1)
            : ingredientNameParts;
        const ingredientName = filteredIngredientNameParts.join(' ');
    
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

        if (!currentQuestion) {
            console.error("Current question is undefined.");
            return;
        }

        let submittedAnswer = answer;
        if (currentQuestion.text.startsWith('How much')) {
            submittedAnswer = submittedAnswer.replace(/[a-zA-Z]/g, '').trim();
        }

        if (submittedAnswer.trim() === '') {
            console.log("Blank answer submitted, treated as incorrect.");
            if (currentQuestion.allAnswers) {
                setFeedback(`Incorrect.`);
                if (!feedback.includes('The correct answer is:')) {
                    setCorrectAnswer(currentQuestion.allAnswers.join(', '));
                }
            } else {
                setFeedback(`Incorrect.`);
                if (!feedback.includes('The correct answer is:')) {
                    setCorrectAnswer(currentQuestion.answer);
                }
            }
            setAnswer('');
            setIsCorrect(false);
            setAnimateCorrect(false);
            setTimeout(() => generateQuestion(), 0);
            setTotalQuestionsAnswered(totalQuestionsAnswered + 1);
            return;
        }

        console.log('Submitted Answer:', submittedAnswer);
        console.log('Correct Answer:', currentQuestion.answer);

        let isAnswerCorrect = false;
        if (currentQuestion.text.startsWith('What is one of the ingredients')) {
            const fullWordPattern = new RegExp(`\\b${submittedAnswer.trim()}\\b`, 'i');

            if (currentQuestion.allAnswers.some(ans => fullWordPattern.test(ans))) {
                isAnswerCorrect = true;
            }
        } else if (submittedAnswer.toLowerCase() === currentQuestion.answer.toLowerCase()) {
            isAnswerCorrect = true;
        }

        if (isAnswerCorrect) {
            setScore(score + 1);
            setFeedback("Correct!");
            setIsCorrect(true);
            setAnimateCorrect(true);
            setTimeout(() => setAnimateCorrect(false), 500);
        } else {
            setFeedback(`Incorrect`);
            if (!feedback.includes('The correct answer is:')) {
                setCorrectAnswer(currentQuestion.answer);
            }
        }

        setAnswer('');
        setTimeout(() => generateQuestion(), 0);
        setTotalQuestionsAnswered(totalQuestionsAnswered + 1);
    };

    return (
        <div>
            <ToggleButton onClick={() => setIsOverlayVisible(!isOverlayVisible)}>
                {isOverlayVisible ? 'Close Quiz' : 'Open Quiz'}
            </ToggleButton>
            {isOverlayVisible && (
                <Overlay>
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
                                                animateCorrect={animateCorrect}
                                            >
                                                {feedback}
                                                {!isCorrect && correctAnswer && (
                                                    <CorrectAnswerText>
                                                        The correct answer was: {correctAnswer}
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
                        <CloseButton onClick={() => setIsOverlayVisible(false)}>Close Quiz</CloseButton>
                    </QuizContainer>
                </Overlay>
            )}
        </div>
    );
};

/* Styled Components */
const ToggleButton = styled.button`
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

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

const CloseButton = styled.button`
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

const QuizContainer = styled.div`
    width: 70vw;
    height: 95vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 1rem;
    margin: 10vh 10vw 10vh 10vw;
    overflow-x: hidden;
    background: var(--highlight2);
    padding: 2rem;
    border-radius: 10px;

    h1 {
        font-size: 2.5em;
        font-weight: bold;
    }
`;

const QuestionText = styled.p`
    font-size: 2em;
    max-width: 800px;
    margin-bottom: 2rem;
`;

const ScoreText = styled.p`
    font-size: 2em;
    font-weight: bold;
    margin-top: 1rem;
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
    animation: ${({ animateCorrect }) => (animateCorrect ? 'pop 0.5s ease' : 'none')};
    font-size: ${({ isCorrect }) => (isCorrect ? '2.5em' : '1.5em')};
    
    @keyframes pop {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.5);
        }
        100% {
            transform: scale(1);
        }
    }
`;

const CorrectAnswerText = styled.p`
    font-size: 1.2em;
    color: red;
    margin-top: 10px;
`;

export default Quiz;
