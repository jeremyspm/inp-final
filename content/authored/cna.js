/* Community Needs Assessment — THE TOOL's questions. The lecture has no Canvas quiz, so
   these were written from the lecture deck "Community Needs Assessment Framework Sem 2.pptx"
   (Canvas, harvested 19 Sep 2026). Every entry names the slide it was written from. */
const R = { sys: 'pop', quiz: 'a-cna', quizName: 'Community Needs Assessment — the tool’s questions' };
const D = 'the Community Needs Assessment Framework deck, ';

export const MCQS = [
  { ...R, q: 'McMurray’s Community Assessment Framework has four steps. Which list gives them in the right order?',
    options: ['Map → Engage → Empower → Analyse', 'Engage → Map → Analyse → Empower', 'Analyse → Engage → Map → Empower', 'Engage → Analyse → Map → Empower'],
    correct: 1,
    why: 'The deck repeats the same four-step strip throughout: ENGAGE with the community, MAP strengths, resources and risks, ANALYSE the information gathered, EMPOWER the community. You cannot analyse before you have mapped, and nothing starts until the community has been engaged.',
    src: D + 'slides 10 and 38' },
  { ...R, q: 'In the ENGAGE step a nurse first approaches “key community members”. Who does the Community Needs Assessment lecture mean by that?',
    options: ['The residents with the poorest health outcomes, because the need is greatest there', 'Whoever responds to a random household survey, so that the sample is unbiased', 'People who hold respect or authority in the community, formally or informally', 'Only elected officials such as the local council, who alone can give formal consent'],
    correct: 2,
    why: 'Key community members are those who hold positions of respect and/or authority, through formal OR informal leadership — community elders and kaumātua, local healthcare providers, teachers, social workers, council or community board members, and others who provide services there.',
    src: D + 'slides 12–13' },
  { ...R, q: 'A student nurse drives slowly through a suburb noting the state of the housing, the bus routes, the parks and where the nearest pharmacy is. What is this method, and what kind of data does it produce?',
    options: ['A windscreen survey — primary data', 'A windscreen survey — secondary data', 'A SWOT analysis — primary data', 'A census — secondary data'],
    correct: 0,
    why: 'A windscreen survey is a quick overview of a community gained by driving around and observing. Primary data is what you observe yourself — observations of community life; secondary data is your research into what others have already collected.',
    src: D + 'slides 27 and 29' },
  { ...R, q: 'Which of these is SECONDARY data for a community assessment?',
    options: ['Notes from your own windscreen survey', 'What a kaumātua tells you about local priorities', 'Your observation of older people doing Tai Chi in the park', 'Census figures for the suburb from Stats NZ'],
    correct: 3,
    why: 'Secondary data is your research: Stats NZ, Ministry of Health publications, the New Zealand Health Survey, library databases. The other three are all things you saw or heard yourself in the community — primary data.',
    src: D + 'slides 26–28' },
  { ...R, q: 'In the MAP step, what does the Community Needs Assessment lecture tell you to use as the framework for organising the information you collect?',
    options: ['The five steps of the nursing process (ADPIE)', 'The Social Determinants of Health Assessment Circle', 'The four walls of Te Whare Tapa Whā', 'A SWOT grid of strengths, weaknesses, opportunities and threats'],
    correct: 1,
    why: 'MAP = talk with everyday community members, and collect information using the Social Determinants of Health Assessment Circle as the framework for organising the data. The SWOT grid belongs to the next step, ANALYSE.',
    src: D + 'slides 18 and 20' },
  { ...R, q: 'In the Community Needs Assessment lecture’s SWOT analysis, which two headings sit under “harmful to health”?',
    options: ['Strengths and Opportunities', 'Weaknesses and Opportunities', 'Weaknesses and Threats', 'Strengths and Threats'],
    correct: 2,
    why: 'Helpful to health: Strengths (what is working well) and Opportunities (the possibilities — new services, beneficial trends). Harmful to health: Weaknesses (what is harming health now) and Threats (what health issues could arise, what could worsen inequities if unaddressed).',
    src: D + 'slide 33' },
  { ...R, q: 'A community assessment finds high rates of respiratory illness linked to cold, damp housing, and the nurse advocates for a healthy-homes initiative. Which Te Tiriti principle does the Community Needs Assessment lecture use this example for?',
    options: ['Whakamarumarutia — active protection', 'Kōwhiringa — options', 'Pātuitanga — partnership', 'Tino rangatiratanga — self-determination'],
    correct: 0,
    why: 'Active protection asks “what health risks require protection, and are they being protected?” — the deck’s own example is respiratory illness linked to poor housing, prompting advocacy for healthy homes. Options is about culturally appropriate services being available; partnership is about who nurses work alongside.',
    src: D + 'slide 34' },
];

export const SAQS = [
  { ...R, pts: 4, q: 'Name the four steps of McMurray’s Community Assessment Framework in order, and say briefly what the nurse does in each.',
    steps: [
      'ENGAGE — approach key community members (elders/kaumātua, local health providers, teachers, board members), gain their consent, and be guided by their perceptions and priorities.',
      'MAP — map the community’s strengths, resources and risks by talking with everyday community members and collecting information, organised with the Social Determinants of Health Assessment Circle.',
      'ANALYSE — go deeper into what is helping or harming health (for example with a SWOT analysis), keeping the interpretation aligned with the community’s own perceptions and priorities.',
      'EMPOWER — share the findings with the community and work with them to develop intervention strategies and measures that sustain positive community life.',
    ],
    src: D + 'slides 10, 12, 18, 32 and 39' },
  { ...R, pts: 3, q: 'What is a windscreen survey? Give two things a nurse would look for, and state whether the information is primary or secondary data.',
    steps: [
      'A quick overview (“snapshot”) of a community gained by driving through it and observing, taking notes to analyse later — the aim is a general sense of its strengths and needs.',
      'Any two of: parks and recreation spaces · schools and childcare · shops, supermarkets and food access · housing conditions · transport and access · clinics, hospitals and pharmacies · visible health behaviours such as people out walking.',
      'It is PRIMARY data — what you observe yourself. It should then be confirmed by talking with community groups and by records such as immunisation rates and public health indicators.',
    ],
    src: D + 'slides 27, 29 and 30' },
  { ...R, pts: 4, q: 'A nurse analyses community information with a SWOT analysis. State what each of the four letters asks, and which two are “helpful” and which two “harmful” to health.',
    steps: [
      'Strengths (helpful) — what makes this community’s wellbeing thrive; what is working well. Example from the lecture notes: strong whānau networks.',
      'Weaknesses (harmful) — what is harming health now; issues that could lead to health problems. Example: limited GP access, high deprivation.',
      'Opportunities (helpful) — the possibilities: new services on the horizon or existing trends that could benefit the community. Example: mobile health services.',
      'Threats (harmful) — what health issues could arise, or what could worsen inequities if unaddressed; they can be planned for so their impact is reduced. Example: cost-of-living pressure.',
    ],
    src: D + 'slide 33 and the speaker notes to slide 11' },
];
