// 자릿수 더하기
// 자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들기

// 기본 제공 코드
function solution(n) {
  var answer = 0;

  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  console.log("Hello Javascript");

  return answer;
}

// 1차 코드 - 실패
// n이 숫자인데 n[i]로 접근하려 해서 실패
function solution(n) {
  var answer = 0;

  for (let i = 0; i < 3; i++) {
    answer += n[i];
  }
  return answer;
}
console.log(solution(123));
console.log(solution(987));

// 2차 코드 - 실패
// for문에서 반복 범위를 i < 3로 고정해버림
function solution(n) {
  var answer = 0;
  let str = String(n);
  for (let i = 0; i < 3; i++) {
    answer += Number(str[i]);
  }
  return answer;
}
console.log(solution(123));
console.log(solution(987));

// 3차 코드 - 성공
function solution(n) {
  var answer = 0;
  let str = String(n);
  for (let i = 0; i < str.length; i++) {
    answer += Number(str[i]);
  }
  return answer;
}

console.log(solution(123));
console.log(solution(987));

// + 버전
// (n + "") : 숫자를 강제로 문자열로 바꿈
// .split("") : 문자열을 글자 하나씩 나눠서 배열로 만듦
// .reduce((acc, curr) => acc + parseInt(curr), 0)
// acc : 누적된 값, curr : 현재 배열의 요소 , 0 : 시작 값
function solution2(n) {
  return (n + "").split("").reduce((acc, curr) => acc + parseInt(curr), 0);
}
console.log(solution2(123));
console.log(solution2(987));

// ++ 버전
// [...(n+"")] : 스프레드 문법 : 문자열 123을 ["1","2","3"]으로 스플릿 해주는 기능
// .reduce((a,b) => a + b * 1, 0)
// a : 누적값 acc와 같음, b : 현재 처리중인 문자 하나, b * 1 : 문자열을 숫자로 바꾸는 짧은 방식
function solution3(n) {
  return [...(n + "")].reduce((a, b) => a + b * 1, 0);
}
console.log(solution3(123));
console.log(solution3(987));
