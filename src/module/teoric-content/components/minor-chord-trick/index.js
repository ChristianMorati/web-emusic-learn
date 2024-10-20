import React from "react";
import ChordSVG from "react-chord-svg";
import GuitarLegend, { dinamicLegend } from "../guitar-legend";
import useAlternateBetweenTwoObjects from "../../hooks/use-alternate-between-two-objects";

const MinorChordTrick = ({ majorChord, minorChord }) => {

    const currentRepresentation = useAlternateBetweenTwoObjects(majorChord, minorChord, 2000);

    return (
        <div className='chord-svg'>
            <ChordSVG
                title={`${currentRepresentation.name} (2ª Forma)`}
                startAtFret={3}
                numberOfFrets={5}
                notes={currentRepresentation.chord}
            />
            <GuitarLegend data={dinamicLegend(currentRepresentation.name)} />
        </div>
    );
}

export default MinorChordTrick;
