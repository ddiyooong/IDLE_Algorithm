// 배열 메서드 예제
// ※ console로 리스트 요소를 주고 바로 출력하려할 때
// map([])의 형식으로 작성해야 함

// 1. map
// 아래 배열의 모든 숫자를 제곱한 배열을 반환하세요
function map(arr) {
  return arr.map((x) => x * x);
}
const arr = [2, 3, 4];
console.log(map(arr));
// 최적화
const map2 = (arr) => arr.map((x) => x * x);
console.log(map2([2, 3, 4]));

// 2. reduce
function reduce(arr) {
  return arr.reduce((x, y) => x * y);
}
const arr2 = [2, 3, 4];
console.log(reduce(arr2));
// 최적화
const reduce2 = (arr2) => arr2.reduce((x, y) => x * y);
console.log(reduce([2, 3, 4]));

// 3. filter
function filter(arr) {
  return arr.filter((n) => n % 2 == 0);
}
const arr3 = [1, 2, 3, 4, 5, 6];
console.log(filter(arr3));
// 최적화
const filter2 = (arr) => arr3.filter((n) => n % 2 == 0);
console.log(filter2([1, 2, 3, 4, 5, 6]));

// 4. find
function find(arr) {
  return arr.find((n) => n > 10);
}
const arr4 = [4, 9, 15, 2];
console.log(find(arr4));
// 최적화
const find2 = (arr) => arr.find((n) => n > 10);
console.log(find2([4, 9, 15, 2]));

// 5. some/every
function every(arr) {
  return arr.every((n) => n >= 0);
}
function some(arr) {
  return arr.some((n) => n > 10);
}
const arr5 = [3, 7, 12, 5];
console.log(every(arr5));
console.log(some(arr5));
// 최적화
const every2 = (arr) => arr.every((n) => n >= 0);
console.log(every2([(3, 7, 12, 5)]));
const some2 = (arr) => arr.some((n) => n > 10);
console.log(some2([(3, 7, 12, 5)]));

// 6. icluedes
function includes(arr) {
  return arr.includes("banana");
}
const arr6 = ["apple", "banana", "cherry"];
console.log(includes(arr6));
// 최적화
const includes2 = (arr) => arr.includes("cherry");
console.log(includes2(["apple", "banana", "cherry"]));

// 7. findIndex
function findIndex(arr) {
  return arr.findIndex((n) => n === "bird");
}
const arr7 = ["cat", "dog", "bird"];
console.log(findIndex(arr7));
// 최적화
const findIndex2 = (arr) => arr.findIndex((n) => n === "bird");
console.log(findIndex2(["cat", "dog", "bird"]));

// 8. sort
function sort(arr) {
  return arr.sort((a, b) => a - b);
}
const arr8 = [7, 2, 9, 1];
console.log(sort(arr8));
// 최적화
const sort2 = (arr) => arr.sort((a, b) => a - b);
console.log(sort2([7, 2, 9, 1]));

// 9. reverse
function reverse(arr) {
  return arr.reverse();
}
const arr9 = [1, 2, 3, 4];
console.log(reverse(arr9));
// 최적화
const reverse2 = (arr) => arr.reverse();
console.log(reverse2([1, 2, 3, 4]));

// 10. flat / flatMap
function flat(arr) {
  return arr.flat();
}
function flatMap(arr) {
  return arr.flatMap((s) => s.split(""));
}
const arr10 = [1, [2, [3, 4]]];
const arr11 = ["hi", "yo"];
console.log(flat(arr10));
console.log(flatMap(arr11));

// 최적화
const flat2 = (arr) => arr.flat();
console.log(flat2([1, [2, [3, 4]]]));
const flatMap2 = (arr) => arr.flatMap((s) => s.split(""));
console.log(flatMap2(["hi", "yo"]));
