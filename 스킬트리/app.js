function solution(skill, skill_trees) {
  let answer = 0;
  let regex = new RegExp(`[^${skill}]`, "g");

  return skill_trees
    .map((el) => el.replace(regex, ""))
    .filter((el) => skill.substring(0, el.length) === el).length;
}
