export class GuitarNotesGenerator {
    notes = ['E', 'A', 'D', 'G', 'B', 'E'];
    allNotes = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    scaleDegrees = [1, 2, 9, 3, 4, 11, 5, 6, 13, 7];
    naturalScale = ['C', 'D', 'E', 'F', 'G', 'A', 'S'];
    naturalNotesNames = ['dó', 'ré', 'mi', 'fá', 'sol', 'la', 'si'];

    constructor(startPosition = 0) {
        this.startPosition = startPosition;
    }

    getNote(rowIndex, colIndex) {
        const baseNote = this.notes[rowIndex];
        const startIndex = this.allNotes.indexOf(baseNote);
        const noteIndex = (startIndex + colIndex + this.startPosition) % this.allNotes.length;
        return this.allNotes[noteIndex];
    }
}