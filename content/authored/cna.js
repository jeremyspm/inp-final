/* Community Needs Assessment — THE TOOL's questions. The lecture has no Canvas quiz, so
   these were written from the lecture deck "Community Needs Assessment Framework Sem 2.pptx"
   (Canvas, harvested 19 Sep 2026). Every entry names the slide it was written from. */
const R = { sys: 'pop', quiz: 'a-cna', quizName: 'Community Needs Assessment — the tool’s questions' };
const D = 'the Community Needs Assessment Framework deck, ';

export const MCQS = [
  { ...R, q: "Put the four steps of McMurray’s Community Assessment Framework in order.",
    options: ["Map, Engage, Empower, Analyse","Engage, Map, Analyse, Empower","Analyse, Engage, Map, Empower","Engage, Analyse, Map, Empower"],
    correct: 1,
    why: "The deck repeats the same four-step strip throughout: ENGAGE with the community, MAP strengths, resources and risks, ANALYSE the information gathered, EMPOWER the community. You cannot analyse before you have mapped, and nothing starts until the community has been engaged.",
    src: "the Community Needs Assessment Framework deck, slides 10 and 38" },
  { ...R, q: "A nurse drives through a suburb noting housing, bus routes and parks. This is:",
    options: ["A windscreen survey","A SWOT analysis","A census","A focus group"],
    correct: 0,
    why: "A windscreen survey is a quick overview of a community gained by driving around and observing. Primary data is what you observe yourself — observations of community life; secondary data is your research into what others have already collected.",
    src: "the Community Needs Assessment Framework deck, slides 27 and 29" },
  { ...R, q: "Which of these is secondary data for a community assessment?",
    options: ["Your windscreen survey notes","A kaumātua’s view of local priorities","Your observations in the park","Stats NZ census figures"],
    correct: 3,
    why: "Secondary data is your research: Stats NZ, Ministry of Health publications, the New Zealand Health Survey, library databases. The other three are all things you saw or heard yourself in the community — primary data.",
    src: "the Community Needs Assessment Framework deck, slides 26–28" },
  { ...R, q: "In the MAP step, which framework organises the community information?",
    options: ["The nursing process (ADPIE)","The Social Determinants of Health Assessment Circle","Te Whare Tapa Whā","A SWOT grid"],
    correct: 1,
    why: "MAP = talk with everyday community members, and collect information using the Social Determinants of Health Assessment Circle as the framework for organising the data. The SWOT grid belongs to the next step, ANALYSE.",
    src: "the Community Needs Assessment Framework deck, slides 18 and 20" },
  { ...R, q: "In a SWOT analysis, which two headings are harmful to health?",
    options: ["Strengths and Opportunities","Weaknesses and Opportunities","Weaknesses and Threats","Strengths and Threats"],
    correct: 2,
    why: "Helpful to health: Strengths (what is working well) and Opportunities (the possibilities — new services, beneficial trends). Harmful to health: Weaknesses (what is harming health now) and Threats (what health issues could arise, what could worsen inequities if unaddressed).",
    src: "the Community Needs Assessment Framework deck, slide 33" },
];

export const SAQS = [
  { ...R, pts: 3, q: 'What is a windscreen survey? Give two things a nurse would look for, and state whether the information is primary or secondary data.',
    steps: [
      'A quick overview (“snapshot”) of a community gained by driving through it and observing, taking notes to analyse later — the aim is a general sense of its strengths and needs.',
      'Any two of: parks and recreation spaces · schools and childcare · shops, supermarkets and food access · housing conditions · transport and access · clinics, hospitals and pharmacies · visible health behaviours such as people out walking.',
      'It is PRIMARY data — what you observe yourself. It should then be confirmed by talking with community groups and by records such as immunisation rates and public health indicators.',
    ],
    src: D + 'slides 27, 29 and 30' },
];
