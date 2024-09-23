/*
// 1. [1,2,3,4,5] -> 두배 해주기
const a = (x) => {
  return x * 2;
};
const a1 = [1, 2, 3, 4, 5].map(a);
console.log(a1);

// 2. [1,2,3,4,5] -> 홀수면 두 배 짝수면 세 배
const b = (x) => {
  return x % 2 == 1 ? x * 2 : x * 3;
};
const b1 = [1, 2, 3, 4, 5].map(b);
console.log(b1);

// 3. [1,2,3,4,5] -> 3 이하면 '🍒' 아니면 '🍉'
const c = (x) => {
  return x <= 3 ? "🍒" : "🍉";
};
const c1 = [1, 2, 3, 4, 5].map(c);

console.log(c1);
*/

/*
const fruitArray = [
  "watermelon",
  "cherry",
  "banana",
  "avocado",
  "apple",
  "orange",
  "pineapple",
  "strawberry",
];
// 1. 문자의 길이가 7글자 이상이면 대문자화 아니면 소문자화
// 2. 알파벳 a가 들어가면 대문자화 아니면 소문자화
// 3. 단어 안에 있는 알파벳 a를 '🍒'로 바꾸기

const changeWord = (x) => {
  return x.length >= 7 ? x.toUpperCase() : x.toLowerCase();
};

const hasA = (x) => {
  return x.includes("a") ? x.toUpperCase() : x.toLowerCase();
};

const makeCherry = (x) => {
  return x.includes("a") ? x.replaceall("a", "🍒") : x;
};

const quiz1 = fruitArray.map(changeWord);
const quiz2 = fruitArray.map(hasA);
const quiz3 = fruitArray.map(makeCherry);
*/

const starbucks = [
  {
    name: "americano",
    price: 4500,
    shots: 2,
    ingredients: ["water", "beans"],
  },
  {
    name: "latte",
    price: 6000,
    shots: 2,
    ingredients: ["milk", "beans"],
  },
  {
    name: "java chip",
    price: 6500,
    shots: 2,
    ingredients: ["milk", "wheat", "beans"],
  },
  {
    name: "honey black tea",
    price: 5700,
    shots: 1,
    ingredients: ["grapefruit", "water", "source"],
  },
];

// 1번문제 가을시즌 이벤트 -> 모든 가격을 10%할인한 가격으로 바꿔주셈
const fallEvent = starbucks.map((x) => {
  x.price = x.price * 0.9;
  return x;
});
console.log(fallEvent);

// 2번 문제 두유시즌 이벤트 -> 성분에 두유 강제 추가
const soymilkEvent = starbucks.map((x) => {
  x.ingredients.push("soymilk");
  return x;
});
console.log(soymilkEvent);

// 3번 문제 스타벅스 아아 기념 -> 이름이 아메리카노면 2000원 할인된 가격으로 바꿔주고, 샷 하나 더 늘려주셈
const americanoEvent = starbucks.map((x) => {
  if (x.name == "americano") {
    x.price = x.price * 0.8;
    x.shot = x.shot + 1;
    return x;
  } else {
    return x;
  }
});

console.log(americanoEvent);

const inplationEvent = starbucks.map((x) => {
  x.price = x.price * 1.2; // 숫자
  return x;
});
console.log(inplationEvent);
