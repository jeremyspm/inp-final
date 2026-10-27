/* Therapeutic Use of Self — THE TOOL's questions. The lecture has no Canvas quiz, so these
   were written from the lecture deck "Therapeutic Use of Self BN2.pptx" (Canvas, harvested
   19 Sep 2026). Every entry names the slide it was written from. */
const R = { sys: 'prof', quiz: 'a-tus', quizName: 'Therapeutic Use of Self — the tool’s questions' };
const D = 'the Therapeutic Use of Self deck, ';

export const MCQS = [
  { ...R, q: "Whose Theory of Human Caring is taught in Therapeutic Use of Self?",
    options: ["Jean Watson","Florence Nightingale","Patricia Benner","Dorothea Orem"],
    correct: 0,
    why: "Jean Watson’s Theory of Human Caring: caring is the heart of nursing — caring for the whole person, not just the illness. Every nurse–patient interaction is a caring moment; the ten carative factors are its guiding principles.",
    src: "the Therapeutic Use of Self deck, slides 10–12" },
  { ...R, q: "A tired nurse keeps a calm, kind manner with an angry patient — “putting on a mask”. This is:",
    options: ["Deep acting","Surface acting","Self-awareness","Transpersonal caring"],
    correct: 1,
    why: "Surface acting is the overt expression of an emotion the person does not feel but thinks the situation needs. Deep acting is a genuine shift in the nurse’s own feelings, reached by trying to understand the situation from the patient’s perspective. Both are part of emotional labour, under self-regulation.",
    src: "the Therapeutic Use of Self deck, slides 28–30" },
  { ...R, q: "Reflecting on your own judgements of patients is which part of emotional intelligence?",
    options: ["Motivation","Social skills","Self-awareness","Self-regulation"],
    correct: 2,
    why: "Self-awareness is the accurate assessment and knowledge of self in relation to others: bringing negative evaluations of patients into conscious awareness so their meaning can be explored and corrective action taken. It is the base of the deck’s emotional-intelligence hierarchy.",
    src: "the Therapeutic Use of Self deck, slides 26–27" },
];

export const SAQS = [
  { ...R, pts: 3, q: 'Define surface acting and deep acting, and say which component of emotional intelligence they belong to.',
    steps: [
      'Surface acting: outwardly expressing an emotion you do not feel because the situation needs it — “putting on a mask” (“I don’t feel calm or kind, but I act calm and kind anyway”).',
      'Deep acting: a real shift in how the nurse feels, reached by actively trying to understand the situation from the patient’s perspective.',
      'Both are forms of emotional labour, which belongs to SELF-REGULATION — nurses still feel emotions, but not so intensely that they cannot function.',
    ],
    src: D + 'slides 28–29' },
];
