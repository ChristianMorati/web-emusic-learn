import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import './index.css';

const EndGame = ({ pontuation, levels, handleRestart }) => {

    useEffect(() => {
        confetti({
            particleCount: 300,
            startVelocity: 30,
            spread: 360,
            zIndex: 1000,
            origin: { x: 0.5, y: 0.5 },
          });
    }, []);

    return (
        <div className="end-game">
            <h1 className="end-game-title">Game Finished!</h1>
            <p className="end-game-score">Final Score: {pontuation} / {levels.length}</p>
            <button className="play-again-btn" onClick={handleRestart}>Play Again</button>
        </div>
    );
};

export default EndGame;
