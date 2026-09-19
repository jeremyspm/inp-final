/* Tikanga Best Practice & Kawa Whakaruruhau — THE TOOL's questions. The lecture has no
   Canvas quiz, so these were written from the lecture deck
   "Tikanga_Best_Practice_and_Kawa_Whakaruruhau.pptx" (Canvas, harvested 19 Sep 2026).
   Every entry names the slide it was written from. */
const R = { sys: 'prof', quiz: 'a-tikanga', quizName: 'Tikanga & Kawa Whakaruruhau — the tool’s questions' };
const D = 'the Tikanga Best Practice and Kawa Whakaruruhau deck, ';

export const MCQS = [
  { ...R, q: 'Under Kawa Whakaruruhau (cultural safety), who decides whether the care given was culturally safe?',
    options: ['The nurse who gave the care', 'The person and whānau receiving the care', 'The charge nurse auditing the ward', 'The Nursing Council of New Zealand'],
    correct: 1,
    why: 'The deck’s first line on Kawa Whakaruruhau: cultural safety is determined by the recipient of care. It focuses on the individual’s and whānau experience to define and improve the quality of care — the nurse cannot declare their own practice safe.',
    src: D + 'slides 2 and 6' },
  { ...R, q: 'Which statement about cultural safety matches the Tikanga & Kawa Whakaruruhau lecture?',
    options: ['It is another name for cultural awareness, which is where safe practice ends', 'It is achieved once a nurse has learned the customs of each culture they will meet', 'It means treating every patient identically, regardless of culture or background', 'It goes beyond cultural awareness and sensitivity; competence alone is not enough'],
    correct: 3,
    why: 'Cultural safety extends beyond cultural awareness and cultural sensitivity; cultural competence may contribute to delivering health care but is not enough to improve health outcomes. It also recognises nurses as inadvertent bearers of power who must reflect on their own biases.',
    src: D + 'slide 6' },
  { ...R, q: 'Tikanga is described as “the Māori way of doing things”. Which word is it derived from, and what does that word mean?',
    options: ['Tika — right or correct', 'Tapu — sacred or restricted', 'Taonga — something treasured', 'Tinana — the physical body'],
    correct: 0,
    why: 'Tikanga comes from tika, meaning “right” or “correct”. Kawa, its partner term, is customs, protocols and etiquette; together they are the lores and mores that form the cornerstone of life for Māori.',
    src: D + 'slide 8' },
  { ...R, q: 'What does noa mean?',
    options: ['Sacred, prohibited, restricted or set apart from ordinary use', 'A treasured possession handed down through the whānau', 'Neutral, ordinary or unrestricted — free from tapu', 'The spiritual dimension of a person’s wellbeing'],
    correct: 2,
    why: 'Noa is to be made neutral, ordinary or unrestricted, freed from the extensions of tapu. Tapu and noa together form the basis of law and order, of safe and unsafe practices.',
    src: D + 'slide 9' },
  { ...R, q: 'According to the Tikanga & Kawa Whakaruruhau lecture, which parts of the body are tapu?',
    options: ['The hands, feet and back', 'The head, genitalia and heart', 'The eyes, ears and mouth', 'Only the head'],
    correct: 1,
    why: 'The deck (citing Durie, 1998) names the head, genitalia and heart — and notes that people can also be tapu at different times and in differing circumstances. This is why “ask rather than assume” sits under respecting tikanga.',
    src: D + 'slides 14 and 19' },
  { ...R, q: 'Sir Mason Durie’s reading of tapu, quoted in the Tikanga & Kawa Whakaruruhau lecture, relates it to what in modern terms?',
    options: ['Punishment for wrongdoing', 'Ownership of land', 'Rank within the iwi', 'Safety and risk precautions'],
    correct: 3,
    why: 'For modern times tapu has been reframed in a protective sense: according to Durie it relates to safety and risk precautions, and restrictions and prohibitions protect tapu from violation. It is viewed as a preventive measure as well as a cause of illness.',
    src: D + 'slides 10–11' },
  { ...R, q: 'A nurse meets a new patient, introduces themself and their role, checks how to pronounce the patient’s name correctly and takes a moment to find a point of connection before starting the admission. Which principle of tikanga best practice is this?',
    options: ['Whakawhanaungatanga', 'Whakamarumarutia', 'Tino rangatiratanga', 'Whatumanawa'],
    correct: 0,
    why: 'Whakawhanaungatanga: build trusting relationships, pronounce names correctly, introduce yourself and your role, create meaningful connections. The lecture note on it is “relationship before task”.',
    src: D + 'slide 17 and the speaker notes to slide 12' },
];

export const SAQS = [
  { ...R, pts: 3, q: 'Define Kawa Whakaruruhau (cultural safety) and state two things it requires of the nurse.',
    steps: [
      'Definition: cultural safety is care that is judged safe by the RECIPIENT of care — the person’s and whānau experience defines the quality of the care, with the aim of equitable outcomes for Māori.',
      'It requires critical self-reflection: the nurse examines how their own biases and attitudes affect their relationships with individuals, whānau and other health professionals.',
      'It requires the nurse to recognise and address power imbalance, bias and racism — nurses are inadvertent bearers of power — and it goes beyond cultural awareness, sensitivity or competence.',
    ],
    src: D + 'slides 2 and 6' },
  { ...R, pts: 3, q: 'Define tapu and noa, and give one way a nurse respects these concepts in practice.',
    steps: [
      'Tapu: something sacred, prohibited, restricted or set apart. Today it is understood in a protective sense — Durie relates it to safety and risk precautions. It can apply to people, places, events and relationships, permanently or for a time.',
      'Noa: made neutral, ordinary or unrestricted — free from the extensions of tapu. Tapu and noa together mark out safe and unsafe practices.',
      'In practice (any one): the head, genitalia and heart are tapu, so ask and explain before touching rather than assume · support karakia and spiritual practices · protect taonga and personal items.',
    ],
    src: D + 'slides 9–11, 14 and 19' },
  { ...R, pts: 3, q: 'Name three of the Tikanga & Kawa Whakaruruhau lecture’s principles of tikanga best practice and give one nursing action for each.',
    steps: [
      'Any three principles, one mark each with its action. Whakawhanaungatanga — build a trusting relationship: introduce yourself and your role, pronounce the person’s name correctly.',
      'Whānau-centred care / partnership and shared decision-making — include whānau where consent is given, support collective decision-making, recognise that whānau structures differ.',
      'Respect for tikanga and taonga (or manaakitanga) — support karakia, protect taonga and personal items, respect tapu and noa, ask rather than assume.',
    ],
    src: D + 'slides 16–19' },
];
