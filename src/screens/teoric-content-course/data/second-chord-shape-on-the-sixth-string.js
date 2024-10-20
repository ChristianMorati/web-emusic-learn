import { legendColors } from "../../../module/teoric-content/components/guitar-legend/style";

const firstNoteMajorChord = {
    name: "",
    chord: [
        { fret: 1, string: 1, bar: 6, color: legendColors.secondary, opacity: 0.5 },
        { fret: 1, string: 1, text: "1", color: legendColors.tonic },
        { fret: 3, string: 2, text: "3", color: legendColors.fifth },
        { fret: 3, string: 3, text: "4", color: legendColors.secondary },
        { fret: 2, string: 4, text: "2", color: legendColors.third },
        { fret: 1, string: 5, text: "1", color: legendColors.fifth },
        { fret: 1, string: 6, text: "1", color: legendColors.tonic },
    ],
};

const firstNoteMinorChord = {
    name: "m",
    chord: [
        { fret: 1, string: 1, bar: 6, color: legendColors.secondary, opacity: 0.5 },
        { fret: 1, string: 1, text: "1", color: legendColors.tonic },
        { fret: 3, string: 2, text: "3", color: legendColors.fifth },
        { fret: 3, string: 3, text: "4", color: legendColors.secondary },
        { fret: 1, string: 4, text: "1", color: legendColors.third },
        { fret: 1, string: 5, text: "1", color: legendColors.fifth },
        { fret: 1, string: 6, text: "1", color: legendColors.tonic },
    ],
};

const firstNoteSeventhChord = {
    name: "7M",
    chord: [
        { fret: 1, string: 1, bar: 6, color: legendColors.secondary, opacity: 0.5 },
        { fret: 1, string: 1, text: "1", color: legendColors.tonic },
        { fret: 3, string: 2, text: "4", color: legendColors.fifth },
        { fret: 2, string: 3, text: "2", color: legendColors.secondary },
        { fret: 2, string: 4, text: "3", color: legendColors.third },
        { fret: 1, string: 5, text: "1", color: legendColors.fifth },
        { fret: 1, string: 6, text: "1", color: legendColors.tonic },
    ],
};

const firstNoteMinorSeventhChord = {
    name: "7",
    chord: [
        { fret: 1, string: 1, bar: 6, color: legendColors.secondary, opacity: 0.5 },
        { fret: 1, string: 1, text: "1", color: legendColors.tonic },
        { fret: 3, string: 2, text: "3", color: legendColors.fifth },
        { fret: 1, string: 3, text: "1", color: legendColors.secondary },
        { fret: 2, string: 4, text: "2", color: legendColors.third },
        { fret: 1, string: 5, text: "1", color: legendColors.fifth },
        { fret: 1, string: 6, text: "1", color: legendColors.tonic },
    ],
};

const firstNoteNinethChord = {
    name: "9",
    chord: [
        { string: 1, muted: true },
        { string: 2, muted: true },
        { fret: 3, string: 3, text: "3", color: legendColors.tonic },
        { fret: 2, string: 4, text: "2", color: legendColors.third },
        { fret: 1, string: 5, text: "1", color: legendColors.fifth },
        { fret: 3, string: 6, text: "1", color: legendColors.secondary },
    ],
};

const firstNoteSixthChord = {
    name: "6",
    chord: [
        { string: 1, muted: true },
        { string: 2, muted: true },
        { fret: 3, string: 3, text: "3", color: legendColors.tonic },
        { fret: 2, string: 4, text: "2", color: legendColors.third },
        { fret: 3, string: 5, text: "1", color: legendColors.fifth },
        { fret: 1, string: 6, text: "1", color: legendColors.secondary },
    ],
};

const firstFretChordExamples = [
    { major: { ...firstNoteMajorChord } },
    { minor: { ...firstNoteMinorChord } },
    { sixth: { ...firstNoteSixthChord } },
    { minorSeventh: { ...firstNoteMinorSeventhChord } },
    { seventh: { ...firstNoteSeventhChord } },
    { nineth: { ...firstNoteNinethChord } },
];

export { firstFretChordExamples };