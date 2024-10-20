import React from 'react';
import './index.css';
import { globalColors } from '../../../../globalColors';
import { legendColors } from './style';

const is7or7M = (name) => { return name.endsWith('7') ? 'Sétima' : 'Sétima maior' };
const isMinorChord = (name) => {
    return `Terça  ${name[1] === 'm' ? 'menor' : ''}`;
};

export const dinamicLegend = (chordName) => [
    { color: legendColors.tonic, label: 'Nota fundamental|Tônica' },
    { color: legendColors.secondary, label: chordName.includes('7') ? is7or7M(chordName) : chordName.endsWith('9') ? 'Nona nota' : 'Redundante' },
    { color: legendColors.fifth, label: chordName.includes('6') ? 'Sexta nota' : 'Quinta nota' },
    { color: legendColors.third, label: isMinorChord(chordName) },
]

const GuitarLegend = ({ data }) => {
    return (
        <div className="legend">
            {data.map((item, index) => (
                <div key={index} className="legend-item">
                    <div className="legend-color" style={{ backgroundColor: item.color }} />
                    <span className="legend-label" style={{ color: globalColors.fontColor }}>
                        {item.label}
                    </span>
                </div>

            ))}
        </div>
    );
};

export default GuitarLegend;