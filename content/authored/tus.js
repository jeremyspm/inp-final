/* Therapeutic Use of Self — THE TOOL's questions. The lecture has no Canvas quiz, so these
   were written from the lecture deck "Therapeutic Use of Self BN2.pptx" (Canvas, harvested
   19 Sep 2026). Every entry names the slide it was written from. */
const R = { sys: 'prof', quiz: 'a-tus', quizName: 'Therapeutic Use of Self — the tool’s questions' };
const D = 'the Therapeutic Use of Self deck, ';

export const MCQS = [
  { ...R, q: 'In the Therapeutic Use of Self lecture, what is a nurse’s professional “agency” used for?',
    options: ['Meeting the nurse’s own need to feel useful', 'Service to the patient — that is, for therapeutic benefit', 'Acting on the employer’s behalf', 'Gaining authority over the patient’s decisions'],
    correct: 1,
    why: 'A therapeutic agent acts on behalf of someone or takes an active role. A nurse’s professional agency is employed in service to the patient, for therapeutic benefit — nurses understand they can make a difference and know how to use their professional influence and knowledge to benefit patients.',
    src: D + 'slides 5–6' },
  { ...R, q: 'Which theorist’s Theory of Human Caring — caring moments, carative factors, transpersonal caring — does the Therapeutic Use of Self lecture teach?',
    options: ['Jean Watson', 'Florence Nightingale', 'Patricia Benner', 'Dorothea Orem'],
    correct: 0,
    why: 'Jean Watson’s Theory of Human Caring: caring is the heart of nursing — caring for the whole person, not just the illness. Every nurse–patient interaction is a caring moment; the ten carative factors are its guiding principles.',
    src: D + 'slides 10–12' },
  { ...R, q: 'The Therapeutic Use of Self lecture names two things through which a nurse develops therapeutic agency. Which are they?',
    options: ['Advanced clinical skills and good time management', 'Seniority in the team and specialisation in one area', 'Competent communication and emotional intelligence', 'Assertiveness and professional detachment'],
    correct: 2,
    why: '“Developing Therapeutic Agency”: competent communication and emotional intelligence. The lecture notes add that a sense of agency develops through continual learning from clinical experience, and through reflecting on and evaluating your own performance.',
    src: D + 'slides 13 and 38' },
  { ...R, q: 'A frightened patient says “nobody has explained this properly”, and the nurse responds with empathy and active listening before doing anything else. Which type of communication technique is this?',
    options: ['Assertive', 'Closed questioning', 'Surface acting', 'Responsive'],
    correct: 3,
    why: 'Responsive techniques build mutual understanding from the same point of view — empathy, listening, validation — and are used to build relationships with patients and families. Assertive techniques promote understanding of DIFFERING points of view and are often used when advocating for clients.',
    src: D + 'slides 21–24' },
  { ...R, q: 'When does the Therapeutic Use of Self lecture say assertive communication skills are often used?',
    options: ['When advocating for clients', 'When building rapport at a first meeting', 'When a patient needs comforting', 'When documenting care'],
    correct: 0,
    why: 'Assertive skills are often used when advocating for clients; responsive skills are for building relationships. Effective communicators blend and balance the two — asserting their own ideas while responding with understanding to other people’s.',
    src: D + 'slides 21–23 and 25' },
  { ...R, q: 'At the end of a long shift a nurse does not feel calm, but keeps a calm, kind manner with an angry patient — “putting on a mask”. What is this called?',
    options: ['Deep acting', 'Surface acting', 'Self-awareness', 'Transpersonal caring'],
    correct: 1,
    why: 'Surface acting is the overt expression of an emotion the person does not feel but thinks the situation needs. Deep acting is a genuine shift in the nurse’s own feelings, reached by trying to understand the situation from the patient’s perspective. Both are part of emotional labour, under self-regulation.',
    src: D + 'slides 28–30' },
  { ...R, q: 'Which component of emotional intelligence involves reflecting on your own judgements of patients, rather than denying or ignoring them?',
    options: ['Motivation', 'Social skills', 'Self-awareness', 'Self-regulation'],
    correct: 2,
    why: 'Self-awareness is the accurate assessment and knowledge of self in relation to others: bringing negative evaluations of patients into conscious awareness so their meaning can be explored and corrective action taken. It is the base of the deck’s emotional-intelligence hierarchy.',
    src: D + 'slides 26–27' },
  { ...R, q: 'In the Therapeutic Use of Self lecture, what does “motivation” mean as a component of emotional intelligence?',
    options: ['Working hard in order to earn praise, good grades and other rewards', 'Encouraging patients to stick to their treatment by setting goals with them', 'Keeping your own emotions hidden from patients so that they feel safe and comfortable', 'Being driven by internal values and commitment rather than external rewards'],
    correct: 3,
    why: 'Motivation: driven by internal factors rather than external rewards — a strong desire to meet personal and professional goals and a commitment to ethics and personal values. “Motivation keeps nurses practising ethically, even when no one is watching.”',
    src: D + 'slides 31–32' },
];

export const SAQS = [
  { ...R, pts: 5, q: 'Name the five components of emotional intelligence taught in the Therapeutic Use of Self lecture and say in a few words what each means for a nurse.',
    steps: [
      'Self-awareness — accurate knowledge of yourself in relation to others; noticing your own judgements of patients so you can act on them.',
      'Self-regulation — managing your natural emotional responses so that you respond in a way that gives safety and comfort (emotional labour: surface and deep acting).',
      'Motivation — driven by your own values, goals and ethics, not by external reward.',
      'Empathy — understanding the situation from the other person’s point of view and responding with care and compassion.',
      'Social skills — communicating, managing conflict, cooperating and collaborating with patients, families and the team.',
    ],
    src: D + 'slides 26–34' },
  { ...R, pts: 3, q: 'Define surface acting and deep acting, and say which component of emotional intelligence they belong to.',
    steps: [
      'Surface acting: outwardly expressing an emotion you do not feel because the situation needs it — “putting on a mask” (“I don’t feel calm or kind, but I act calm and kind anyway”).',
      'Deep acting: a real shift in how the nurse feels, reached by actively trying to understand the situation from the patient’s perspective.',
      'Both are forms of emotional labour, which belongs to SELF-REGULATION — nurses still feel emotions, but not so intensely that they cannot function.',
    ],
    src: D + 'slides 28–29' },
  { ...R, pts: 3, q: 'Distinguish responsive from assertive communication techniques and give a nursing example of each.',
    steps: [
      'Responsive techniques build mutual understanding from the SAME point of view and are used to build relationships with patients and families. Example: expressing empathy to a frightened patient and listening to their feelings before trying to fix the problem.',
      'Assertive techniques promote understanding of DIFFERING points of view and are often used in advocacy. Example: acknowledging why a patient is refusing a medicine while clearly explaining why it matters, or speaking up for the patient to the team.',
      'Skilled communicators blend and balance both — asserting their own ideas while responding with understanding to others’.',
    ],
    src: D + 'slides 21–25' },
];
