/* Long-term Conditions & Self-management — THE TOOL's questions. Taught Fri 9 Oct 2026; no Canvas
   quiz, so these were written from the lecture deck "Self-management support for people with
   long-term conditions 2026.pptx" (Janine Craig) and the workbook posted beside it, "Te Kete
   Haerenga" (Health Navigator, 2022; hn-te-kete-haerenga-final.pdf) — Canvas, Module 9, harvested
   12 Oct 2026. Slides 17–18, 20, 27 and 42 of the deck are pictures with no text, so nothing here
   comes from them (the 7 principles of Huarahi Ora are on those pictures). Every entry names its
   slide or page. */
const R = { sys: 'clin', quiz: 'a-ltc', quizName: 'Long-term Conditions & Self-management — the tool’s questions' };
const D = 'the Long-term Conditions lecture deck (Self-management support for people with long-term conditions 2026), ';
const K = 'Te Kete Haerenga (Health Navigator, 2022; on Canvas with the lecture), ';

export const MCQS = [
  { ...R, q: 'How does the Long-term Conditions lecture define a long-term condition?',
    options: ['Over 6 months (or expected to be), ongoing or recurring, with a big impact on life', 'Any illness needing a hospital stay of more than two weeks and follow-up in the community', 'A condition that cannot be cured and will shorten the person’s life expectancy by years', 'Any infectious disease that keeps coming back more than three times in a single year'],
    correct: 0,
    why: 'Any condition lasting or expected to last longer than 6 months, ongoing or recurring, that can have a significant impact on people’s lives. LTCs are also called non-communicable diseases (NCDs) and chronic conditions. Their prevalence in New Zealand is rising and many people have several — nearly one in four adults reported two or more in the 2012/13 NZ Health Survey.',
    src: D + 'slides 3–4' },
  { ...R, q: 'Which statement describes self-management as the Long-term Conditions lecture defines it?',
    options: ['The nurse manages the condition, and teaches the person to follow the plan exactly as written', 'A one-off education session given to the person on the day they leave hospital', 'Any way the person manages their own condition — an ongoing process, not a one-off', 'Managing the condition without any health professionals once it has become stable'],
    correct: 2,
    why: 'Self-management is any way in which a person with an LTC manages their condition(s) by themselves: making informed choices, adapting new perspectives and skills, practising new health behaviours, keeping emotional stability. It is an ongoing process, not a one-time event — a continuum of learning in which the person and their whānau work together with health professionals.',
    src: D + 'slides 6–7' },
  { ...R, q: 'The Long-term Conditions lecture says self-management theory fits the views of Māori, Pacific and South Asian peoples. Why?',
    options: ['They value managing alone above relying on family and whānau support', 'They emphasise interdependence rather than personal independence', 'They prefer to see specialists rather than their general practice team', 'They see a long-term condition as a purely physical problem to be fixed'],
    correct: 1,
    why: 'Self-management theory takes a holistic view that gives priority to engaging with people with LTCs within their wider social context. That is in keeping with Māori, Pacific and South Asian views, which emphasise interdependence rather than personal independence.',
    src: D + 'slide 8' },
  { ...R, q: 'Which of these is NOT on the Long-term Conditions lecture’s list of what a good self-manager does?',
    options: ['Knows about their condition and how it affects them', 'Follows a care plan agreed with their health professionals', 'Monitors and manages their own signs and symptoms', 'Makes decisions alone so as not to burden the team'],
    correct: 3,
    why: 'A good self-manager knows about their condition; follows a treatment (care) plan agreed with their health professionals; ACTIVELY SHARES in decision-making with them; monitors and manages signs and symptoms; manages the physical, emotional and social impact; adopts lifestyles that promote health; and has access to support services and the confidence to use them.',
    src: D + 'slide 11' },
  { ...R, q: 'In Wagner’s Chronic Care Model, as the Long-term Conditions lecture describes it, what is patient activation?',
    options: ['A person’s knowledge, skill and confidence for managing their own health care', 'How often a person turns up to their general practice for a routine check-up', 'Starting a person on their first long-term medicine after the diagnosis is made', 'A district nurse’s first assessment visit at home after the person leaves hospital'],
    correct: 0,
    why: 'Patient activation is an individual’s knowledge, skill and confidence for managing their health care, and it is closely related to health outcomes: more highly activated people are more likely to engage in positive health behaviours. The model’s six components: community resources, health system support, self-management support, delivery system design, decision support, clinical information systems.',
    src: D + 'slides 21–22' },
  { ...R, q: 'Journey to Wellbeing — Huarahi Ora is a guide for primary care teams supporting people with long-term conditions. It moves away from the older “self-management support” toward an approach that is more…',
    options: ['specialist-led, hospital-based and the same for everyone', 'digital-first, built around apps and fully self-directed', 'whānau inclusive, culturally safe and community-designed', 'cost-focused, targeted at high users and limited in time'],
    correct: 2,
    why: 'Journey to Wellbeing — Huarahi Ora shifts away from what was known as self-management support (SMS) to an approach that is more whānau inclusive, culturally safe and community-designed. It is built around a waka, representing a journey, with 7 principles for designing programmes for people with long-term conditions.',
    src: D + 'slide 16' },
  { ...R, q: 'Which is part of the nurse’s role in supporting self-management, according to the Long-term Conditions lecture?',
    options: ['Setting the person’s health goals for them, so that the goals stay medically realistic', 'Accepting people as experts in their own lives and encouraging active participation', 'Steering people away from self-management groups, which can spread misinformation', 'Closing the referral once the person has finished their first education session'],
    correct: 1,
    why: 'The nurse gives information so people make informed decisions and set goals FOR THEMSELVES; encourages active participation, acknowledging they are experts in their own lives; supports attendance at self-management groups and advocates for groups where none exist; keeps it culturally appropriate; follows up after programmes with regular updates and opportunistic learning; and refers to support agencies.',
    src: D + 'slides 24–25' },
  { ...R, q: 'Which is one of the four essential components of self-management support programmes in the Long-term Conditions lecture?',
    options: ['Weekly weigh-ins', 'Specialist leadership', 'Online-only delivery', 'Cultural relevance'],
    correct: 3,
    why: 'The four essential components: health literacy, cultural relevance, behaviour change, and the role of the health professional in supporting self-management. Group programmes are community based; participants show better health behaviours, fewer emergency department visits, more self-efficacy and better health status.',
    src: D + 'slides 29–30' },
  { ...R, q: 'A woman with asthma asks why she should keep using her preventer inhaler when she feels well. What does the Long-term Conditions lecture say?',
    options: ['Take the preventer every day, whether or not there are symptoms', 'Stop it when symptoms settle, and restart at the next attack', 'Use it only before exercise or contact with a known trigger', 'Swap it for the reliever inhaler, which works faster on symptoms'],
    correct: 0,
    why: 'A good asthma self-manager takes their prescribed medicine, especially the preventer, every day regardless of whether they have symptoms; knows their symptoms and triggers; records peak flow readings; keeps active; avoids smoke and fumes; and has a written asthma action plan for when symptoms worsen.',
    src: D + 'slides 34–36' },
  { ...R, q: 'Which foods does the Long-term Conditions lecture say a person with coeliac disease must avoid?',
    options: ['Dairy, eggs and tree nuts, which trigger the immune response', 'Red meat, processed sugar and anything containing caffeine', 'Food containing gluten: wheat, rye, barley and oats', 'Acidic food such as citrus fruit, tomatoes and vinegar'],
    correct: 2,
    why: 'Coeliac disease is a life-long auto-immune disease with health implications if untreated. The person avoids food containing gluten — wheat, rye, barley and oats — manages cross-contamination in preparing and storing food, reads food labels, has an action plan for being “glutened”, and watches for signs of other auto-immune diseases.',
    src: D + 'slides 39–40' },
  { ...R, q: 'Te Kete Haerenga, the self-management workbook posted with the Long-term Conditions lecture, asks for SMART action plans. What does ITS “T” stand for?',
    options: ['Timely', 'Trackable', 'Team-based', 'Tested'],
    correct: 1,
    why: 'Te Kete Haerenga: Specific, Measurable, Achievable, Realistic and TRACKABLE — something you can record over time to see how you are doing. The course’s own Nursing Care Plan template ends its SMART goal in “timely”, so check which one a question is about.',
    src: K + 'page 10 (booklet pp. 18–19); the Nursing Care Plan Template (case study)' },
  { ...R, q: 'Te Kete Haerenga’s wellbeing wheel has four sections — physical, mental, social and spiritual. Which model are they taken from?',
    options: ['Fonofale', 'Te Wheke', 'Maslow’s hierarchy of needs', 'Te Whare Tapa Whā'],
    correct: 3,
    why: 'The four sections — Te Taha Tinana (physical), Te Taha Hinengaro (mental), Te Taha Whānau (social) and Te Taha Wairua (spiritual) — are the four dimensions of Māori wellbeing in Te Whare Tapa Whā, which the booklet uses because “it works for everyone”.',
    src: K + 'page 4 (booklet pp. 6–7)' },
];

export const SAQS = [
  { ...R, pts: 3, q: 'Define a long-term condition, self-management, and self-management support.',
    steps: [
      'Long-term condition: any condition lasting, or expected to last, longer than 6 months — ongoing or recurring — with a significant impact on people’s lives (also called NCDs or chronic conditions).',
      'Self-management: any way in which a person with an LTC manages their condition(s) themselves — an ongoing process, not a one-time event.',
      'Self-management support: the help, tools and techniques given to people with LTCs to manage their health day to day — educating and motivating them, in a collaborative partnership.',
    ],
    src: D + 'slides 3, 6–7, 13 and 45' },
  { ...R, pts: 4, q: 'Describe four ways a nurse supports self-management for a person with a long-term condition.',
    steps: [
      'Gives information so the person can make informed decisions and set their own goals (a personal care plan agreed together).',
      'Encourages active participation, acknowledging the person is the expert in their own life.',
      'Supports them to attend self-management groups (or advocates for groups where none exist), and makes sure self-management is culturally appropriate.',
      'Follows up after education with regular updates and opportunistic learning, and refers to support agencies as needed.',
    ],
    src: D + 'slides 24–26' },
  { ...R, pts: 4, q: 'Using asthma as the example, what does a person need to know, and have access to, to be a good self-manager?',
    steps: [
      'Know their asthma, its symptoms and triggers, and take the preventer every day whether or not they have symptoms.',
      'Use a peak flow meter and record readings; keep active; quit smoking and keep clear of smoke and fumes.',
      'Have a written asthma action plan: daily medicines, avoiding allergens and irritants, and when, how and who to contact as symptoms worsen.',
      'Access: their asthma team (GP, practice nurse, pharmacist), the online asthma control test, asthma apps, Asthma New Zealand and the Asthma & Respiratory Foundation NZ.',
    ],
    src: D + 'slides 33–37' },
];
