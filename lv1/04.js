// 평균구하기
// 정수를 담고 있는 배열 arr의 평균값을 return하는 함수, solution을 완성해보세요.

// 1차 코드 - 성공
function solution(arr) {
  var answer = 0;
  for (i = 0; i < arr.length; i++) {
    answer += arr[i];
  }
  return answer / arr.length;
}

// + 버전
// 배열 안의 값들을 하나로 합쳐주는 함수 reduce를 사용함
function solution(arr) {
  return arr.reduce((a, b) => a + b) / arr.length;
}
var tesetArr = [1, 2, 3, 4, 5];
console.log(solution(tesetArr));

// ++ 버전
const avg = (arr) => arr.reduce((a, b) => a + b) / arr.length;
console.log(avg([1, 2, 3, 4, 5]));
