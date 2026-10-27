/* Rheumatic Fever — THE TOOL's questions. The lecture has no Canvas quiz, so these were written
   from its two decks (Canvas, Module 8, harvested 12 Oct 2026): "Rheumatic Fever.pptx" (Janine
   Craig, posted 20 Sep) and "RF lecture - Guest speaker.pptx" (Jessica Murray, Clinical Nurse
   Specialist, KidzFirst; posted 22 Sep). Every entry names the slide it was written from.
   The two decks disagree on one point — Janine's says penicillin treats the Strep A infection,
   the guest speaker's says oral amoxicillin treats the strep throat and "there is no treatment
   for ARF" — so no question here turns on which antibiotic treats the acute infection. */
const R = { sys: 'clin', quiz: 'a-rf', quizName: 'Rheumatic Fever — the tool’s questions' };
const D = 'the Rheumatic Fever lecture deck, ';
const G = 'the guest speaker’s Rheumatic Fever deck (Jessica Murray, CNS KidzFirst), ';

export const MCQS = [
  { ...R, q: "Rheumatic fever is:",
    options: ["A bacterial infection of the heart valves","An auto-immune response to a Group A Strep throat infection","A viral childhood illness","A form of juvenile arthritis"],
    correct: 1,
    why: "Rheumatic fever is a serious auto-immune disease that can affect the heart, joints, brain and skin. It can develop when strep throat, strep skin infections or scarlet fever are not treated properly: the immune system responds to the earlier infection with a generalised inflammatory response in other parts of the body.",
    src: "the Rheumatic Fever lecture deck, slides 3–4" },
  { ...R, q: "In New Zealand, rheumatic fever mainly affects:",
    options: ["Māori and Pacific children and teenagers","Older adults living alone","Babies in day-care","Adults with type 2 diabetes"],
    correct: 0,
    why: "Anyone can get rheumatic fever, but it is more common in children and teenagers (aged 4 to 19), and in New Zealand it mainly affects Māori and Pacific children. It is common in families where others have had it, and someone who has had it before is more likely to get it again with another strep throat.",
    src: "the Rheumatic Fever lecture deck, slide 6" },
  { ...R, q: "A child develops jerky movements she cannot control two weeks after a sore throat. This is:",
    options: ["Ataxia","Chorea","A febrile seizure","Tetany"],
    correct: 1,
    why: "Chorea — fidgety, jerky movements — is on the lecture’s list of symptoms; the guest speaker calls it uncoordinated movements and jerking. It is the brain being part of the auto-immune inflammation (heart, joints, brain and skin).",
    src: "the Rheumatic Fever lecture deck, slides 3 and 9; the guest speaker’s Rheumatic Fever deck (Jessica Murray, CNS KidzFirst), slide 6" },
  { ...R, q: "After rheumatic fever, penicillin injections are given:",
    options: ["Every 7 days for a year","Every 3 months","Once a year","Every 28 days for at least 10 years"],
    correct: 3,
    why: "To avoid strep throat and rheumatic fever again, a child needs penicillin injections every 28 days for at least 10 years or until they are 21, whichever is longer — longer still if the heart valves are damaged. The first is given before leaving hospital, and penicillin is never stopped without discussing it with the child’s doctor.",
    src: "the Rheumatic Fever lecture deck, slides 10–12" },
  { ...R, q: "Rheumatic heart disease most often damages which valves?",
    options: ["Tricuspid and pulmonary","Pulmonary only","Mitral and/or aortic","All four equally"],
    correct: 2,
    why: "Inflammation in the body scars the heart valves — normally the mitral and/or aortic valve. A damaged valve can leak, letting blood flow the wrong way (heard as a murmur). Carditis ranges from mild to severe and can lead to heart surgery, complications and death; symptoms include breathlessness lying flat or on exertion and lacking energy.",
    src: "the guest speaker’s Rheumatic Fever deck (Jessica Murray, CNS KidzFirst), slide 8; the Rheumatic Fever lecture deck, slides 15–16" },
];

export const SAQS = [
  { ...R, pts: 4, q: 'A 12-year-old is going home after treatment for rheumatic fever. Describe the ongoing management and protection the nurse would teach the child and their whānau.',
    steps: [
      'Penicillin injections every 28 days for at least 10 years or until age 21, whichever is longer; the first is given before leaving hospital.',
      'Never miss or stop them without the doctor: on holiday or moving, get it early or arranged elsewhere; district nurses can give it at school, at home or in a clinic.',
      'Extra antibiotic cover before medical procedures, operations or dental visits, and carry the rheumatic fever wallet card to show the dentist or doctor.',
      'Get every sore throat checked; good dental hygiene; regular exercise once the doctor says it is safe; a healthy weight; be smoke-free.',
    ],
    src: D + 'slides 10–14; ' + G + 'slide 13' },
];
