// arr 함수들
// arr - map: 바꿔줘
// filter: 걸러줘, 어떠한 조건에 부합하는 요소만 남겨줘

[10, 20, 30, 40, 50].filter((x) => {
  return 30 > x;
});

[10, 20, 30, 40, 50].filter((x) => {
  return x == 20 || x == 40;
});

// 1. [1,2,3,4,5,6,7,8,9,10] 중에 3의 배수만 살려줘
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((x) => {
  return x % 3 == 0;
});
// 2. [1,2,3,4,5,6,7,8,9,10] 4이상 8 이하만 살려줘
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].filter((x) => {
  return x >= 4 && x <= 8;
});

// 3. *const fruitArray = [
// ["watermelon","cherry","banana","avocado","apple","orange","pineapple","strawberry",]
// 3. 알파벳 o 들어있는 애들만 살려줘
const a = [
  "watermelon",
  "cherry",
  "banana",
  "avocado",
  "apple",
  "orange",
  "pineapple",
  "strawberry",
].filter((x) => {
  return x.lncludes("o");
});
console.log(a);
// 4. 문자길이가 6글자 이상만 살려줘
const b = [
  ("watermelon",
  "cherry",
  "banana",
  "avocado",
  "apple",
  "orange",
  "pineapple",
  "strawberry"),
].filter((X) => {
  X.length >= 6;
});
console.log(b);
// 5. 문자길이가 짝수인 애들만 살리고, 대문자화
const c = [
  "watermelon",
  "cherry",
  "banana",
  "avocado",
  "apple",
  "orange",
  "pineapple",
  "strawberry",
]
  .filter((x) => {
    return x.length % 2 == 0;
  })
  .map((x) => {
    return x.toUpperCase();
  });
console.log(c);

// every: 어떠한 조건에 모든 요소가 부합함? (return Boolean)
[10, 20, 30, 40, 50].every((X) => {
  return x > 10;
});
// some: 어떠한 조건에 하나 요소가 부합함? (return Boolean)
[10, 20, 30, 40, 50].some((x) => {
  return x > 60;
});

// 배열 만들기

// 열칸 만들기[]
// [0,1,2,3,4,5,6,7,8,9,...100]
// [0,1,2,3,4,...99]
Array(20)
  .fill(0)
  .map((x, i) => {
    return i;
  });

const add = (x, y) => x + y;
const sub = (x, y) => x - y;

const mul = (x, y) => {
  const a = "123";
  return x * y;
};
