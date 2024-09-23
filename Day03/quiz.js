// 1. 어떤 숫자를 넣으면 홀수인지 짝수인지 돌려주는 함수
function oddEven(x) {
  return x % 2 == 1 ? "홀수" : "짝수";
}

// 2. 어떤 숫자를 넣으면 5배수이면 5의 배수 아니면 5의배수가 아님을 함수
function lsFiveTime(x) {
  return x % 5 == 0 ? "5배수" : "5배수 아님";
}

// 3. 어떤 숫자를 넣으면 1 - 일반 팝콘, 2 - 카라멜 팝콘, 3 - 치즈 팝콘, 그 외 그런 거 없음 돌려주는 함수
function popcorn(x) {
  if (x == 1) {
    return "일반 팝콘";
  } else if (x == 2) {
    return "카라멜 팝콘";
  } else if (x == 3) {
    return "치즈팝콘";
  } else {
    return "그런 팝콘 없음 ㅅㄱ";
  }
}

// 팝콘문자만 원해요 + 출력까지 해줄게요
function popcorn(x) {
  if (x == 1) {
    console.log("일반 팝콘");
  } else if (x == 2) {
    console.log("카라멜 팝콘");
  } else if (x == 3) {
    console.log("치즈팝콘");
  } else {
    console.log("그런 팝콘 없음 ㅅㄱ");
  }
}

// 4. 어떤 문자열을 3개 넣으면 배열로 돌려주는 함수 ex> 사탕, 떡볶이, 멜론 -> [사탕, 떡볶이, 멜론]
function StringToArray(a, b, c) {
  return [a, b, c];
}

// 어떠한 과일이름을 넣으면 ~~~맛 아이스크림을 돌려주는 함수
function icecream(x) {
  return `${x}맛 아이스크림`;
}

function oddEven1(x) {
  return x % 2 == 1;
}
