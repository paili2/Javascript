//  const 변수(variable) = "데이터"
const lunch = "소세지";
alert(lunch);

const coffee = "아메리카노";
console.log(coffee);

//mbti라는 별명 만들고 님들 mbti 넣어주고
// 콘솔로 출력
/*
const mbti = "ISFP";
console.log(mbti);*/

/*
console.log("내 mbti ${mbti}");
console.log(`내 mbti ${mbti}`);
console.log("내 mbti" + mbti);
*/

/* ~~~ 5개의 변수명을 만들고 데이터 커스터마이즈 하셈 */
/* 안녕하세요 저의 이름 ~~~ 입니다.
저의 mbti는 ~~~ 이고요,
제가 좋아하는 OTT 플랫폼은 ~~~ 입니다.
요즘 즐겨보는 유튜버는 ~~~ 입니다.
오늘 저녁은 ~~~ 먹을 예정입니다. */

const name = "정서령";
const mbti = "ISFP";
const ott = "tiving";
const youtuber = "핏블리";
const dinner = "볶음밥";

console.log(`안녕하세요 저의 이름은 ${name} 입니다.`);
console.log(`저의 mbti는 ${mbti}이고요`);
console.log(`제가 좋아하는 OTT 플랫폼은 ${ott}입니다.`);
console.log(`요즘 즐겨보는 유튜버는 ${youtuber}입니다.`);
console.log(`오늘 저녁은 ${dinner}먹을 예정입니다.`);

console.log(`안녕하세요 저의 이름은 ${name} 입니다.
저의 mbti는 ${mbti} 이고요,
제가 좋아하는 OTT 플랫폼은 ${ott} 입니다.
요즘 즐겨보는 유튜버는 ${youtuber} 입니다.
오늘 저녁은 ${dinner} 먹을 예정입니다.`);
