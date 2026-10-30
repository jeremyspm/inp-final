/* Primary Health Care & Health Promotion — THE TOOL's questions. The lecture (Wed 14 Oct) has no Canvas
   quiz, so these were written from its deck "Primary Health Care & Health Promotion.pptx" (Canvas,
   harvested 19 Oct 2026). Nearly every slide is a picture of its text, so the deck was read slide by slide
   from those pictures (30 Oct 2026). Every entry names the slide it was written from. The exam themes list
   names this lecture twice: "Theory of Health Promotion, upstream/midstream/downstream factors" and
   "Principles of Primary Health Care" — one short answer each. */
const R = { sys: 'pop', quiz: 'a-phc', quizName: 'Primary Health Care & Health Promotion — the tool’s questions' };
const D = 'the Primary Health Care & Health Promotion deck, ';

export const MCQS = [
  { ...R, q: "Which of these is a principle of primary health care?",
    options: ["Hospital-based specialist care","User-pays services","Community participation","Disease-centred treatment"],
    correct: 2,
    why: "The Alma-Ata Declaration (1978) set out five principles of primary health care: accessibility, community participation, health promotion, appropriate technology and inter-sectoral collaboration. Primary health care is people-centred rather than disease-centred.",
    src: D + "slides 4, 7 and 9" },
  { ...R, q: "The Alma-Ata Declaration (1978) defined primary health care as essential care that is:",
    options: ["Accessible, affordable and appropriate for all","Led by specialists in large hospitals","Free for those who can show need","Paid for through private health insurance schemes"],
    correct: 0,
    why: "Alma-Ata, the first international conference on primary health care, defined it as essential care that is accessible, affordable and appropriate FOR ALL. It moved away from a medical approach towards human rights, equity and community participation.",
    src: D + "slides 6–7" },
  { ...R, q: "Public health nurses working with housing and transport to build safe cycle paths is:",
    options: ["Appropriate technology","Accessibility","Community participation","Inter-sectoral collaboration"],
    correct: 3,
    why: "Inter-sectoral collaboration is coordinated action across sectors — health, education, housing, transport, social services — to address the broader determinants of health. The deck’s example is public health nurses working with local government, housing and transport on housing conditions and safe walking and cycling paths.",
    src: D + "slides 18–19" },
  { ...R, q: "Which is an upstream approach to health promotion?",
    options: ["Insulin teaching for a newly diagnosed patient","A blood glucose screening clinic","Legislation limiting tobacco availability","Wound care in a district nursing clinic"],
    correct: 2,
    why: "Upstream approaches address the root causes — social, economic and environmental conditions — through policy and community engagement, before health issues start. Screening and education are midstream (changing individual behaviour once issues have started); treating people already unwell is downstream. The deck’s policy example is the Smokefree Environments and Regulated Products (Smoked Tobacco) Amendment Act 2022.",
    src: D + "slides 34 and 39–42" },
  { ...R, q: "The “Slip, Slop, Slap and Wrap” campaign is which part of the health promotion continuum?",
    options: ["Influencing policy","Social marketing","Community action","Health screening"],
    correct: 1,
    why: "The health promotion continuum runs health education, health screening, community action, social marketing and influencing policy. Social marketing uses marketing strategies to influence health behaviours for the public good, raising awareness through media; Slip, Slop, Slap and Wrap promotes sun safety to reduce New Zealand’s high skin cancer rates.",
    src: D + "slides 29 and 33" },
];

export const SAQS = [
  { ...R, pts: 3, q: 'Name the five principles of primary health care from the Alma-Ata Declaration, and describe two of them with a nursing example.',
    steps: [
      'The five principles (Alma-Ata Declaration, 1978): accessibility, community participation, health promotion, appropriate technology and inter-sectoral collaboration.',
      'Accessibility, the first and most important: health services are available, affordable and reachable for all, regardless of location or socioeconomic status — e.g. rural health nurses bringing care to remote communities.',
      'A second, any one of: community participation — the community is involved in planning, implementing and maintaining its health services (Whānau Ora nurses); health promotion — enabling people to increase control over their health (school nurses); appropriate technology — affordable, sustainable and culturally acceptable (telehealth); inter-sectoral collaboration — health working with education, housing and transport (public health nurses).',
    ],
    src: D + 'slides 7 and 9–19' },
  { ...R, pts: 3, q: 'Health promotion can be upstream, midstream or downstream. Describe each approach and give a nursing intervention for each.',
    steps: [
      'Upstream: addresses the root causes of health issues — social, economic and environmental conditions — through policy and community engagement, to prevent health issues before they start; e.g. policy changes, community development, improving living conditions.',
      'Midstream: modifies individual behaviours and lifestyle factors once issues have started to show, to stop them getting worse; e.g. screenings, referrals, support services, health education and social marketing.',
      'Downstream: clinical care and treatment for people already experiencing health problems; e.g. managing chronic conditions such as diabetes or hypertension, acute care, administering medications, rehabilitation.',
    ],
    src: D + 'slides 37–47' },
];
