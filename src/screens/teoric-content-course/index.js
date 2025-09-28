import React from 'react';
import './index.css';
import { Paragraph, ParagraphBold } from '../../styled-components';
import ChordSVG from 'react-chord-svg';
import MajorScale from '../../module/teoric-content/components/major-scale';
import MinorScale from '../../module/teoric-content/components/minor-scale';
import RelativesToneTable from '../../module/teoric-content/components/relatives-tone-table';
import ChordReferenceGuide from '../../module/teoric-content/components/chord-reference-guide';
import GuitarLegend, { dinamicLegend } from '../../module/teoric-content/components/guitar-legend';
import { GuitarNotesGenerator } from '../../module/game/components/guitar/guitar-notes-generator';
import Guitar from '../../module/game/components/guitar';

import tipIcon from '../../../public/icons/tip.png';
import MinorChordTrick from '../../module/teoric-content/components/minor-chord-trick';
import { firstFretChordExamples } from './data/second-chord-shape-on-the-sixth-string';
import { legendColors } from '../../module/teoric-content/components/guitar-legend/style';
import TopicTitle from '../../module/teoric-content/components/topic';
import { Subtitle } from '../../styled-components/text/subtitle';
import guitar_parts_img from '../../../public/img/guitar-parts.png';
/* images */
import general_definitions_img from '../../../public/img/general-definitions.jpeg';
import more_definitions_img from '../../../public/img/more-definitions.jpeg';
import guitar_parts_2_img from '../../../public/img/guitar-parts-2.jpeg';
import major_scale_table from '../../../public/img/major-scale-table.jpeg';
/* images /> */

const GUITAR = new GuitarNotesGenerator();

const levels = [
    { response: [0, 2, 2, 1, 0, 0], startPosition: 1, title: "F (Fá)", chordName: "F" },
    { response: ["X", 0, 2, 2, 2, "X"], startPosition: 3, title: "C (Dó)", chordName: "C" },
    { response: ["X", 0, 2, 2, 1, 0], startPosition: 3, title: "Cm (Dó menor)", chordName: "C" },
    { response: ["X", 2, 1, null, 0, null], startPosition: 1, title: "C (Dó)", chordName: "C" },
    { response: [0, 2, 2, 1, 0, 0], startPosition: 3, title: "G (Sol)", chordName: "G" },
]


/// toremove
const cMinor = {
    name: "Cm",
    chord: [
        { string: 1, muted: true },
        { fret: 1, string: 2, bar: 5, color: legendColors.secondary, opacity: 0.5 },
        { fret: 1, string: 2, text: "1", color: legendColors.tonic },
        { fret: 3, string: 3, text: "3", color: legendColors.fifth },
        { fret: 3, string: 4, text: "4", color: legendColors.secondary },
        { fret: 2, string: 5, text: "2", color: legendColors.third },
        { fret: 1, string: 6, text: "1", color: legendColors.fifth },
    ],
};

const cMajor = {
    name: "C",
    chord: [
        { string: 1, muted: true },
        { fret: 1, string: 2, bar: 5, color: legendColors.secondary, opacity: 0.5 },
        { fret: 1, string: 2, text: "1", color: legendColors.tonic },
        { fret: 3, string: 3, text: "2", color: legendColors.fifth },
        { fret: 3, string: 4, text: "3", color: legendColors.secondary },
        { fret: 3, string: 5, text: "4", color: legendColors.third },
        { fret: 1, string: 6, text: "1", color: legendColors.fifth },
    ],
};

const c7 = {
    name: "C7",
    chord: [
        { string: 1, muted: true },
        { fret: 1, string: 2, bar: 5, color: legendColors.secondary, opacity: 0.5 },
        { fret: 1, string: 2, text: "1", color: legendColors.tonic },
        { fret: 3, string: 3, text: "2", color: legendColors.fifth },
        { fret: 1, string: 4, text: "1", color: legendColors.secondary },
        { fret: 3, string: 5, text: "4", color: legendColors.third },
        { fret: 1, string: 6, text: "1", color: legendColors.fifth },
    ],
};

const c7M = {
    name: "C7M",
    chord: [
        { string: 1, muted: true },
        { fret: 1, string: 2, bar: 5, color: legendColors.secondary, opacity: 0.5 },
        { fret: 1, string: 2, text: "1", color: legendColors.tonic },
        { fret: 3, string: 3, text: "2", color: legendColors.fifth },
        { fret: 2, string: 4, text: "3", color: legendColors.secondary },
        { fret: 3, string: 5, text: "4", color: legendColors.third },
        { fret: 1, string: 6, text: "1", color: legendColors.fifth },
    ],
};

const cm7M = {
    name: "Cm7M",
    chord: [
        { string: 1, muted: true },
        { fret: 1, string: 2, bar: 5, color: legendColors.secondary, opacity: 0.5 },
        { fret: 1, string: 2, text: "1", color: legendColors.tonic },
        { fret: 3, string: 3, text: "4", color: legendColors.fifth },
        { fret: 2, string: 4, text: "3", color: legendColors.secondary },
        { fret: 2, string: 5, text: "2", color: legendColors.third },
        { fret: 1, string: 6, text: "1", color: legendColors.fifth },
    ],
};

const cm7 = {
    name: "Cm7",
    chord: [
        { string: 1, muted: true },
        { fret: 1, string: 2, bar: 5, color: legendColors.secondary, opacity: 0.5 },
        { fret: 1, string: 2, text: "1", color: legendColors.tonic },
        { fret: 3, string: 3, text: "3", color: legendColors.fifth },
        { fret: 1, string: 4, text: "1", color: legendColors.secondary },
        { fret: 2, string: 5, text: "2", color: legendColors.third },
        { fret: 1, string: 6, text: "1", color: legendColors.fifth },
    ],
};
/// toremove


const notesNames = [
    'Dó',
    'Dó sustenido',
    'Ré',
    'Ré sustenido',
    'Mi',
    'Fá',
    'Fá sustenido',
    'Sol',
    'Sol sustenido',
    'Lá',
    'Lá sustenido',
    'Si'
];

const bemolAndSusteinExamples = [
    { name: "Fá aumentado meio (1/2) tom", equals: "Fá# (Fá sustenido)" },
    { name: "Lá aumentado meio (1/2) tom", equals: "Lá# (Lá sustenido)" },
    { name: "Ré diminuído meio (1/2) tom", equals: "Réb (Ré bemol)" },
    { name: "Lá diminuído meio (1/2) tom", equals: "Láb (Lá bemol)" },
];

const guitarLegendData = [
    { color: 'rgba(255, 0, 0, 0.3)', label: 'Corda mutada (Não tocada)' },
    { color: 'rgba(0, 255, 0, 0.3)', label: 'Corda pressionada (Tocada)' },
    { color: 'white', label: 'Corda solta (Tocada)' }
];

const chordNameToSustein = (chordName) => { return `${chordName[0]}#${chordName.slice(1)}`; }

const outhersExamplesChord = [c7M, c7, cm7M, cm7];

const ContentTeoric = ({
    title,
    paragraph,
    representationComponent
}) => {
    return (
        <div>
            <Subtitle>{title}</Subtitle>
            <Paragraph>{paragraph}</Paragraph>
            <div>
                <Paragraph>
                    {representationComponent}
                </Paragraph>
            </div>
            <hr />
        </div>
    )
}

const NoSusteinedNoteBetween = ({
    firstNote,
    secondNote
}) => {
    return (
        <div className='respective-note-container'>
            <div className='note-item'>
                <ParagraphBold>{firstNote}</ParagraphBold>
            </div>
            <div className='note-item crossed-hashtag' />
            <div className='note-item'>
                <ParagraphBold>{secondNote}</ParagraphBold>
            </div>
        </div>
    )
}

const TeoricContentScreen = () => {

    return (
        <div className='teoric-content-screen'>

            <div >
                <TopicTitle sectionNumber={1} sectionParagraph={'O início...'} />
                <ContentTeoric
                    title={"Conhecendo o instrumento:"}
                    paragraph={'As partes e os seus respectivos nomes:'}
                    representationComponent={
                        <div className='center'>
                            <img className='guitar-parts-image' alt='guitar-parts-image' src={guitar_parts_img} />
                            <img className='guitar-parts-image' alt='guitar-parts-image' src={guitar_parts_2_img} />
                            <img className='guitar-parts-image' alt='guitar-parts-image' src={general_definitions_img} />
                            <img className='guitar-parts-image' alt='guitar-parts-image' src={more_definitions_img} />
                        </div>
                    }
                />
            </div>

            <ContentTeoric
                title={"Conhecendo as notas representantes:"}
                paragraph={'Escala natural, Língua saxônica:'}
                representationComponent={
                    <div className='respective-note-container note-item'>
                        {GUITAR.allNotes.map((note, index) => (
                            <div>
                                {!note.endsWith('#') && (
                                    <div key={index}>
                                        <ParagraphBold>{note}</ParagraphBold>
                                        <Paragraph>{notesNames[index]}</Paragraph>
                                    </div>
                                )
                                }
                            </div>
                        ))}

                    </div>
                }
            />

            <ContentTeoric
                title={"Como é o violão?"}
                paragraph={'Note que em cada linha (corda), tem o seu nome, e se nenhuma casa ou nota for presionada esse é a nota que soará, também chamada de corda solta:'}
                representationComponent={
                    <div className=''>
                        <div>
                            <Guitar
                                response={[null, null, null, null, null, null]}
                                startPosition={1}
                                selected={[null, null, null, null, null, null]}
                            />
                            <Paragraph>E a contagem, de notas se dá de baixo para cima:</Paragraph>
                            <ParagraphBold>Também dizemos que esta é a afinação padrão do violão</ParagraphBold>
                            <ul>
                                {['mi', 'lá', 'ré', 'sol', 'si', 'mi'].map((note, index, arr) => (
                                    <li key={index}>
                                        <Paragraph>{`${arr.length - index}ª corda: ${GUITAR.notes[index]} (${note.toUpperCase()})`}</Paragraph>
                                    </li>
                                ))}
                            </ul>
                            <Paragraph>E perceba que em cada corda segue as notas da escala, a partir do nome da corda, você sabendo onde encontrar cada nota pelo menos na 6ª e 5ª corda, fica mais fácil formar acordes no futuro.</Paragraph>
                        </div>
                    </div>
                }
            />

            <ContentTeoric
                title={"Oitava"}
                paragraph={"Seguindo a nota Dò para cima (da esquerda para a direita), quando o ciclo se repete teremos o dó uma oitava acima, ou o mesmo para a esquerda uma oitava abaixo, se repete de forma decrescente a escala, logo:"}
                representationComponent={
                    <div className='octave-note-container note-item'>
                        <ParagraphBold>{GUITAR.naturalNotesNames[6]}</ParagraphBold>
                        {GUITAR.naturalNotesNames.map((note, index) => (
                            <div key={index}>
                                {index === 0 ? (
                                    <div className='note-item'>
                                        <p className='octave-note'>1ª</p>
                                        <ParagraphBold>{note}</ParagraphBold>
                                    </div>
                                ) : (
                                    <ParagraphBold>{note}</ParagraphBold>
                                )}
                            </div>
                        ))}
                        <div className='note-item'>
                            <p className='octave-note'>8ª</p>
                            <u><ParagraphBold>{GUITAR.naturalNotesNames[0]}</ParagraphBold></u>
                        </div>
                        <ParagraphBold>re</ParagraphBold>
                    </div>
                }
            />
            <ContentTeoric
                title={"Sustenidos"}
                paragraph={"Ao andar uma casa para frente, sobe-se meio (1/2) tom (da esquerda para a direita) temos as notas sustenidas (#), com excessão do Mi e do Si, entre o Fá (F) e o Mi (E), não há sustenido, e nem do Si (B) para o Dó (C)"}
                representationComponent={
                    <div>
                        <div>
                            <NoSusteinedNoteBetween
                                firstNote={"E (Mi)"}
                                secondNote={"F (Fá)"}
                            />
                            <NoSusteinedNoteBetween
                                firstNote={"B (Si)"}
                                secondNote={"C (Dó)"}
                            />
                        </div>
                        <div>
                            <h4>Logo temos:</h4>
                            <div className='respective-note-container'>
                                {GUITAR.allNotes.map((note, index) => (
                                    <div key={index} className='note-item'>
                                        <ParagraphBold>{note}</ParagraphBold>
                                        <Paragraph>{notesNames[index]}</Paragraph>
                                    </div>
                                ))}
                            </div>
                            <hr />
                            <Subtitle>Outras nomenclaturas</Subtitle>
                            <ul>
                                <li><Paragraph><strong>Semi tom</strong> = meio tom (1/2), uma casa á frente ou atrás.</Paragraph></li>
                                <li><Paragraph><strong>Tom</strong> = semi tom + semi tom, duas casas á frente ou atrás.</Paragraph></li>
                                <li><Paragraph>De B (Si) até C (Dó), meio tom /semi tom.</Paragraph></li>
                                <li><Paragraph>De E (Mi) até F (Fá), meio tom/semi tom.</Paragraph></li>
                                <li><Paragraph>De C até C#, meio tom.</Paragraph></li>
                                <li><Paragraph>De C# até D, mais meio tom.</Paragraph></li>
                                <li><Paragraph>Logo a distância entre C e D é de <strong>1 tom</strong></Paragraph></li>
                            </ul>
                        </div>
                    </div>
                }
            />

            <ContentTeoric
                title={"Sustenidos"}
                paragraph={"Chama-se dó sustenido (nota dó aumentada meio (1/2) tom), da esquerda para direita. Veja o exemplo do dó, na 5ª corda, 3ª casa. Onde se encontra o Dó natural:"}
                representationComponent={
                    <div>
                        <ParagraphBold>Dó Sustenido (C#) em azul: 5ª corda em , 4ª casa.</ParagraphBold>
                        <div className="center">
                            <div className='chord-svg'>
                                <ChordSVG
                                    title={"C#"}
                                    startAtFret={0}
                                    numberOfFrets={5}
                                    notes={[
                                        {
                                            fret: 3,
                                            string: 2,
                                            color: "black",
                                            text: "C",
                                        },
                                        {
                                            fret: 4,
                                            string: 2,
                                            color: "blue",
                                            text: "C#",
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                }
            />
            <ContentTeoric
                title={"Bemol (b)"}
                paragraph={"Chama-se dó bemol (nota dó diminuida em meio (1/2) tom), da direita para esquerda. Veja o exemplo do dó, na 5ª corda 3ª casa. ao descer um semi tom, o ciclo se repete com a última nota no caso do C(Dó) de forma descendente."}
                representationComponent={
                    <div>
                        <div className="center">
                            <ParagraphBold>Lembra da oitava?</ParagraphBold>
                        </div>
                        <Paragraph><strong>C (Dó) menos meio tom</strong>, é o mesmo que o B (Si), última nota da escala natural na oitava abaixo.</Paragraph>
                        <div className='center'>
                            <div className='chord-svg'>
                                <ChordSVG
                                    title={"nota B(Si)"}
                                    startAtFret={0}
                                    numberOfFrets={5}
                                    notes={[
                                        {
                                            fret: 2,
                                            string: 2,
                                            color: "blue",
                                            text: "B",
                                        },
                                        {
                                            fret: 3,
                                            string: 2,
                                            color: "black",
                                            text: "C",
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                    </div>
                }
            />
            <ContentTeoric
                title={"Mais exemplos:"}
                representationComponent={
                    <div>
                        {bemolAndSusteinExamples.map((note, index) => (
                            <div className="sustein-and-bemol-examples-container">
                                <p>{note.name}</p>
                                <p>=</p>
                                <p>{note.equals}</p>
                            </div>
                        ))}
                    </div>
                }
            />

            <ContentTeoric
                title={"Escala cromática:"}
                representationComponent={
                    <div>
                        <div className="center"><ParagraphBold>{"Aumentando =>"}</ParagraphBold></div>
                        <div className='respective-note-container note-item'>
                            {GUITAR.allNotes.map((note, index) => (
                                note.endsWith('#') ? (
                                    <div key={index}>
                                        <ParagraphBold>{note}</ParagraphBold>
                                        <ParagraphBold>&#8593;</ParagraphBold>
                                        <ParagraphBold>{notesNames[index + 1] + "b"}</ParagraphBold>
                                    </div>
                                ) : (
                                    <div key={index}>
                                        <Paragraph>{note}</Paragraph>
                                    </div>
                                )
                            ))}
                        </div>
                        <div className="center"><ParagraphBold>{"<= Diminuindo"}</ParagraphBold></div>
                    </div>
                }
            />
            <ContentTeoric
                title={"Note que há uma igualdade no som de algumas notas:"}
                representationComponent={
                    <div>
                        <div>
                            {GUITAR.allNotes.map((note, index) =>
                                note.endsWith('#') && (
                                    <div
                                        key={index}
                                        className="center sustein-and-bemol-examples-container note-item">
                                        <ParagraphBold>{notesNames[index].replace(' sustenido', '#')} = {notesNames[index + 1] + "b"}.</ParagraphBold>
                                    </div>
                                )
                            )}
                        </div>
                        <ul>
                            <li>
                                <Paragraph>Ambas as nomenclaturas estão corretas.</Paragraph>
                            </li>
                        </ul>
                    </div>
                }
            />

            <ContentTeoric
                title={"Escalas"}
                paragraph={"Antes de começarmos a formação dos acordes, é necessário que o aluno saiba, quais notas irão fazer parte na formação destes acordes."}
                representationComponent={
                    <div>
                        <img className='guitar-parts-image' alt='major_scale_table' src={major_scale_table} />

                        <Paragraph>Este conjunto de notas que irão fazer parte na formação dos acordes chamamos de <strong>Escala</strong>.</Paragraph>
                        <Paragraph>Por exemplo, <u>a escala de dó</u></Paragraph>
                        <div className='respective-note-container note-item'>
                            {notesNames.map((note, index) => (
                                <div key={index}>
                                    {!note.endsWith('sustenido') && (
                                        <ParagraphBold>{note}</ParagraphBold>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div>
                            <Paragraph>Neste conjunto de notas iremos formar os acordes da tonalidade de dó maior.</Paragraph>
                            <ParagraphBold>Escala maior</ParagraphBold>
                            <Paragraph>A escala maior é formada por:</Paragraph>
                            <hr />
                            <MajorScale rootNote="C" />
                            <MajorScale rootNote="G" />
                            <MinorScale rootNote="A" />
                            <MinorScale rootNote="E" />
                        </div>
                    </div>
                }
            />

            <ContentTeoric
                title={"Relativos"}
                paragraph={"Se observarmos atentamente notaremos que as mesmas notas que formam a escala de dó maior são as mesmas que formam a escala de lá menor, bem como as notas da escala de sol maior são as mesmas da escala de mi menor."}
                representationComponent={
                    <div>
                        <RelativesToneTable />
                        <Paragraph>
                            Toda <span class="bold-italic">tonalidade maior</span> tem como seu tom relativo uma <span class="bold-italic">tonalidade menor</span>, e toda <span class="bold-italic">tonalidade menor</span> tem com seu tom relativo uma <span class="bold-italic">tonalidade maior</span>.
                        </Paragraph>

                    </div>
                }
            />

            <div id="chords-section" />
            <ContentTeoric
                title={"Acorde"}
                paragraph={"Acorde é o conjunto de notas, tocadas juntas ou arpejdas (tocando uma nota após a outra), seguindo alguns princípios para sua formação."}
            />

            <ContentTeoric
                title={"Acorde maior"}
                paragraph={"Tomando como exemplo a escala de C:"}
                representationComponent={
                    <div>
                        <div>
                            <ul><li>
                                <ParagraphBold>Tabela 1</ParagraphBold>
                            </li></ul>
                            <ChordReferenceGuide chordName='C' />
                        </div>
                        <Paragraph>Um acorde maior, no caso <u><strong>dó maior (C)</strong></u>, tomamos as seguintes notas:</Paragraph>
                        <ul>
                            <li><Paragraph>A nota fundamental do acorde que na qual leva o nome do acorde (<strong>C</strong>)</Paragraph></li>
                            <li><Paragraph>Uma terça (<strong>E</strong>)</Paragraph></li>
                            <li><Paragraph>Uma quinta (<strong>G</strong>)</Paragraph></li>
                            <li><Paragraph>O acorde de dó maior, é formado por <strong>C (Dó)</strong>, <strong> E(Mi)</strong> e <strong>G (Sol)</strong>, no violão você deve tocar somente essas notas combinadas. a corda solta toma como o nome da corda inicial.<strong></strong></Paragraph></li>
                        </ul>

                        <ParagraphBold>Veja a representação no violão:</ParagraphBold>

                        <Guitar
                            response={levels[3].response}
                            startPosition={levels[3].startPosition}
                            selected={levels[3].response}
                        />
                        <GuitarLegend data={guitarLegendData} />

                        <ParagraphBold>Ou uma representação mais comum, e padronizada:</ParagraphBold>
                        <Paragraph>Com os dedos respectivos, 1, 2, 3 ou o 4:</Paragraph>
                        <div className='center'>

                            <div className='chord-svg'>
                                <ChordSVG
                                    title={"C"}
                                    startAtFret={0}
                                    numberOfFrets={5}
                                    notes={[
                                        {
                                            string: 1,
                                            muted: true,
                                        },
                                        {
                                            fret: 1,
                                            string: 5,
                                            text: "1",
                                        },
                                        {
                                            fret: 2,
                                            string: 3,
                                            text: "2",
                                        },
                                        {
                                            fret: 3,
                                            string: 2,
                                            text: "3",
                                        },
                                    ]}
                                />
                            </div>
                        </div>
                    </div >
                }
            />

            <ContentTeoric
                title={"O acorde de Fá"}
                paragraph={"Tomando como exemplo a escala de F:"}
                representationComponent={
                    <div>
                        <div>
                            <ChordReferenceGuide chordName='F' />
                        </div>
                        <Paragraph>Um acorde maior, no caso <u><strong>fá maior</strong></u>, tomamos as seguintes notas:</Paragraph>
                        <ul>
                            <li><Paragraph>A nota fundamental do acorde que na qual leva o nome do acorde (<strong>F</strong> no caso)</Paragraph></li>
                            <li><Paragraph>Uma terça (<strong>A</strong>)</Paragraph></li>
                            <li><Paragraph>Uma quinta (<strong>C</strong>)</Paragraph></li>
                        </ul>

                        <ParagraphBold>Veja a representação no violão:</ParagraphBold>

                        <Guitar
                            response={levels[0].response}
                            startPosition={levels[0].startPosition}
                            selected={levels[0].response}
                        />
                        <GuitarLegend data={guitarLegendData} />

                        <ul>
                            <li>
                                <ParagraphBold>Note que o fá possui muitas notas pressionadas em um mesmo traste, na primeira casa, <u><i>porém nos só temos 4 dedos!</i></u></ParagraphBold>
                            </li>
                            <li>
                                <ParagraphBold>Neste caso fazemos uma pestana, que é pressionar todas as notas de um mesmo traste ao mesmo tempo, usando o primeiro dedo, e eu sei, no começo é bem difícil, mas com o tempo você se acostuma e será cada vez mais natural e indolor, eu juro!</ParagraphBold>
                            </li>
                            <li><Paragraph>O segredo é pressionar o mais perto possível do próximo traste, quase que e cima do metal divisor de casas (traste)</Paragraph></li>
                        </ul>
                        <ParagraphBold>Representação padronizada:</ParagraphBold>
                        <Paragraph>Com os dedos respectivos, 1, 2, 3 ou o 4:</Paragraph>
                        <div className='chord-svg'>
                            <ChordSVG
                                title={'F'}
                                startAtFret={1}
                                numberOfFrets={5}
                                notes={firstFretChordExamples[0].major.chord}
                            />
                            <GuitarLegend data={dinamicLegend('F')} />
                        </div>
                    </div >
                }
            />

            <ContentTeoric
                title={"Acordes menores"}
                paragraph={"Tomando como exemplo a escala de C:"}
                representationComponent={
                    <div>
                        <div>
                            <ChordReferenceGuide chordName='C' />
                        </div>
                        <Paragraph>Um acorde menor, no caso <u><strong>dó menor (Cm)</strong></u>, tomamos as seguintes notas:</Paragraph>
                        <ul>
                            <li><Paragraph>A nota fundamental do acorde que na qual leva o nome do acorde (<strong>C</strong> no caso)</Paragraph></li>
                            <li><Paragraph>Uma <u>terça menor</u> (<strong>Eb</strong>), diminuindo meio (1/2) tom de E, ou o mesmo que <strong>D# (Ré sustenido)</strong></Paragraph></li>
                            <li><Paragraph>Uma quinta (<strong>G</strong>)</Paragraph></li>
                            <li><Paragraph>O acorde de dó menor, é formado por <strong>C (Dó)</strong>, <strong> Eb(Ré#)</strong> e <strong>G (Sol)</strong>, no violão você deve tocar somente essas notas combinadas.<strong></strong></Paragraph></li>
                            <li><Paragraph><img src={tipIcon} /> note que apenas pegamos o acorde maior, e reduzimos um semi tom ou meio (1/2) tom da terça nota. Usando uma segunda forma de Dó maior na 3ª casa.</Paragraph></li>
                        </ul>

                        <Guitar
                            response={levels[2].response}
                            startPosition={levels[2].startPosition}
                            selected={levels[2].response}
                        />
                        <GuitarLegend data={guitarLegendData} />

                        <ParagraphBold>Ou uma representação mais comum, e padronizada:</ParagraphBold>
                        <Paragraph>Com os dedos respectivos, 1, 2, 3 ou o 4:</Paragraph>

                        <div>
                            <MinorChordTrick majorChord={cMajor} minorChord={cMinor} />
                        </div>
                    </div>
                }
            />

            <ContentTeoric
                title={"Acorde menor"}
                paragraph={"Tomando como exemplo a escala de G:"}
                representationComponent={
                    <div>
                        <div>
                            <ChordReferenceGuide chordName='G' />
                        </div>
                        <Paragraph>Um acorde menor, no caso <u><strong>dó menor (Gm)</strong></u>, tomamos as seguintes notas:</Paragraph>
                        <ul>
                            <li><Paragraph>A nota fundamental do acorde que na qual leva o nome do acorde (<strong>G</strong> no caso)</Paragraph></li>
                            <li><Paragraph>Uma <u>terça menor</u> (<strong>B</strong>), diminuindo meio (1/2) tom de B, ou o mesmo que <strong>A# (Lá sustenido)</strong></Paragraph></li>
                            <li><Paragraph>Uma quinta (<strong>D</strong>)</Paragraph></li>
                            <li><Paragraph>O acorde de dó menor, é formado por <strong>G (Sol)</strong>, <strong> Bb(Lá#)</strong> e <strong>D (Ré)</strong>, no violão você deve tocar somente essas notas combinadas, a corda solta toma como o nome da corda inicial.<strong></strong></Paragraph></li>
                            <li><Paragraph><img src={tipIcon} /> note que apenas pegamos o acorde maior, e reduzimos um semi tom ou meio (1/2) tom da terça nota. Usando uma segunda forma de Dó maior na 3ª casa.</Paragraph></li>
                        </ul>

                        <Guitar
                            response={levels[4].response}
                            startPosition={levels[4].startPosition}
                            selected={levels[4].response}
                        />
                        <GuitarLegend data={guitarLegendData} />

                        <ParagraphBold>Ou uma representação mais comum, e padronizada:</ParagraphBold>
                        <Paragraph>Com os dedos respectivos, 1, 2, 3 ou o 4:</Paragraph>

                        <div>
                            {/* <MinorChordTrick majorChord={gMajor} minorChord={gMinor} /> */}
                        </div>
                    </div>
                }
            />

            <ContentTeoric
                title={"Acorde com sétima maior"}
                paragraph={"Tomando como exemplo a escala de C:"}
                representationComponent={
                    <div>
                        <div>
                            <ChordReferenceGuide chordName='C' />
                        </div>
                        <Paragraph>Um acorde maior com sétima maior, no caso <u><strong>dó com sétima (C7M)</strong></u>, tomamos as seguintes notas:</Paragraph>
                        <ul>
                            <li><Paragraph>A <u>nota fundamental</u> do acorde que na qual leva o nome do acorde (<strong>C</strong> no caso)</Paragraph></li>
                            <li><Paragraph>Uma <u>terça</u> (<strong>E</strong>)</Paragraph></li>
                            <li><Paragraph>Uma <u>quinta</u> (<strong>G</strong>)</Paragraph></li>
                            <li><Paragraph>Uma <u>sétima</u> <strong>B (Si)</strong>, a sétima nota.</Paragraph></li>
                            <li><Paragraph>O acorde de dó maior com sétima, é formado por <strong>C (Dó)</strong>, <strong> E (Mi)</strong>, <strong> G (Sol)</strong>, <strong> B (Si)</strong></Paragraph></li>
                            <li><Paragraph><img src={tipIcon} /> note que apenas pegamos o acorde maior, e aproveitamos a nota redundante para descer um semi tom para chegar na sétima nota, veja exemplo na segunda forma de Dó maior com sétima (C7M) na 3ª casa.</Paragraph></li>
                        </ul>

                        <ParagraphBold>Ou uma representação mais comum, e padronizada:</ParagraphBold>
                        <Paragraph>Com os dedos respectivos, 1, 2, 3 ou o 4:</Paragraph>

                        <div>
                            <MinorChordTrick majorChord={cMajor} minorChord={c7M} />
                        </div>
                    </div>
                }
            />

            <ContentTeoric
                title={"Acorde com sétima"}
                paragraph={"Tomando como exemplo a escala de C:"}
                representationComponent={
                    <div>
                        <div>
                            <ChordReferenceGuide chordName='C' />
                        </div>
                        <Paragraph>Um acorde maior com sétima, no caso <u><strong>dó com sétima (C7)</strong></u>, tomamos as seguintes notas:</Paragraph>
                        <ul>
                            <li><Paragraph>A <u>nota fundamental</u> do acorde que na qual leva o nome do acorde (<strong>C</strong> no caso)</Paragraph></li>
                            <li><Paragraph>Uma <u>terça</u> (<strong>E</strong>)</Paragraph></li>
                            <li><Paragraph>Uma <u>quinta</u> (<strong>G</strong>)</Paragraph></li>
                            <li><Paragraph>Uma sétima <strong>Bb (Si bemol)</strong>, a sétima nota diminuindo meio tom.</Paragraph></li>
                            <li><Paragraph>O acorde de dó maior com sétima, é formado por <strong>C (Dó)</strong>, <strong> E (Mi)</strong>, <strong> G (Sol)</strong>, <strong> Bb (Si bemol)</strong>, ou o mesmo que <strong>A# (Lá sustenido)</strong></Paragraph></li>
                            <li><Paragraph><img src={tipIcon} /> note que apenas pegamos o acorde maior, e aproveitamos a nota redundante para descer um tom para chegar na sétima nota, veja exemplo na segunda forma de Dó maior com sétima (C7) na 3ª casa.</Paragraph></li>
                        </ul>

                        <ParagraphBold>Ou uma representação mais comum, e padronizada:</ParagraphBold>
                        <Paragraph>Com os dedos respectivos, 1, 2, 3 ou o 4:</Paragraph>

                        <div>
                            <MinorChordTrick majorChord={cMajor} minorChord={c7} />
                        </div>
                    </div>
                }
            />

            <div>
                <Subtitle>Outros exemplos:</Subtitle>

                <div className='outhers-examples'>
                    {outhersExamplesChord.map((item, index) => (
                        <div className='chord-svg'>
                            <ChordSVG
                                title={item.name}
                                startAtFret={3}
                                numberOfFrets={5}
                                notes={[...item.chord]}
                            />
                            <GuitarLegend data={dinamicLegend(item.name)} />
                        </div>
                    ))}

                </div> </div>

            <div>
                <Subtitle>Lembra do sustenido?</Subtitle>
                <Paragraph>Basta pegar os mesmos acordes e mover um semitom a frente!</Paragraph>
                <div className='outhers-examples'>
                    {outhersExamplesChord.map((item, index) => (
                        <div className='chord-svg'>
                            <ChordSVG
                                title={chordNameToSustein(item.name)}
                                startAtFret={4}
                                numberOfFrets={5}
                                notes={[...item.chord]}
                            />
                            <GuitarLegend data={dinamicLegend(item.name)} />
                        </div>
                    ))}
                </div>
                <Subtitle>E se continuar a mover para frente teremos o acorde de D (ré), e assim sucessivamente, seguindo as notas da escala tanto para frente quanto para trás!</Subtitle>
                <div className='outhers-examples'>
                    {outhersExamplesChord.map((item, index) => (
                        <div className='chord-svg'>
                            <ChordSVG
                                title={chordNameToSustein(item.name).replace('C#', 'D')}
                                startAtFret={5}
                                numberOfFrets={5}
                                notes={[...item.chord]}
                            />
                            <GuitarLegend data={dinamicLegend(item.name)} />
                        </div>
                    ))}
                </div>
            </div>

            <ContentTeoric
                title={"Agora na última, (6ª corda) seque o mesmo padrão, só muda mínimamente a forma."}
                paragraph={"Tomando como exemplo a escala de F:"}
                representationComponent={
                    <div>
                        <div>
                            <ChordReferenceGuide chordName='F' />
                        </div>
                        <Paragraph>O acorde de F (Fá), tomamos as seguintes notas:</Paragraph>
                        <Paragraph>A referência do acorde maior agora é essa:</Paragraph>

                        <div>
                            <div className='outhers-examples'>
                                {firstFretChordExamples.map((item, index) => {

                                    const getChordNames = (chordArray) => { return chordArray.map((chord) => Object.keys(chord)[0]); };

                                    const chordNames = getChordNames(firstFretChordExamples);

                                    const startAtFret = 1;
                                    const labels = [...chordNames];
                                    const chordName = 'F' + item[labels[index]].name;

                                    return (
                                        <div className='chord-svg'>
                                            <ChordSVG
                                                title={chordName}
                                                startAtFret={startAtFret}
                                                numberOfFrets={5}
                                                notes={[...item[labels[index]].chord]}
                                            />
                                            <GuitarLegend data={dinamicLegend(chordName)} />
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                }
            />

            <ContentTeoric
                title={"Formando acordes a partir do fá maior (F)"}
                representationComponent={
                    <div className="chord-guide">
                        <Paragraph>Outros acordes de fá (F), baseado na escala:</Paragraph>
                        <ChordReferenceGuide chordName='F' />
                        <ul className="chord-list">
                            <li className="chord-item">
                                <Paragraph>
                                    (Fm), para fazer um acorde de fá menor, basta diminuir um semitom a terça nota;
                                </Paragraph>
                            </li>
                            <li className="chord-item">
                                <Paragraph>
                                    (F+5), para fazer um acorde de fá com quinta aumentada, basta adicionar um semitom a quinta nota;
                                </Paragraph>
                            </li>
                            <li className="chord-item">
                                <Paragraph>
                                    (F6), para fazer um acorde de fá com sexta, basta adicionar a sexta nota, ou aumentar a quinta nota em um tom;
                                </Paragraph>
                            </li>
                            <li className="chord-item">
                                <Paragraph>
                                    (F7M), para fazer um acorde de fá com sétima maior, basta pegar a segunda tônica ou nota redundante e descer um semitom;
                                </Paragraph>
                            </li>
                            <li className="chord-item">
                                <Paragraph>
                                    (F7), para fazer um acorde de fá com sétima, basta pegar a segunda tônica ou nota redundante e descer um tom;
                                </Paragraph>
                            </li>
                            <li className="chord-item">
                                <Paragraph>
                                    (F9), para fazer um acorde de fá com nona, basta adicionar a nona nota ou subir um tom da nota redundante;
                                </Paragraph>
                            </li>
                        </ul>
                    </div>
                }
            />
        </div >
    );
}

export default TeoricContentScreen;
