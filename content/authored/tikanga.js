/* Tikanga Best Practice & Kawa Whakaruruhau — THE TOOL's questions. The lecture has no
   Canvas quiz, so these were written from the lecture deck
   "Tikanga_Best_Practice_and_Kawa_Whakaruruhau.pptx" (Canvas, harvested 19 Sep 2026).
   Every entry names the slide it was written from. */
const R = { sys: 'prof', quiz: 'a-tikanga', quizName: 'Tikanga & Kawa Whakaruruhau — the tool’s questions' };
const D = 'the Tikanga Best Practice and Kawa Whakaruruhau deck, ';

export const MCQS = [
  { ...R, q: "Under Kawa Whakaruruhau (cultural safety), who decides whether care was culturally safe?",
    options: ["The nurse giving the care","The person and whānau receiving it","The charge nurse","The Nursing Council"],
    correct: 1,
    why: "The deck’s first line on Kawa Whakaruruhau: cultural safety is determined by the recipient of care. It focuses on the individual’s and whānau experience to define and improve the quality of care — the nurse cannot declare their own practice safe.",
    src: "the Tikanga Best Practice and Kawa Whakaruruhau deck, slides 2 and 6" },
  { ...R, q: "Tikanga comes from the word “tika”. What does tika mean?",
    options: ["Right or correct","Sacred or restricted","Treasured","The physical body"],
    correct: 0,
    why: "Tikanga comes from tika, meaning “right” or “correct”. Kawa, its partner term, is customs, protocols and etiquette; together they are the lores and mores that form the cornerstone of life for Māori.",
    src: "the Tikanga Best Practice and Kawa Whakaruruhau deck, slide 8" },
  { ...R, q: "What does noa mean?",
    options: ["Sacred or restricted","A treasured possession","Ordinary, free from tapu","Spiritual wellbeing"],
    correct: 2,
    why: "Noa is to be made neutral, ordinary or unrestricted, freed from the extensions of tapu. Tapu and noa together form the basis of law and order, of safe and unsafe practices.",
    src: "the Tikanga Best Practice and Kawa Whakaruruhau deck, slide 9" },
  { ...R, q: "Which parts of the body are tapu?",
    options: ["Hands, feet and back","Head, genitalia and heart","Eyes, ears and mouth","The head only"],
    correct: 1,
    why: "The deck (citing Durie, 1998) names the head, genitalia and heart — and notes that people can also be tapu at different times and in differing circumstances. This is why “ask rather than assume” sits under respecting tikanga.",
    src: "the Tikanga Best Practice and Kawa Whakaruruhau deck, slides 14 and 19" },
  { ...R, q: "A nurse introduces themself, checks how to say the patient’s name and finds a point of connection. This is:",
    options: ["Whakawhanaungatanga","Whakamarumarutia","Tino rangatiratanga","Whatumanawa"],
    correct: 0,
    why: "Whakawhanaungatanga: build trusting relationships, pronounce names correctly, introduce yourself and your role, create meaningful connections. The lecture note on it is “relationship before task”.",
    src: "the Tikanga Best Practice and Kawa Whakaruruhau deck, slide 17 and the speaker notes to slide 12" },
];

export const SAQS = [
  { ...R, pts: 3, q: 'Define Kawa Whakaruruhau (cultural safety) and state two things it requires of the nurse.',
    steps: [
      'Definition: cultural safety is care that is judged safe by the RECIPIENT of care — the person’s and whānau experience defines the quality of the care, with the aim of equitable outcomes for Māori.',
      'It requires critical self-reflection: the nurse examines how their own biases and attitudes affect their relationships with individuals, whānau and other health professionals.',
      'It requires the nurse to recognise and address power imbalance, bias and racism — nurses are inadvertent bearers of power — and it goes beyond cultural awareness, sensitivity or competence.',
    ],
    src: D + 'slides 2 and 6' },
];
