import React from 'react';
import '../major-scale/index.css';

const majorChords = [
    "Dó maior",
    "Dó# maior",
    "Ré maior",
    "Ré# maior",
    "Mi maior",
    "Fá maior",
    "Fá# maior",
    "Sol maior",
    "Sol# maior",
    "Lá maior",
    "Lá# maior",
    "Si maior",
];

const minorChords = [
    "Lá menor",
    "Lá# menor",
    "Si menor",
    "Dó menor",
    "Dó# menor",
    "Ré menor",
    "Ré# menor",
    "Mi menor",
    "Fá menor",
    "Fá# menor",
    "Sol menor",
    "Sol# menor",
];

const RelativesToneTable = () => {
    return (
        <div className="minor-scale-container">
            <table className="scale-table">
                <thead>
                    <tr>
                        <th>Acordes Maiores</th>
                        <th>e</th>
                        <th>Acordes Menores</th>
                    </tr>
                </thead>
                <tbody>
                    {majorChords.map((majorChord, index) => (
                        <tr key={index}>
                            <td>{majorChord}</td>
                            <td>e</td>
                            <td>{minorChords[index]}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RelativesToneTable;
