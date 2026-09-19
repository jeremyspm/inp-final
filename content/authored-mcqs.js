/* Multi-choice questions THE TOOL wrote. INP's 153 captured questions are the lecturers';
   these cover lectures that have NO Canvas quiz, written from each lecture's own deck.
   Every entry names its source slide, and the page labels each one as the tool's, never
   the lecturers'. The questions live one file per lecture in content/authored/.
   Shape: { sys, quiz, quizName, q, options, correct, why, src }. */
import { LECTURES } from './authored/index.js';
export const AUTHORED_MCQS = LECTURES.flatMap(m => m.MCQS || []);
