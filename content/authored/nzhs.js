/* New Zealand Health Strategy 2023 — THE TOOL's questions. The lecture has no Canvas quiz,
   so these were written from the lecture deck "New Zealand Health Strategy 2023 Sem2 BN2.pptx"
   (Canvas, harvested 19 Sep 2026). Every entry names the slide it was written from. */
const R = { sys: 'pop', quiz: 'a-nzhs', quizName: 'NZ Health Strategy 2023 — the tool’s questions' };
const D = 'the New Zealand Health Strategy 2023 deck, ';

export const MCQS = [
  { ...R, q: "What are the two long-term goals of the New Zealand Health Strategy?",
    options: ["Shorter waiting lists and lower costs","Health equity and better health outcomes","More nurses and more hospitals","Centralised services and telehealth"],
    correct: 1,
    why: "Goal 1: achieve health equity — especially for Māori, Pacific, disabled and other groups who currently have poorer outcomes. Goal 2: improve health outcomes for all New Zealanders, so everyone can live longer, healthier and more independent lives.",
    src: "the New Zealand Health Strategy 2023 deck, slide 16" },
  { ...R, q: "Which Act replaced the District Health Boards with Health New Zealand?",
    options: ["Pae Ora (Healthy Futures) Act 2022","HPCA Act 2003","NZ Public Health and Disability Act 2000","Health and Disability Commissioner Act 1994"],
    correct: 0,
    why: "The Pae Ora (Healthy Futures) Act 2022 replaced the DHB system with Health New Zealand (Te Whatu Ora), established the Māori Health Authority (Te Aka Whai Ora — since disestablished, 2024) and the Public Health Agency. The lecture note: the Pae Ora Act is the “how” behind the Health Strategy.",
    src: "the New Zealand Health Strategy 2023 deck, slide 6 and the speaker notes to slide 2" },
  { ...R, q: "Which statement describes health equity?",
    options: ["Everyone gets the same resources","Funding follows how many people use a service","People get what they need to reach similar outcomes","Care only for those who can show need"],
    correct: 2,
    why: "Equality gives everyone the same resources; equity gives people what they need to achieve similar outcomes. Health equity means everyone has a fair and just opportunity to be as healthy as possible, which requires removing obstacles such as poverty and discrimination.",
    src: "the New Zealand Health Strategy 2023 deck, slide 10" },
];

export const SAQS = [
  { ...R, pts: 3, q: 'Define health equity, explain how it differs from equality, and name one group the New Zealand Health Strategy prioritises for equity.',
    steps: [
      'Health equity: everyone has a fair and just opportunity to be as healthy as possible — which means removing obstacles to health such as poverty, discrimination and their consequences.',
      'Difference: equality gives everyone the SAME resources; equity gives people what they NEED in order to reach similar outcomes.',
      'Any one of: Māori · Pacific peoples · disabled people · other groups with poorer outcomes (the deck also names rural and low-income communities). In the strategy equity rests on ōritetanga from Te Tiriti o Waitangi.',
    ],
    src: D + 'slides 5, 9–10 and 16' },
];
