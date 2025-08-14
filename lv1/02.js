// 자연수 뒤집어 배열로 만들기
// 자연수 n을 뒤집어 각 자리 숫자를 원소로 가지는 배열 형태로 리턴해주세요. 예를들어 n이 12345이면 [5,4,3,2,1]을 리턴합니다.

// 기본 제공 코드
function solution(n) {
  var answer = [];
  return answer;
}

// 1차 코드 - 실패
// 이전 코드처럼 reverse라는 함수가 있을 듯 하여 해봤지만 매개변수를 넣으면 안된다는걸 깨닳음
return [...(n + "")].reverse(n);

// 2차 코드 - 실패
// .reverse하고 Number하면 뒤집어진 후에 숫자로 변환되는 줄 알고있다가 실패
// Number은 메서드가 아닌 독립 함수이기에 .Number()처럼 객체 뒤에 붙여서 호출이 불가능
// 배열의 각 요소를 변환하려면 map(Number)로 요소마다 적용해야 함
return [...(n + "")].reverse.Number();

// 3차 코드 - 성공
function solution(n) {
  return [...(n + "")].reverse().map(Number);
}
console.log(solution(12345));

// + 버전
function solution2(n) {
  return (n + "").split("");
}
