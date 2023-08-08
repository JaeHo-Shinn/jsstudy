// 4. function 함수

//함수 작성
// function 함수명(매개변수){
// 명령
// }

//함수 작동
//함수명(변수에들어갈 value);

//ex)
function makeBurger(a, b) {
  console.log("빵");
  console.log("양상추");
  console.log(a + "패티");
  console.log(b + "소스");
  console.log("빵");
}

makeBurger("beef", "불고기");
makeBurger("chicken", "머스타드");

function frenchFries(a) {
  console.log(a + "사이즈");
  console.log("감자튀김담기");
  console.log("케찹");
}

function coke(a) {
  console.log(a + "사이즈");
  console.log("얼음담기");
  console.log("콜라담기");
}

//
// function 합치기

function makeSet(a, b, c, d) {
  makeBurger(a, b);
  frenchFries(c);
  coke(d);
}

makeSet("beef", "불고기", "M", "L");

//
//
//function + conditional

function burger(a) {
  let b;
  if (a === "beef") {
    b = "불고기";
  }
  if (a === "chicken") {
    b = "머스타드";
  }
  console.log("---------------");
  console.log("빵");
  console.log("양상추");
  console.log(a + "패티");
  console.log(b + "소스");
  console.log("빵");
  console.log("---------------");

  return a + "버거완료";

  console.log("return이 만족되면 작동이 종료되고 다음 값은 작동되지 않는다");
}

burger("beef"); // => 작동하고 이 작동 값은 return 값인 "a 버거 완료" 값을 지닌다.
console.log(burger("beef")); // => 작동하고 return값인 "a 버거 완료" 값을 console.log 된다.
let beefBurger = burger("beef");
console.log(beefBurger); // 위와 값이 같다

burger("chicken");
console.log(burger("chicken"));
