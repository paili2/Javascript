// // 유저에게 정수 n(maximum),k(배수)를 입력 받으면
// // n=10, k=3 -> [3,6,9]
// // n=15, k=5 -> [5,10,15]
// // 를 도출하는 함수 만들어주세요!
// const test = (n, k) => {
//   return Array(n)
//     .fill(0)
//     .map((x, i) => {
//       return i + 1;
//     })
//     .filter((x) => {
//       return x % k == 0;
//     });
// };

// // const todolist = ["점심먹기", "복습하기", "유튜브 보기", "카톡하기"];
// // const finished = [false, false, true, true];
// // // newToDOlist = ["점심먹기","복습하기"]

// // todolist.filter((x, i) => {
// //   return !finished[i];
// // });

// // // 함수화 [패턴화]
// // const newToDOlist = (todolist, finished) => {
// //   return todolist.filter((x, i) => {
// //     return !finish[i];
// //   });
// // };

// // x기준으로 나눴을 때, 나눠진 문자열의 각각 길이를 배열화 시킨 거
// // "xabcxdefxghi" [0,3,3,3]

// const test2 = (word) => {
//   return word.split("x").map((x) => {
//     return x.length;
//   });
// };

// // 한 줄로 만들면 (return없애고 중괄호 없애기)
// // const test2 = (word) => word.split("x").map((x) => x.length);

// const fruits = ["melon", "kiwi", "apple", "banana", "orange"];

// // 모음: a,e,i,o,u는 대문자로 바꾸기
// //  [mElon, kIwI, AppLE, bAnAnA, OrAngE]

// // "melon".split('').map((x) => {
// //   return x == "a" || x == "e" || x == "i" || x == "o" || x == "u"
// //     ? x.toUpperCase()
// //     : x;
// // });

// fruits.map((x) => {
//   return x.split("").map((x) => {
//     return x == "a" || x == "e" || x == "i" || x == "o" || x == "u"
//       ? x.toUpperCase()
//       : x;
//   });
// });

// const vowels = ["a", "e", "i", "o", "u"];

// fruits.map((x) =>
//   x.split("").map((y) => (vowels.some((v) => v == y) ? y.toUpperCase() : y))
// );

// 1~100까지 만들고, 369 만들기
// [1,2,"👏","👏",...,29,"👏","👏"]

// 알고리즘 문제 풀 때[String, Array, ]
// 해당 타입에 방법이 없으면 다른 타입으로 바꿔서 ㄱㄱ

const a = Array(100)
  .fill(0)
  .map((x, i) =>
    String(i + 1).map((x) =>
      x.includes("3") || x.includes("6") || x.includes("9") ? "👏" : x
    )
  );
