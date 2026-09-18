/* Everything that makes this sim INP rather than HS2 lives in this one file.
   template.html, build.mjs, stem-html.mjs, bind-images.mjs, resplice.mjs and
   content/explain.mjs are the shared Paper Sim pipeline: a new sim is
   template + bank + this file (EXAM-ROOM-SPEC §3a). Nothing here authors a question. */

export const PATHS = {
  /* bank/questions.json is written by the shared parser, unchanged:
       HS2_EXPORT="<cap>" HS2_OUT="<repo>/bank" node hs2-test1/audit/parse-quizzes.mjs
     The capture dir is outside the repo (the graded pages are 1.4 MB each); override it
     with SIM_CAP when the estate lives somewhere else. */
  bank: './bank',
  cap: process.env.SIM_CAP || 'C:/Users/USER/Desktop/github/_inbox/INP Capture',
};

/* Canvas quiz id -> [group, display name]. One quiz = one exam topic in this course.
   Names are the Canvas titles, minus the word "Quiz". */
export const QUIZ = {
  210104: ['care', 'Nursing Process'],
  210126: ['care', 'Nursing Care Plans'],
  210122: ['care', 'Holistic Health Assessment'],
  210115: ['care', 'Clinical Documentation'],
  210111: ['clin', 'Vital Signs'],
  210118: ['clin', 'Infection Prevention & Control'],
  210102: ['clin', 'Diabetes'],
  210130: ['clin', 'Health Literacy & Patient Education'],
  210103: ['pop', 'Social Determinants of Health'],
  210107: ['pop', 'Population Health'],
  210116: ['pop', 'Epidemiology & Demography'],
  210119: ['prof', 'Informed Consent'],
  210129: ['prof', 'Evidence-based Practice'],
  210105: ['prof', 'Self-care in Nursing'],
  210108: ['prof', 'Knowledge Check (orientation)'],
};

/* deal-weight routing for mixed quizzes — this course has none */
export const ROUTE = [];

/* Questions that stay in the bank (Pick my rep, Learn) but are never DEALT into a mock
   paper. The Knowledge Check sits in the course's orientation module, and ten of its
   sixteen questions are about being a student here — attendance, extensions, academic
   integrity, online-exam rules, netiquette — not nursing practice. The six that ARE
   nursing content (professional values, health-information privacy, the NZNO social media
   guideline, the NCNZ Code of Conduct principles, the Professional Boundaries guideline)
   are dealt like any other. Read by hand; matched by quiz + stem prefix; a stale entry
   fails the build. */
export const NO_MOCK = [
  { quiz: '210108', k: 'question two ' },       // attendance expectation
  { quiz: '210108', k: 'question three ' },     // applying for an extension
  { quiz: '210108', k: 'question five ' },      // academic integrity values
  { quiz: '210108', k: 'question six ' },       // plagiarism
  { quiz: '210108', k: 'question seven ' },     // misconduct (typed blanks)
  { quiz: '210108', k: 'question eight ' },     // translator app in an online exam
  { quiz: '210108', k: 'question nine ' },      // music in an online exam
  { quiz: '210108', k: 'question twleve ' },    // netiquette dropdowns (the quiz's own spelling)
  { quiz: '210108', k: 'question thirteen ' },  // replying to course email
  { quiz: '210108', k: 'question sixteen ' },   // online communication dropdowns
];

export const EXCLUDE = [];
export const NO_IMAGE_OK = [];

export const META = {
  id: 'inp-final',
  prefix: 'inpf.',
  title: 'INP · Paper Sim — Final exam',
  h1: 'INP · Paper Sim',
  short: 'INP Paper Sim',
  paper: 'Introduction to Nursing Practice',
  bankOf: 'the INP lecturers’',          // "dealt from … whole question bank"
  who: 'the INP lecturers',              // "Model answers are the tool’s, not …’s"
  aiCtx: 'I’m a first-year nursing student in New Zealand sitting the final exam for Introduction to Nursing Practice (60 multiple-choice + 10 short-answer questions).',
  sitting: { what: 'the INP final', date: '2026-11-04', when: 'Wed 4 Nov · 1:00 pm', cohortClose: null },
  /* the real paper, from the course syllabus: "Final Exam - 60 Multi-Choice Questions +
     10 Short-Answer Questions", 50%. Its length has not been published -> the full mock is untimed. */
  shape: { closed: 60, saq: 10, minutes: null, mini: 12 },
  sys: {
    care: 'Nursing process & assessment',
    clin: 'Clinical knowledge',
    pop: 'Population health & equity',
    prof: 'Professional & legal',
  },
  sysShort: { care: 'Process', clin: 'Clinical', pop: 'Population', prof: 'Professional' },
  hue: { care: 28, clin: 158, pop: 268, prof: 210 },
  playlist: null,
  refLbl: { slide: 'Their slide', her: 'Their notes', course: 'Course file', patton: 'Textbook' },
  help: {
    what: 'Every practice quiz posted on Canvas for <b>Introduction to Nursing Practice</b>, unlocked: sit them as often as you like, marked instantly — or let the tool deal you mixed mock papers from the whole bank. The final is <b>Wed 4 Nov 2026 · 1:00 pm · 60 multi-choice + 10 short-answer · 50% of the paper</b> (the course syllabus). Its length has not been published.',
    groups: 'The four groups (Process · Clinical · Population · Professional) are <b>this tool’s sorting</b> of the 15 quizzes, so a mock can be dealt in proportion and you can drill one area. The course itself runs by week, not by theme. One quiz = one lecture topic.',
    held: 'Ten lectures have <b>no Canvas quiz at all</b> — Community Needs Assessment, Tikanga &amp; Kawa Whakaruruhau, Pain Assessment, Family-centred Care, NZ Health Strategy, Discharge Planning, Therapeutic Use of Self, Rheumatic Fever, Roles of Nurses, Long-term Conditions. They are examinable and this bank cannot see them; the focus list carries them so they are not forgotten.',
  },
  focusCopy: {
    pending: 'The checklist for this paper — every lecture topic, what you must be able to DO, how it gets asked and where it stops — is being built from the 27 lecture decks. Until it lands: the 15 quizzes below cover 14 of the 24 lectures. <b>Ten lectures have no quiz</b> (Community Needs Assessment, Tikanga &amp; Kawa Whakaruruhau, Pain Assessment, Family-centred Care, NZ Health Strategy, Discharge Planning, Therapeutic Use of Self, Rheumatic Fever, Roles of Nurses, Long-term Conditions) — a clean run here does not mean those are covered.',
  },
};
