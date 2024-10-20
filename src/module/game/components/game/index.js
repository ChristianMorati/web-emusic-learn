import React, { useEffect, useState } from 'react';
import confetti from 'canvas-confetti';
import "./index.css";
import Header from '../../../../components/header';
import GameProgressBar from '../game-progress-bar';
import Guitar from '../guitar';
import EndGame from '../end-game';

const Game = () => {
    const [actualChord, setActualChord] = useState({
        number: 3,
        note: "E",
        color: "blue",
        title: "C",
    });

    const chords = [
        // { string: 5, number: 4, note: "D", color: "red", title: "C4" }, // add4
        // { string: 5, number: 3, note: "E", color: "blue", title: "C" }, // major
        // { string: 5, number: 2, note: "D#", color: "red", title: "Cm" }, // minor
        // { string: 5, number: 1, note: "D", color: "red", title: "C9" }, // add9

        { string: 4, number: 5, note: "D", color: "red", title: "C9" }, // add4
        { string: 4, number: 2, note: "E", color: "blue", title: "C7M" }, // major
        { string: 4, number: 1, note: "D#", color: "red", title: "C7" }, // minor
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActualChord((prevChord) => {
                const nextIndex = (chords.findIndex((chord) => chord.number === prevChord.number) + 1) % chords.length;
                return chords[nextIndex];
            });
        }, 2500);

        return () => clearInterval(intervalId);
    }, []);

    // Game
    const [actualLevel, setActualLevel] = useState(0);
    const [pontuation, setPontuation] = useState(0);
    const [isHideBoard, setIsHideBoard] = useState(false);

    const levels = [
        { response: [0, 2, 2, 1, 0, 0], startPosition: 1, title: "F (Fá)", chordName: "F" },
        { response: ["X", 0, 2, 2, 2, "X"], startPosition: 3, title: "C (Dó)", chordName: "C" },
        { response: ["X", 0, 2, 2, 1, 0], startPosition: 3, title: "Cm (Dó menor)", chordName: "C" },
        { response: ["X", 2, 1, null, 0, null], startPosition: 1, title: "C (Dó)", chordName: "C" },
    ]

    const [selected, setSelected] = useState(Array(6).fill(null));
    const [res, setRes] = useState(null);

    const isRightAnswer = () => {
        const response = levels[actualLevel].response;
        const isRightAnswer = JSON.stringify(selected) === JSON.stringify(response);
        setRes(isRightAnswer);
        return isRightAnswer;
    };

    const setNextLevel = () => {
        if (actualLevel === levels.length - 1) {
            setIsHideBoard(true);
            return;
        }

        setActualLevel((state) => state + 1);
        console.log(actualLevel)
    }

    const next = () => {
        if (isRightAnswer()) {
            setPontuation((state) => state + 1);
            confetti({
                particleCount: 50,
                startVelocity: 30,
                spread: 300,
                zIndex: 1000,
                origin: { x: 0.5, y: 0.3 },
            });
        }

        setTimeout(() => {
            setRes(null)
            setNextLevel()
            setSelected(Array(6).fill(null));
        }, 2000);
    }


    const handleRestart = () => {
        setActualLevel(0);
        setIsHideBoard(false);
        setPontuation(0);
    }

    const hasAnswer = () => { return res === false || res === true; }
    const getActualStartPosition = () => { return levels[actualLevel].startPosition; }
    const getActualtitle = () => { return levels[actualLevel].title; }
    const getActualChordName = () => { return levels[actualLevel].chordName; }

    const objective = `A partir da ${getActualStartPosition()}ª casa forme ${getActualtitle()}`;

    return (
        <div>
            <Header />
            {!isHideBoard ? (
                <div className="level-infos">
                    <div className="progress-bar-container">
                        <p className="">Nível {actualLevel + 1}</p>
                        <GameProgressBar
                            levelsLength={levels.length}
                            pontuation={pontuation}
                        />
                    </div>
                    <p>{objective}</p>
                </div>
            ) : (
                <EndGame pontuation={pontuation} levels={levels} handleRestart={handleRestart} />
            )}

            {!isHideBoard && (
                <div>
                    <div style={{
                        display: "flex", justifyContent: "center", alignItems: "center",
                    }}>
                        <Guitar
                            response={levels[actualLevel].response}
                            startPosition={levels[actualLevel].startPosition}
                            selected={selected}
                            setSelected={setSelected}
                            res={res}
                            setRes={setRes}
                        />
                    </div>
                    {!hasAnswer() && (
                        <div className='response-container'>
                            <button
                                className='check-answer-button'
                                onClick={() => {
                                    next()
                                }}>
                                {hasAnswer() ? "Proseguir" : "Confirmar"}
                            </button>
                        </div>
                    )}
                </div>
            )}
            <div>
            </div>

            {/* <div className='chord-svg'>
        <ChordSVG
          title={actualChord.title}
          startAtFret={3}
          numberOfFrets={5}
          notes={[
            {
              string: 1,
              muted: true,
            },
            {
              string: 6,
              muted: true,
            },
            {
              fret: 1,
              string: 2,
              color: "black",
              text: "C",
              opacity: 0.5,
            },
            {
              fret: 3,
              string: 3,
              color: "black",
              text: "G",
              opacity: 0.5,
            },
            {
              fret: 3,
              string: 4,
              color: "black",
              text: "C",
              opacity: 0.5,
            },
            {
              fret: actualChord.number,
              string: actualChord.string,
              color: actualChord.color,
              text: actualChord.note,
              opacity: 0.5,
            },
          ]}
        />
      </div> */}
        </div>
    );
}

export default Game;
