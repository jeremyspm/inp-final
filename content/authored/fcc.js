/* Family-centred Care — THE TOOL's questions. The lecture has no Canvas quiz, so these were
   written from the lecture deck "Family Centred Care.pptx" (Canvas, harvested 19 Sep 2026).
   Every entry names the slide it was written from. */
const R = { sys: 'care', quiz: 'a-fcc', quizName: 'Family-centred Care — the tool’s questions' };
const D = 'the Family Centred Care deck, ';

export const MCQS = [
  { ...R, q: 'How does Stats NZ define a family?',
    options: ['Anyone the person identifies as family, whether or not they are related to them or share a household', 'Two or more people in one household: a couple (with or without children) or one parent with children', 'Three or more generations of related people who live together at one address', 'People related to one another by birth, marriage or adoption, wherever in the country they live'],
    correct: 1,
    why: 'The Stats NZ definition is household-based: two or more people living in the same household who are a couple (with or without children) or one parent and their children. The deck’s point is that family is often more than who lives in our household — and that official definitions can decide access to resources.',
    src: D + 'slide 5 and the speaker notes to slide 6' },
  { ...R, q: 'Which definition of family does the Family-centred Care lecture give for NURSING practice?',
    options: ['Whoever the person identifies as family, with or without biological or legal ties', 'The person recorded in the clinical notes as the patient’s legal next of kin', 'The people who usually live at the same address as the patient, related or not', 'Blood relatives and spouses only, because they are the people with legal standing'],
    correct: 0,
    why: '“Family in nursing”: a set of relationships that the person identifies as family, or a network of individuals who influence each other’s lives, whether or not there are actual biological or legal ties. The person defines their family — the nurse does not.',
    src: D + 'slide 15' },
  { ...R, q: 'The Family-centred Care lecture builds “facilitating family-centred care” from three elements. Which are they?',
    options: ['Assessment, planning and implementation, evaluation', 'Communication and advocacy, privacy, and respect for the person', 'Relationship, participation and involvement, tailoring care', 'Engaging the family, mapping its resources, empowering it'],
    correct: 2,
    why: 'Relationship (a genuine, positive, mutually respectful partnership), Participation & Involvement (respecting the autonomy of the individual and family), and Tailoring Care (care designed around the patient’s and family’s needs and context).',
    src: D + 'slides 27–28, 31 and 33' },
  { ...R, q: 'What are a genogram and an ecomap used for?',
    options: ['Recording the immunisation history of every member of a family across generations', 'Screening the members of a household for partner, child or elder abuse', 'Calculating a family’s deprivation score from its address, income and household size', 'Showing a person’s family structure and relationships, within and beyond the family'],
    correct: 3,
    why: 'They are visual representations of a person and their relationships to the family structure, and of relationships within and beyond the family’s boundaries — a useful way of engaging people and families in an active discussion about their relationships.',
    src: D + 'slide 30' },
  { ...R, q: 'A patient’s daughter, who is his main caregiver, asks the nurse how her father is doing. He has not objected to her being told. What does the Family-centred Care lecture say about privacy here?',
    options: ['Nothing at all may be shared with her until he has given consent in writing, because she is not the patient', 'His presence, condition and progress may be shared with her in line with professional practice, unless he vetoes it', 'Only the doctor in charge of his care may speak to family members about his condition or progress', 'Everything in his clinical record may be shared with any relative who asks for it, because family are partners in his care'],
    correct: 1,
    why: 'Health professionals can disclose information about a patient’s presence, condition and progress to caregivers or close relatives in line with recognised professional practice — as long as the patient has not vetoed that disclosure. That is not the whole record, and the patient’s veto stands.',
    src: D + 'slide 18 (Health Information Privacy Code)' },
  { ...R, q: 'Which three forms of abuse does the Family-centred Care lecture group together as “family violence”?',
    options: ['Partner abuse, child abuse and elder abuse', 'Physical, verbal and financial abuse', 'Child abuse, bullying and neglect', 'Partner abuse, workplace abuse and elder abuse'],
    correct: 0,
    why: 'Partner abuse, child abuse and elder abuse are collectively termed family violence. Nurses have a key role in identifying and supporting people experiencing it, and screening is done in most health care facilities.',
    src: D + 'slide 19' },
  { ...R, q: 'Which statement about the Whānau Ora initiative matches the Family-centred Care lecture?',
    options: ['It is a hospital discharge programme run by Health NZ for Māori patients going home', 'It pays funding directly to individuals, according to their household income', 'It was launched in 2010, led by Dame Tariana Turia, and is overseen by Te Puni Kōkiri', 'It replaced the New Zealand Health Strategy in 2023 under the Pae Ora (Healthy Futures) Act'],
    correct: 2,
    why: 'Whānau Ora was launched in 2010, led by Dame Tariana Turia and overseen by Te Puni Kōkiri (the Ministry of Māori Development). Funding is allocated according to Māori population by area, from census data; community agencies use it to work with whānau — a culturally grounded, holistic approach that addresses individual needs in a whānau context.',
    src: D + 'slide 23' },
  { ...R, q: 'Which of these is one of the four shared core functions of families listed in the Family-centred Care lecture?',
    options: ['Deciding what medical treatment each member will accept', 'Replacing the need for health services', 'Keeping health information from outsiders', 'Being direct providers of healthcare to other members'],
    correct: 3,
    why: 'The four: to care for, nurture and support each other; to share financial and material resources; to provide socialisation, guidance, identification and a sense of belonging; and to be direct providers of healthcare to other members. How much each matters varies with a family’s own values and beliefs.',
    src: D + 'slide 8' },
];

export const SAQS = [
  { ...R, pts: 3, q: 'Name the three elements of facilitating family-centred care and give one nursing action for each.',
    steps: [
      'Relationship — establish a genuine, positive, mutually respectful partnership: find common ground, invest time in building trust, and (with the person’s permission) share relevant information.',
      'Participation and involvement — enable the person and family to take part in care in a way that respects their autonomy: involve them in care, keep up communication, find out what is important to them.',
      'Tailoring care — design care around the person’s and family’s needs, strengths, limitations and context: help them make informed decisions and plan care that is realistic (early intervention, health promotion, discharge planning).',
    ],
    src: D + 'slides 27–29 and 31–35' },
  { ...R, pts: 3, q: 'State three situations in which the Family-centred Care lecture says a patient’s health information may be collected from or shared with family.',
    steps: [
      'Information about a family member’s health may be collected when preparing a family or genetic history.',
      'A patient’s presence, condition and progress may be disclosed to caregivers or close relatives, in line with recognised professional practice — unless the patient has vetoed that disclosure.',
      'Information may be disclosed where necessary to deal with a serious threat to anyone’s health or safety — for example abuse, or a threat of self-harm.',
    ],
    src: D + 'slide 18 (Health Information Privacy Code)' },
];
