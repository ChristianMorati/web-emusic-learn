import React from 'react';
import { FcCancel } from "react-icons/fc";
import { FaRegCircle } from "react-icons/fa";
import ToolTip from "../tooltip/";
import './index.css';
import { GuitarNotesGenerator } from './guitar-notes-generator';

const FretStarPostion = ({ startPosition }) => {
  return (
    <p
      className='fret-number'
      style={{ position: "absolute", bottom: '2.5rem' }}
    >
      {`${startPosition}ªcasa`}
    </p>
  )
}

const Guitar = ({
  response,
  startPosition,
  selected,
  setSelected,
  res,
}) => {
  const GUITAR = new GuitarNotesGenerator(startPosition);

  const handleClick = (rowIndex, colIndex = null, isResetNote = false) => {
    setSelected((prevSelected) => {
      const newSelected = [...prevSelected];
      const newSelectedNote = newSelected[rowIndex]

      if (newSelected[colIndex] === "X") {
        newSelected[rowIndex] = GUITAR.getNote(rowIndex, colIndex);
      }

      if (!isResetNote) {
        newSelected[rowIndex] = newSelectedNote === colIndex ? null : colIndex;
      } else {
        newSelected[rowIndex] = newSelectedNote === "X" ? null : "X";
      }

      return newSelected;
    });
  };

  const isMutedString = (rowIndex) => { return selected[rowIndex] === "X"; };
  const isStringSelected = (rowIndex, colIndex) => { return selected[rowIndex] === colIndex; };
  const toolTipTextToShowWhenMutedString = (rowIndex) => { return isMutedString(rowIndex) ? "clique para desmutar" : "clique para mutar" };
  const isFirstNote = (rowIndex, colIndex) => { return rowIndex === 0 && colIndex === 0; };
  const isRightOneNote = (rowIndex) => { return selected[rowIndex] === response[rowIndex]; };

  return (
    <div className=''>
      <div className="">
        {GUITAR.notes.map((note, rowIndex) => (
          <div key={rowIndex} className="fretBoard">
            <div
              className='string-name'
              style={{
                color: isMutedString(rowIndex) ? "red" : "black",
              }}
              onClick={() => handleClick(rowIndex, note, true)}
            >
              <ToolTip
                hoverText={note}
                toolTipText={toolTipTextToShowWhenMutedString(rowIndex)}
              />
            </div>

            <div className='string-icon'>{isMutedString(rowIndex) ? <FcCancel /> : <FaRegCircle />}</div>

            {Array.from({ length: 8 }).map((_, colIndex) => (
              <div
                key={colIndex}
                style={{ position: 'relative' }}
              >
                {isFirstNote(rowIndex, colIndex) && (<FretStarPostion startPosition={startPosition} />)}

                {colIndex === 7 ? (
                  <div className={`last-item-container note-result-container
                  ${res === false || res === true ? "visible" : "hidden"}
                  ${isRightOneNote(rowIndex) ? "is-right-note" : "is-wrong-note"}`}
                  >
                    {isRightOneNote(rowIndex) ? "V" : "X"}
                  </div>
                ) : (
                  <div
                    key={colIndex}
                    onClick={() => handleClick(rowIndex, colIndex)}
                    className={`note-container 
                    ${isStringSelected(rowIndex, colIndex) ? 'selected' : ''} 
                    ${isMutedString(rowIndex) ? 'muted' : ''}`}
                  >
                    {GUITAR.getNote(rowIndex, colIndex)}
                  </div>
                )}
              </div>
            ))}

          </div>
        ))}
      </div>
    </div>
  );
}

export default Guitar;