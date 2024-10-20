import React, { useState } from 'react';
import { GuitarNotesGenerator } from '../../../game/components/guitar/guitar-notes-generator';
import './index.css';

const GenMinorScale = () => {
    const GUITAR = new GuitarNotesGenerator();
    GUITAR.getNote = (index) => GUITAR.allNotes[index % GUITAR.allNotes.length];

    const allNotes = [
        'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'
    ];

    const [rootNote, setRootNote] = useState('C');

    const handleChange = (event) => {
        setRootNote(event.target.value);
    };

    const generateScale = (rootNote, scalePattern) => {
        const baseIndex = GUITAR.allNotes.findIndex(note => note === rootNote);
        const scaleNotes = [rootNote];

        let currentIndex = baseIndex;
        for (let step of scalePattern) {
            currentIndex += step;
            scaleNotes.push(GUITAR.getNote(currentIndex));
        }

        return scaleNotes;
    };

    const majorScalePattern = [2, 2, 1, 2, 2, 2, 1];
    const minorScalePattern = [2, 1, 2, 2, 1, 2, 2];

    const majorScaleNotes = generateScale(rootNote, majorScalePattern);
    const minorScaleNotes = generateScale(rootNote, minorScalePattern);

    return (
        <div>
            <h2>Selecione a Nota Raiz</h2>
            <select value={rootNote} onChange={handleChange}>
                {allNotes.map(note => (
                    <option key={note} value={note}>{note}</option>
                ))}
            </select>

            <div className="scale-container">
                <h3 className="scale-title">Escala Maior de {rootNote}</h3>
                <p className="scale-notes">Notas: {majorScaleNotes.join(', ')}</p>
                <table className="scale-table">
                    <thead>
                        <tr>
                            <th>Intervalo</th>
                            <th>Notas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nota Fundamental</td>
                            <td>{rootNote}</td>
                        </tr>
                        <tr>
                            <td>2 Tons</td>
                            <td>{majorScaleNotes[1]}, {majorScaleNotes[2]}</td>
                        </tr>
                        <tr>
                            <td>1 Semitom</td>
                            <td>{majorScaleNotes[3]}</td>
                        </tr>
                        <tr>
                            <td>3 Tons</td>
                            <td>{majorScaleNotes[4]}, {majorScaleNotes[5]}, {majorScaleNotes[6]}</td>
                        </tr>
                        <tr>
                            <td>1 Semitom</td>
                            <td>{majorScaleNotes[7]}</td>
                        </tr>
                    </tbody>
                </table>

                <h3 className="scale-title">Escala Menor de {rootNote}</h3>
                <p className="scale-notes">Notas: {minorScaleNotes.join(', ')}</p>
                <table className="scale-table">
                    <thead>
                        <tr>
                            <th>Intervalo</th>
                            <th>Notas</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Nota Fundamental</td>
                            <td>{rootNote}</td>
                        </tr>
                        <tr>
                            <td>1 Tom</td>
                            <td>{minorScaleNotes[1]}</td>
                        </tr>
                        <tr>
                            <td>1 Semitom</td>
                            <td>{minorScaleNotes[2]}</td>
                        </tr>
                        <tr>
                            <td>2 Tons</td>
                            <td>{minorScaleNotes[3]}, {minorScaleNotes[4]}</td>
                        </tr>
                        <tr>
                            <td>1 Semitom</td>
                            <td>{minorScaleNotes[5]}</td>
                        </tr>
                        <tr>
                            <td>2 Tons</td>
                            <td>{minorScaleNotes[6]}, {minorScaleNotes[7]}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GenMinorScale;
