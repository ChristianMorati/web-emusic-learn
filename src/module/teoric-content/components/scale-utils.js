const GUITAR1 = {
    allNotes: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
    getNote: (index) => GUITAR1.allNotes[index % GUITAR1.allNotes.length],
};