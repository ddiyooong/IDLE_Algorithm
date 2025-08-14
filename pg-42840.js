/*
 https://school.programmers.co.kr/learn/courses/30/lessons/42840
 모의고사
*/
function solution(answers) {
  let p = [0, 0, 0];
  let p2 = [2, 1, 2, 3, 2, 4, 2, 5];
  let p3 = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  for (let i in answers) {
    p[0] += answers[i] === (i % 5) + 1 ? 1 : 0;
    p[1] += answers[i] === p2[i % 8] ? 1 : 0;
    p[2] += answers[i] === p3[i % 10] ? 1 : 0;
  }

  let max = 0;
  let answer = [];
  for (let i = 0; i < p.length; i++) {
    if (p[i] > max) {
      max = p[i];
      answer = [i + 1];
    } else if (p[i] == max) {
      answer.push(i + 1);
    }
  }

  return answer;
}
