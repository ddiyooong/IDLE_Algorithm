// 짝수와 홀수
// 정수 num이 짝수일 경우 "Even"을 반환하고 홀수인 경우 "Odd"를 반환하는 함수, solution을 완성해주세요.

// 기본 코드
function solution(num) {
  var answer = "";
  return answer;
}

// 1차 코드 - 실패
// 음수 홀수나 특수 케이스에서 제대로 작동하지 않을 수 있음
function solution(num) {
  var answer = "Even";
  if (num % 2 == 1) answer = "Odd";
  return answer;
}

// 2차 코드 - 성공
function solution(num) {
  var answer = "Odd";
  if (num % 2 == 0) answer = "Even";
  return answer;
}

// + 버전
const isOdd1 = (n) => (n % 2 == 0 ? "Even" : "Odd");
console.log(isOdd1(10));
