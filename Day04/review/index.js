//  1. [10,20,30,40,50]을 30이하 이면 100더하기, 아니면 200더하기
const array = [10, 20, 30, 40, 50];

const array1 = (x) => {
  return x <= 30 ? x + 100 : x + 200;
};

console.log(array.map(array1));

// 2. ["americano","latte","vanilla","mocha","mint","tea"]
// -1. 5글자 이하면 대문자화, 아니면 '🥧'로 바꾸기

const coffee = ["americano", "latte", "vanilla", "mocha", "mint", "tea"];

const coffee_a = (x) => {
  return x.length <= 5 ? x.toUpperCase() : "🥧";
};

console.log(coffee.map(coffee_a));
