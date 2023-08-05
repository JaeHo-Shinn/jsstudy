// 2.배열 array

let fruit = "banana";
let fruit2 = "apple";
let fruit3 = "grape";
let fruit4 = "mango";

let fruits = ["banana", "apple", "grape", "mango"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);

//Array에 저장된 값의 호출 번호 [0],[1], ... 를 index라고 부른다 index는 0부터 시작한다.

//바꾸기

fruits[0] = "cherry";
console.log(fruits[0]);

fruits[2] = "tomato";
console.log(fruits[2]);

// (1)배열 기능
// pop(); 마지막 아이템을 뺌
// push(); 마지막에 아이템을 더해줌
// includes(); 해당 아이템을 포함하고 있는지 알려줌
// indexOf(); 해당 아이템의 index번호를 알려줌
fruits.pop();
console.log(fruits);

fruits.push("pineapple");
console.log(fruits);

console.log(fruits.includes("apple"));
console.log(fruits.includes("pear"));

console.log(fruits.indexOf("apple"));

// (2)배열 편집
// slice(); 2 => (2) 번째 index부터 자른다.   (1,3)=> 1전, 3이후로 자른다 = 1부터 3까지 남기고 자른다. (-2) 뒤에서 2개 만남기고
// splice(); (2,1) 2부터 시작해서 1개의 아이템을 제거한다. => 2포함

console.log(fruits.slice(-2)); // 기존의 배열을자르지 않는다.
fruits.slice(-2);
console.log(fruits);

fruits.splice(2, 1); // => slcie는 기존의 배열을 자르지 않기 때문에
console.log(fruits);

// slice(); 는 기존의 배열을 건드리지 않고, 새로운 배열을 만든다.
// splice(); 는 기존의 배열을 잘라낸다.

let sliceFruits = fruits.slice(1);
console.log(sliceFruits);

// 3. 객체

// let 객체명 = {      vs array  => let 배열명 = [값, 값, 값];
//    키 : 값,
//    키 : 값,
//    }

let patient = {
  name: "jimin",
  age: 17,
  disease: "cold",
  //key : value
  //키값 : 값
};

// 호출 방법
console.log(patient);
console.log(patient.name);
console.log(patient["age"]);

// 변경 방법

patient.name = "jk";
patient["age"] = 27;

console.log(patient);
console.log(patient.name);
console.log(patient["age"]);

// 배열에 객체를 넣을 수 있다
let patientList = [
  { name: "jimin", age: 21 },
  { name: "jk", age: 20 },
  { name: "jhope", age: 23 },
];
//호출방법
console.log(patientList);
console.log(patientList[0]); // 첫번째 환자의 object
console.log(patientList[0].name); //첫번째 환자의 object안의 name 값
//변경
patientList[0].name = "jonadan";
console.log(patientList[0].name);
