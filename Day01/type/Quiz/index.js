/* const first = prompt("첫 번째 숫자 입력");
const second = prompt("두 번째 숫자 입력");
const sum = Number(first) + Number(second);
console.log(`두 수의 합은 ${sum})입니다.`); */

// ask: prompt, answer: console
// 1. 한 변의 길이를 물어보고, 정사각형의 넓이와 둘레 알려주기
// 2. 밑변과 높이를 물어보고, 정삼각형의 넓이 구하기
// 3. 반지름을 물어보고, 원의 넓이와 둘레 구하기
// 4. 출생년도를 물어보고 나이를 나타내기 ex) 몇년생임? 1995 -> 30
// 5. 일본여행 갈거임 그래서 100만원 환전하면 현재 환율로 엔화 나타내기
// ex) 얼마 환전? 1000000 -> 107451

const square = prompt("한 변의 길이 얼마?");
console.log(
  `정사각형의 넓이는 ${Number(square * square)} 둘레는 ${square * 4}`
);

const triangle1 = prompt("밑변 얼마?");
const triangle2 = prompt("높이 얼마?");
console.log(`정삼각형의 넓이는 ${Number(triangle1 * triangle2 * 0.5)}입니다.`);

const circle = prompt("반지름 얼마?");
console.log(
  `원의 넓이는 ${Number(circle * circle * 3.14)}이고, 둘레는 ${Number(
    2 * circle * 3.14
  )}입니다.`
);

const birth = prompt("몇년생?");
console.log(`나이는 ${Number(2024 - birth + 1)}살 입니다.`);

const exchange = prompt("얼마 환전?");
console.log(`환전한 엔화는 ${Number(exchange * 0.1075)}입니다.`);
