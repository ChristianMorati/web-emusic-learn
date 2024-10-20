import { legendColors } from "../../../module/teoric-content/components/guitar-legend/style";

const majorChordShape = {
    name: "",
    chord: [
        { string: 1, muted: true },
        { fret: 1, string: 2, bar: 5, color: legendColors.secondary, opacity: 0.5 },
        { fret: 1, string: 2, text: "1", color: legendColors.tonic },
        { fret: 3, string: 3, text: "2", color: 'blue' },
        { fret: 3, string: 4, text: "3", color: 'gray' },
        { fret: 3, string: 5, text: "4", color: 'red' },
        { fret: 1, string: 6, text: "1", color: 'blue' },
    ],
};

const minorChordShape = {
    name: "m",
    chord: [
        { string: 1, muted: true },
        { fret: 1, string: 2, bar: 5, color: legendColors.secondary, opacity: 0.5 },
        { fret: 1, string: 2, text: "1", color: legendColors.tonic },
        { fret: 3, string: 3, text: "3", color: 'blue' },
        { fret: 3, string: 4, text: "4", color: 'gray' },
        { fret: 2, string: 5, text: "2", color: 'red' },
        { fret: 1, string: 6, text: "1", color: 'blue' },
    ],
};

const seventhChordShape = {
    name: "7",
    chord: [
        { string: 1, muted: true },
        { fret: 1, string: 2, bar: 5, color: legendColors.secondary, opacity: 0.5 },
        { fret: 1, string: 2, text: "1", color: legendColors.tonic },
        { fret: 3, string: 3, text: "2", color: 'blue' },
        { fret: 1, string: 4, text: "1", color: 'gray' },
        { fret: 3, string: 5, text: "4", color: 'red' },
        { fret: 1, string: 6, text: "1", color: 'blue' },
    ],
};

const c7M = {
    name: "7M",
    chord: [
        { string: 1, muted: true },
        { fret: 1, string: 2, bar: 5, color: legendColors.secondary, opacity: 0.5 },
        { fret: 1, string: 2, text: "1", color: legendColors.tonic },
        { fret: 3, string: 3, text: "2", color: 'blue' },
        { fret: 2, string: 4, text: "3", color: 'gray' },
        { fret: 3, string: 5, text: "4", color: 'red' },
        { fret: 1, string: 6, text: "1", color: 'blue' },
    ],
};

const minorSeventhChordShape = {
    name: "m7M",
    chord: [
        { string: 1, muted: true },
        { fret: 1, string: 2, bar: 5, color: legendColors.secondary, opacity: 0.5 },
        { fret: 1, string: 2, text: "1", color: legendColors.tonic },
        { fret: 3, string: 3, text: "4", color: 'blue' },
        { fret: 2, string: 4, text: "3", color: 'gray' },
        { fret: 2, string: 5, text: "2", color: 'red' },
        { fret: 1, string: 6, text: "1", color: 'blue' },
    ],
};

const cm7 = {
    name: "m7",
    chord: [
        { string: 1, muted: true },
        { fret: 1, string: 2, bar: 5, color: legendColors.secondary, opacity: 0.5 },
        { fret: 1, string: 2, text: "1", color: legendColors.tonic },
        { fret: 3, string: 3, text: "3", color: 'blue' },
        { fret: 1, string: 4, text: "1", color: 'gray' },
        { fret: 2, string: 5, text: "2", color: 'red' },
        { fret: 1, string: 6, text: "1", color: 'blue' },
    ],
};

const sixthChordShape = {
    name: "6",
    chord: [
        { string: 1, muted: true },
        { fret: 1, string: 2, bar: 5, color: legendColors.secondary, opacity: 0.5 },
        { fret: 1, string: 2, text: "1", color: legendColors.tonic },
        { fret: 3, muted: true},
        { fret: 3, string: 4, text: "3", color: 'gray' },
        { fret: 3, string: 5, text: "4", color: 'red' },
        { fret: 3, string: 6, text: "1", color: 'blue' },
    ],
};

const firstFretChordExamples = [
    { major: { ...majorChordShape } },
    { minor: { ...minorChordShape } },
    { sixth: { ...sixthChordShape } },
    { minorSeventh: { ...minorSeventhChordShape } },
    { majorSeventh: { ...seventhChordShape } },
    { nineth: { ...ninethChordShape } },
    { minorChordWith: seventh }
];

export { firstFretChordExamples };