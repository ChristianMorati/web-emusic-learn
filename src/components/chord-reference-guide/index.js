import React from 'react';
import './index.css';
import { GuitarNotesGenerator } from '../guitar/guitar-notes-generator';

const ChordRefenceGuide = ({ chordName = "C" }) => {

    const GUITAR = new GuitarNotesGenerator();
    const chords = require('./chords.json')[chordName];

    var count = -1;

    return (
        <div className='chord-reference-guide'>
            {GUITAR.scaleDegrees.map((_, index) => {
                count += 1;

                if (index === 3 || index === 6 || index === 9) {
                    count--;
                }

                return (
                    <div key={index}>

                        {index % 3 === 0 && (
                            <div>
                                <div className="box-width content-center">{chords[count].representation}</div>
                                <div className='content-center box-width'>{GUITAR.scaleDegrees[index]}</div>
                            </div>
                        )}

                        {index % 3 === 1 && index + 1 < GUITAR.scaleDegrees.length && (
                            <div>
                                <div
                                    className="diagonal-div box-width content-center">
                                    {chords[count].representation}
                                </div>
                                <div className="diagonal-div box-width">
                                    <div className='right-content'>{GUITAR.scaleDegrees[index]}</div>
                                    <div className="diagonal-line" />
                                    <div className='left-content'>{GUITAR.scaleDegrees[index + 1]}</div>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
}

export default ChordRefenceGuide;
