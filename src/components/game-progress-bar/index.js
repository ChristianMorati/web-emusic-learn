import React from 'react';
import './index.css';

const GameProgressBar = ({ pontuation, levelsLength }) => {
    const progressBarDinamicWidth = (pontuation / levelsLength) * 100;

    return (
        <div className={"progress"}>
            <div
                className={"progressBar"}
                style={{ width: `${progressBarDinamicWidth}%` }}
            >
                <p
                    className={"pontuation"}
                    style={{ color: progressBarDinamicWidth > 0 ? 'white' : 'black' }}
                >
                    {pontuation}/{levelsLength}
                </p>
            </div>
        </div>
    );
}

export default GameProgressBar;