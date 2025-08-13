/*
https://school.programmers.co.kr/learn/courses/30/lessons/86491
최소직사각형
*/
function solution(sizes) {
  let long = 0;
  let short = 0;
  for (let [w, h] of sizes) {
    let cl = w > h ? w : h;
    let cs = w > h ? h : w;
    long = long > cl ? long : cl;
    short = short > cs ? short : cs;
  }
  return long * short;
}

console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);
