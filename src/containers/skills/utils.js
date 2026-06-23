/**
 * skills/utils.js
 *
 * Previously held hardcoded skillsData array. Now re-exports from
 * the centralised JSON file so Decap CMS edits are reflected here
 * automatically.
 *
 * The JSON stores the array under the key "skillCategories".
 * We map it into the shape the Skills component expects:
 *   { label, data: [{ skillName, percentage }] }
 */
import skillsContent from "../../content/skills.json";

// Transform JSON shape → component shape
export const skillsData = skillsContent.skillCategories.map((category) => ({
  label: category.label,
  // JSON uses "skills" key; component expects "data" key
  data: category.skills,
}));
