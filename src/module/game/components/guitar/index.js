import React from 'react';
import { FcCancel } from "react-icons/fc";
import { FaRegCircle } from "react-icons/fa";
import ToolTip from "../../../../components/tooltip";
import './index.css';
import { GuitarNotesGenerator } from './guitar-notes-generator.js';

const FretStarPosition = ({ startPosition }) => {
  return (
    <p className='fret-number' style={{ position: "absolute", top: '-6px'}}>
      {`${startPosition}ª casa`}
    </p>
  );
};

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
      const newSelectedNote = newSelected[rowIndex];

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

  const isMutedString = (rowIndex) => selected[rowIndex] === "X";
  const isStringSelected = (rowIndex, colIndex) => selected[rowIndex] === colIndex;
  const toolTipTextToShowWhenMutedString = (rowIndex) =>
    isMutedString(rowIndex) ? "Clique para desmutar" : "Clique para mutar";

  const isFirstNote = (rowIndex, colIndex) => rowIndex === 0 && colIndex === 0;
  const isRightOneNote = (rowIndex) => selected[rowIndex] === response[rowIndex];

  return (
    <div className="guitar">
      {GUITAR.notes.map((note, rowIndex, arr) => (
        <div key={rowIndex} className="fretBoard">
          <div className='fretBoard-left-container'>
            <div
              style={{
                color: isMutedString(rowIndex) ? "red" : "black"
              }}
              onClick={() => handleClick(rowIndex, note, true)}
            >
              {/* <p className='string-name'>{note}</p> */}

              <ToolTip
                hoverText={`${arr.length - rowIndex}ª - ${note} |`}
                toolTipText={toolTipTextToShowWhenMutedString(rowIndex)}
              />

            </div>
          </div>

          <div className='each-string-container'>
            <div className='string-icon'>
              {isMutedString(rowIndex) ? <FcCancel /> : selected[rowIndex] == null ? <FaRegCircle /> : <p>{' '}</p>}
            </div>
            {Array.from({ length: 8 }).map((_, colIndex) => (
              <div key={colIndex}>
                {isFirstNote(rowIndex, colIndex) && (
                  <FretStarPosition startPosition={startPosition} />
                )}

                {colIndex === 7 ? (
                  <div className={`
                    last-item-container 
                    ${isRightOneNote(rowIndex) ? 'is-right-note' : 'is-wrong-note'}
                    ${res === false || res === true ? 'visible' : 'hidden'}
                `}>
                    {isRightOneNote(rowIndex) ? "V" : "X"}
                  </div>

                ) : (
                  <div
                    onClick={() => handleClick(rowIndex, colIndex)}
                    className={`
                      note-container 
                      ${isStringSelected(rowIndex, colIndex) ? 'selected' : ''} 
                      ${isMutedString(rowIndex) ? 'muted' : ''}
                    `}
                  >
                    {GUITAR.getNote(rowIndex, colIndex)}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Guitar;
