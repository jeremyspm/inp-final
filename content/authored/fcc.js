/* Family-centred Care — THE TOOL's questions. The lecture has no Canvas quiz, so these were
   written from the lecture deck "Family Centred Care.pptx" (Canvas, harvested 19 Sep 2026).
   Every entry names the slide it was written from. */
const R = { sys: 'care', quiz: 'a-fcc', quizName: 'Family-centred Care — the tool’s questions' };
const D = 'the Family Centred Care deck, ';

export const MCQS = [
  { ...R, q: "In nursing practice, who is a person’s family?",
    options: ["Whoever the person says is family","The next of kin in the notes","People living at the same address","Blood relatives and spouses only"],
    correct: 0,
    why: "“Family in nursing”: a set of relationships that the person identifies as family, or a network of individuals who influence each other’s lives, whether or not there are actual biological or legal ties. The person defines their family — the nurse does not.",
    src: "the Family Centred Care deck, slide 15" },
  { ...R, q: "A genogram and an ecomap are used to:",
    options: ["Record immunisation history","Screen for family violence","Calculate a deprivation score","Show family structure and relationships"],
    correct: 3,
    why: "They are visual representations of a person and their relationships to the family structure, and of relationships within and beyond the family’s boundaries — a useful way of engaging people and families in an active discussion about their relationships.",
    src: "the Family Centred Care deck, slide 30" },
  { ...R, q: "Which three forms of abuse make up “family violence”?",
    options: ["Partner, child and elder abuse","Physical, verbal and financial abuse","Child abuse, bullying and neglect","Partner, workplace and elder abuse"],
    correct: 0,
    why: "Partner abuse, child abuse and elder abuse are collectively termed family violence. Nurses have a key role in identifying and supporting people experiencing it, and screening is done in most health care facilities.",
    src: "the Family Centred Care deck, slide 19" },
];

export const SAQS = [
  { ...R, pts: 3, q: 'Name the three elements of facilitating family-centred care and give one nursing action for each.',
    steps: [
      'Relationship — establish a genuine, positive, mutually respectful partnership: find common ground, invest time in building trust, and (with the person’s permission) share relevant information.',
      'Participation and involvement — enable the person and family to take part in care in a way that respects their autonomy: involve them in care, keep up communication, find out what is important to them.',
      'Tailoring care — design care around the person’s and family’s needs, strengths, limitations and context: help them make informed decisions and plan care that is realistic (early intervention, health promotion, discharge planning).',
    ],
    src: D + 'slides 27–29 and 31–35' },
];
