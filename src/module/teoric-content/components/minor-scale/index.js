import React from 'react';
import styles from '../major-scale/index.css';
import { GuitarNotesGenerator } from '../../../../components/guitar/guitar-notes-generator';

const MinorScale = ({ rootNote }) => {
    const GUITAR = new GuitarNotesGenerator();
    GUITAR.getNote = (index) => GUITAR.allNotes[index % GUITAR.allNotes.length]

    // Padrão de intervalos para a escala menor
    const scalePattern = [2, 1, 2, 2, 1, 2, 2];

    const baseIndex = GUITAR.allNotes.findIndex(note => note === rootNote);
    const scaleNotes = [rootNote];

    let currentIndex = baseIndex;
    for (let step of scalePattern) {
        currentIndex += step;
        scaleNotes.push(GUITAR.getNote(currentIndex));
    }

    return (
        <div className="minor-scale-container">
            <h3 className="scale-title">Escala Menor de {rootNote}</h3>
            <p className="scale-notes">Notas: {scaleNotes.join(', ')}</p>
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
                        <td>{scaleNotes[1]}</td>
                    </tr>
                    <tr>
                        <td>1 Semitom</td>
                        <td>{scaleNotes[2]}</td>
                    </tr>
                    <tr>
                        <td>2 Tons</td>
                        <td>{scaleNotes[3]}, {scaleNotes[4]}</td>
                    </tr>
                    <tr>
                        <td>1 Semitom</td>
                        <td>{scaleNotes[5]}</td>
                    </tr>
                    <tr>
                        <td>2 Tons</td>
                        <td>{scaleNotes[6]}, {scaleNotes[7]}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MinorScale;