import React, { useState } from "react";
import GameProgressBar from "../game-progress-bar";
import confetti from "canvas-confetti";
import './index.css';
import { Subtitle } from "../../../../styled-components/text/subtitle";
import { levels } from "./data/level";

const TeoricQuiz = ({ levelIndex }) => {
    const [questions] = useState(levels[levelIndex]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState(null);
    const [score, setScore] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const [hintUsed, setHintUsed] = useState(false);
    const [hintsLeft, setHintsLeft] = useState(3); // Define o número inicial de dicas
    const [errorsAllowed, setErrorsAllowed] = useState(3); // Define o número de erros permitidos

    const handleOptionClick = (option) => {
        const isCorrect = option === questions[currentQuestionIndex].answer;

        if (isCorrect) {
            setScore(score + 1);
            setUserAnswer(option);
            showConfetti(); // Chama a função de confete ao acertar
            setTimeout(() => {
                nextQuestion(); // Passa para a próxima pergunta
            }, 2000); // Espera 2 segundos antes de passar para a próxima pergunta
        } else {
            setErrorsAllowed(errorsAllowed - 1); // Reduz o número de erros permitidos
            setUserAnswer(option);
            alert(`Resposta correta: ${questions[currentQuestionIndex].answer}`); // Exibe a resposta correta
        }

        // Verifica se o usuário perdeu
        if (errorsAllowed <= 1) {
            setShowResult(true);
            return;
        }

    };

    const showConfetti = () => {
        confetti({
            particleCount: 50,
            startVelocity: 30,
            spread: 300,
            zIndex: 1000,
            origin: { x: 0.5, y: 0.3 },
        });
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setUserAnswer(null);
            setHintUsed(false); // Reseta a dica para a próxima pergunta
        } else {
            setShowResult(true);
        }
    };

    const useHint = () => {
        if (!hintUsed && hintsLeft > 0) {
            setHintUsed(true);
            setHintsLeft(prev => prev - 1); // Reduz uma dica de forma segura
        }
    };

    const renderHearts = () => {
        return Array.from({ length: errorsAllowed }).map((_, index) => (
            <span
                key={index}
                className="icons"
            >
                ❤️
            </span>
        ));
    };

    const renderBulbs = () => {
        return Array.from({ length: hintsLeft }).map((_, index) => (
            <span
                key={index}
                className="icons"
            >
                💡
            </span>
        ));
    };

    const currentQuestion = questions[currentQuestionIndex];

    if (showResult) {
        return (
            <div>
                <h2>Resultado Final</h2>
                <p>Você acertou {score} de {questions.length} perguntas.</p>
                <button onClick={() => window.location.reload()}>Jogar Novamente</button>
            </div>
        );
    }

    return (
        <div className="teoric-quiz">
            <div className=''>
                <GameProgressBar levelsLength={questions.length} pontuation={score} />
                <Subtitle>{currentQuestion.question}</Subtitle>
                <div className='icons-container'>
                    <div>
                        {!userAnswer && (
                            <button onClick={useHint} disabled={hintUsed || hintsLeft <= 0}>
                                Pedir Dica
                            </button>
                        )}
                        {renderBulbs()}
                    </div>
                    <div className='error-container'>
                        {renderHearts()}
                    </div>
                </div>
            </div>
            <div className='answer-container'>
                {currentQuestion.options.map((option, index) => (
                    <button
                        className={`answer ${hintUsed && option === currentQuestion.answer ? 'hint' : ''}`}
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        style={{
                            backgroundColor: userAnswer === option ? 'lightgray' : 'white',
                            animation: hintUsed && option === currentQuestion.answer ? 'blink 1s infinite' : 'none',
                        }}
                        disabled={!!userAnswer}
                    >
                        {option}
                    </button>
                ))}
                {userAnswer && (
                    <button onClick={nextQuestion}>
                        Próxima questão
                    </button>
                )}
            </div>
        </div>
    );
};

export default TeoricQuiz;