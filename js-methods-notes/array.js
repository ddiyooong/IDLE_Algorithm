// 배열

// map 메서드 : 각 요소를 변환해 새 배열에 반환
callback(Element, IDBIndex, arr);
["1", "2"].map(Number); // [1,2]

// reduce 메서드 : 모든 요소를 누적해 하나의 값으로
callback(acc, curr, idx, arr), init;
[1, 2, 3].reduce((a, b) => a + b, 0); // 6

// filter 메서드 : 조건을 만족하는 요소만 남김
callback(elem);
[1, 2, 3, 4].filter((n) => n % 2 == 0); // [2,4]

// find 메서드 : 조건을 만족하는 '첫' 요소 반환
callback(elem);
[5, 7, 9].find((n) => n > 6); // 7

// some / every 메서드 : 일부/모두 조건 만족 여부
callback(elem);
[1, 2, 3].some((n) => n > 2); // true;

// includes 메서드 : 포함 여부
value;
[1, 2, 3].includes(2);

// findIndex 메서드 : 조건 만족 요소의 인덱스
callback(elem);
["a", "b"].findIndex((x) => x === "b"); // 1

// sort 메서드 : 정렬
compareFn(a, b);
[3, 1, 2].sort((a, b) => a - b);

// reverse 메서드 : 배열 뒤집기
[1, 2, 3].reverse(); // [3,2,1]

// flat / flatMat 메서드 : 중첩 펼치기/변환+펼치기
depth = 1;
callback;
[1, [2, 3]].flat(); // [1,2,3]
["hi", "yo"].flatMap((s) => s.split("")); // ["h","i","y","o"]
