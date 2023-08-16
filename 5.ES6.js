// 1. 객체 초기화

let myName = "shin";
let age = 18;

// let preson = { name: name, age: age };

let person = { myName, age }; // 위의 같은 이름의 선언된 변수값을 자동으로 객체로 가져옴
console.log(person);
console.log(person.name);
console.log(person.age);

// 2. 객체 분해

let bts = {
  name: "방탄소년단",
  num: 7,
  qwer: 123,
  adsf: 543,
  zcv: 575,
};

// let name= bts.name
// let num=bts.num

let { name, num, ...restinfo } = bts;
//부분만 가져오기 가능, 객체내의 이름과 같아야하지만 나머지는 주고싶은 이름을 주면 된다
console.log(name, num);
console.log(name);
console.log(restinfo); // 가져간 값을 뺀 새로운 객체

// 3. "string" + 변수  => `스트링 ${변수} `

console.log(`내이름은 ${myName}입니다`);

// 4. 배열

let array = [1, 2, 3];
let arrayNum = [1, 2, 3, 4, 5, 6];

// let a=array[0]
// let b=array[1]
// let c=array[2]

let [a, b, c] = array;
let [an, bn, ...rest] = arrayNum;
// 부분만 가져오고 싶을때, an,bn,rest는 주고싶은 변수명을 주면 된다

console.log(a, b, c);
console.log(an, bn);
console.log(rest); // 부분을 뺀 나머지 array만

let qw = [1, 2];
let we = [3, 4];
let er = [4, 5];

let re = qw.concat(we, er); //qw 에 we, er을 붙여라 => 중복된 숫자도 중복으로 붙음
let rw = [...qw, ...we, ...er]; //위와 같음 조금 더 직관적
console.log(re);
console.log(rw);

// 5. 함수 선언 방식  ##

function foo(a) {
  console.log(a);
  return a;
}
foo("hello");

let fooo = (a) => {
  console.log(a);
  return a;
}; // let 함수명 선언 = (매개변수)  => {함수내용}
fooo("hi");

function foooo(a) {
  return a;
}
console.log(foooo("haha"));

let fooooo = (a) => a; //한줄이면 대괄호도 생략가능, return도 생략가능
console.log(fooooo("hehe"));

//100% function 문법을 대체할 수 없다.
// ex) this
// this는

let agggee = 17;
let personnn = {
  id: "hifi",
  agggee: 20,
  getInfo: function () {
    console.log(agggee);
    console.log(this.agggee);
    console.log(this);
  },
  gettInfo: () => {
    console.log(agggee);
    console.log(this.agggee);
    console.log(this);
  },
};

personnn.getInfo();
//전역변수이름과 object내부의 key 이름이 같을때
// agggee의 20이 아난 전역변수인 17을 가져온다
// this는 함수를 부르는 객체를 설정해준다

personnn.gettInfo(); // => 함수는 this를 알아먹지못한다
// 화살표 =>함수에서 this personnn이 표함된 곳 = 윈도우다

//
//6. for 문
//

let nameES = ["A", "B", "C", "D", "E", "F", "G", "H", "I"];

// for(let i=0; i<nameES.length; i++){
//   console.log(nameES[i])
// }   //기존 배열 안의 값들을 불러오는 for 문
//  -> nameES.forEach(함수)

// 매개변수로 함수를 받는다. 매개변수제외 함수명만 입력 (= 이벤트리스너)

function printName(item) {
  console.log(item);
}

nameES.forEach(printName);

// 한번만 사용되는 함수의 경우 그냥 익명함수로 사용 가능
// 에로우펑션 가능

nameES.forEach((a, b) => console.log(`item = ${a}, index = ${b}`)); // a는 item을, b에는 인덱스를 가져온다

let data = nameES.map((a, b) => {
  return `item = ${a}, index = ${b}`;
});

console.log(data);

// map은 배열값을 반환(return)한다.
//반환값이 있으니 반환할 데이터를 return으로 설정하고
//값을 받을 변수를 설정해줘야한다.
// ex) 객체로 구성된 array에서 부분만 뽑아서 사용하고 싶을 때 사용

let customerES = [
  { name: "qr3", age: 17, gender: "male", adult: false },
  { name: "wer", age: 20, gender: "female", adult: true },
  { name: "qds", age: 18, gender: "male", adult: true },
];

let customerDataName = customerES.map((a) => {
  return a.name;
});

console.log(customerDataName);

//filter는 map과 사용구조 같다. 일치하는 값을 배열으로 반환해준다
//
let customerDataAdult = customerES.filter((a) => {
  return a.adult == true;
});
console.log(customerDataAdult);

let customerDataGender = customerES.filter((a) => {
  return a.gender == "female";
});
console.log(customerDataGender);

let customerDataNameStartQ = customerES.filter((a) => {
  return a.name.startsWith("q");
});

console.log(customerDataNameStartQ);

// filter는 전체를 찾아서 배열값으로 반환한다.
//find 는 가장 처음 값 하나만을 string으로 반환한다. => 고유id 등 정확한 값 찾기에 유용
// findindex는 find값에서 찾은 가장 처음값의 index값 반환

let customerDataNameStartQFind = customerES.find((a) => {
  return a.name.startsWith("q");
});
console.log(customerDataNameStartQFind);

let customerDataNameStartQFindIndex = customerES.findIndex((a) => {
  return a.name.startsWith("q");
});
console.log(customerDataNameStartQFindIndex);

// some은 filter와 비슷하다, true false값을 반환한다
// every는 모두가 충족시 true
let customerDataNameStartQBoolean = customerES.some((a) => {
  return a.name.startsWith("q");
});
console.log(customerDataNameStartQBoolean);

let customerDataNameStartQEveryBoolean = customerES.every((a) => {
  return a.name.startsWith("q");
});
console.log(customerDataNameStartQEveryBoolean);
