// // DOM[HTML+CSS]

// // element type
// const div = document.createElement("div");
// div.innerText = "샤브샤브";
// div.style.color = "red";
// document.body.appendChild(div);

// // 버튼 태그 3개 만드셈 [아메리카노] [에이드] [라떼]
// ["아메리카노", "에이드", "라떼"].foreach((v) => {
//   const button = document.createElement("button");
//   button.innerText = "v";
//   button.style.backgroundColor = "skyblue";
//   button.style.Color = "white";
//   document.body.appendChild(button);
// });

// // [아메리카노, 노랑색, 검은색] [에이드, 핑크색, 하얀색] [라떼, 하늘색, 주황색]

// [
//   { name: "아메리카노", bg: "yellow", color: "black" },
//   { name: "에이드", bg: "pink", color: "white" },
//   { name: "라뗴", bg: "yellowskyblue", color: "orange" },
// ].foreach((v) => {
//   const button = document.createElement("button");
//   button.innerText = v.name;
//   button.style.backgroundColor = v.bg;
//   (button.style.color = v), color;
//   document.body.appendChild(button);
// });

// // className
// // container.className ="container"

const container = document.createElement("div");

// classList
container.classList.add("container"); // <div class="container"> </div>

const box = document.createElement("div");
box.classList.add("box");
box.style.backgroundColor = "red";
container.appendChild(box);

const box = document.createElement("div");
box.classList.add("box");
box.style.backgroundColor = "yellow";
container.appendChild(box);

container.appendChild(container);
