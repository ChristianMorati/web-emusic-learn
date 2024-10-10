import React, { useState } from 'react';
import './index.css';
import { Paragraph, ParagraphBold } from '../../styled-components';
import { GuitarNotesGenerator } from '../../components/guitar/guitar-notes-generator';
import ChordSVG from 'react-chord-svg';
import MajorScale from '../../module/teoric-content/components/major-scale';
import MinorScale from '../../module/teoric-content/components/minor-scale';
import RelativesToneTable from '../../module/teoric-content/components/relatives-tone-table';

const GUITAR = new GuitarNotesGenerator();


// const chordNotes = {
//     C: ['C', 'E', 'G'],
//     Cm: ['C', 'Eb', 'G'],
//     D: ['D', 'F#', 'A'],
//     Dm: ['D', 'F', 'A'],
//     E: ['E', 'G#', 'B'],
//     Em: ['E', 'G', 'B'],
//     F: ['F', 'A', 'C'],
//     Fm: ['F', 'Ab', 'C'],
//     G: ['G', 'B', 'D'],
//     Gm: ['G', 'Bb', 'D'],
//     A: ['A', 'C#', 'E'],
//     Am: ['A', 'C', 'E'],
//     B: ['B', 'D#', 'F#'],
//     Bm: ['B', 'D', 'F#'],
// };

// const ChordNotes = () => {
//     const [selectedChord, setSelectedChord] = useState('C');

//     const handleChange = (event) => {
//         setSelectedChord(event.target.value);
//     };

//     return (
//         <div>
//             <h2>Acordes e Notas Relativas</h2>
//             <select onChange={handleChange} value={selectedChord}>
//                 {Object.keys(chordNotes).map((chord) => (
//                     <option key={chord} value={chord}>
//                         {chord}
//                     </option>
//                 ))}
//             </select>
//             <h3>Notas de {selectedChord}:</h3>
//             <p>{chordNotes[selectedChord].join(', ')}</p>
//         </div>
//     );
// };


const ContentTeoric = ({
    title,
    paragraph,
    representationComponent
}) => {
    return (
        <div>
            <h3>{title}</h3>
            <Paragraph>{paragraph}</Paragraph>
            <div>
                {representationComponent}
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
        { name: "Fá aumentado meio (1/2) tom", equals: "Fá# (Fá sustenidu)" },
        { name: "Lá aumentado meio (1/2) tom", equals: "Lá# (Lá sustenidu)" },
        { name: "Ré diminuído meio (1/2) tom", equals: "Réb (Ré bemol)" },
        { name: "Lá diminuído meio (1/2) tom", equals: "Láb (Lá bemol)" },
    ]

    return (
        <div>
            <div>
                <h1 className={'section-number'}>1</h1>
            </div>
            <ContentTeoric
                title={"Conhecendo as notas representantes:"}
                paragraph={'Escala natural:'}
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

            <div>
                <h1 className={'section-number'}>2</h1>
            </div>
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
                paragraph={"Ao andar uma casa para frente, sobe-se meio (1/2) tom (da esquerda para a direita) temos os Sustenidos#, com excessão do Mi e do Si, entre o Fá(F) e o Mi(E), não há sustenido, e nem do Si(B) para o Dó(C)"}
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
                            <h3>Logo temos:</h3>
                            <div className='respective-note-container'>
                                {GUITAR.allNotes.map((note, index) => (
                                    <div key={index} className='note-item'>
                                        <ParagraphBold>{note}</ParagraphBold>
                                        <Paragraph>{notesNames[index]}</Paragraph>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                }
            />
            <ContentTeoric
                title={"As únicas notas que não são separadas por meio tom ou (Semitom) são:"}
                paragraph={"O Mi -> Fá, e do Si -> Dó, ou seja não costuma-se chamar de mi# ou fáb, ou ainda, dób ou si#."}
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
                        <ul>
                            <li><Paragraph><strong>Semi tom</strong> = meio tom (1/2), uma casa á frente ou atrás.</Paragraph></li>
                            <li><Paragraph><strong>Tom</strong> = semi tom(meio tom (1/2)) + semi tom(meio tom (1/2)), duas casas á frente ou atrás.</Paragraph></li>
                            <li><Paragraph>A distância entre C e D é de 1 tom (dois semi tons).</Paragraph></li>
                            <li><Paragraph>De B até C, meio tom.</Paragraph></li>
                            <li><Paragraph>De C até C#, meio tom.</Paragraph></li>
                            <li><Paragraph>De C# até D, mais meio tom.</Paragraph></li>
                            <li><Paragraph>Logo a distância entre C e D é de <strong>1 tom</strong></Paragraph></li>
                        </ul>

                    </div>
                }
            />

            <div>
                <h1 className={'section-number'}>3</h1>
            </div>
            <ContentTeoric
                title={"Sustenidos"}
                paragraph={"Chama-se dó sustenido (nota dó aumentada meio (1/2) tom). da direita para esquerda. Veja o exemplo do dó, na 5ª corda, 3ª casa. Onde se encontra o Dó natural:"}
                representationComponent={
                    <div className="center">
                        <p><strong>Dó Sustenido (C#)</strong></p>
                        <div className='chord-svg'>
                            <ChordSVG
                                title={"nota C#"}
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
                }
            />
            <ContentTeoric
                title={"Bemol(b)"}
                paragraph={"Chama-se dó bemol (nota dó diminuida em meio (1/2) tom), da direita para esquerda. Veja o exemplo do dó, na 5ª corda 3ª casa. ao descer um tom, o ciclo se repete com a última nota no caso do C(Dó)."}
                representationComponent={
                    <div className="center">
                        <Paragraph>Lembra da oitava?</Paragraph>
                        <Paragraph><strong>C (Dó) - meio tom.</strong>, é o mesmo que o B (Si), última nota da escala natural na oitava abaixo.</Paragraph>
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

            <div>
                <h1 className={'section-number'}>4</h1>
            </div>
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
                    </div>
                }
            />

            <div>
                <h1 className={'section-number'}>5</h1>
            </div>
            <ContentTeoric
                title={"Escalas"}
                paragraph={"Antes de começarmos a formação dos acordes, é necessário que o aluno saiba, quais notas irão fazer parte na formação destes acordes."}
                representationComponent={
                    <div>
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


            <div>
                <h1 className={'section-number'}>6</h1>
            </div>
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
            <ContentTeoric
                title={"Formação de acordes"}
                representationComponent={
                    <div>
                        <ParagraphBold>Cifras</ParagraphBold>
                        <Paragraph>É um processo utilizado para representar os acordes, para isso utiliza-se as letras do alfabeto.</Paragraph>
                    </div>
                }
            />
        </div >
    );
}

export default TeoricContentScreen;
