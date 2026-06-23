/**
 * resume/utils.js
 *
 * Previously held hardcoded arrays. Now re-exports from the
 * centralised JSON file so Decap CMS edits are reflected here
 * automatically without touching React component code.
 */
import resumeContent from "../../content/resume.json";

// Named export keeps the existing import { data } in index.jsx working.
export const data = resumeContent;
