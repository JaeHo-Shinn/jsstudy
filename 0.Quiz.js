//Quiz 1
// a 와 b 값을 바꾸시오

let quiz_1_a = 1;
let quiz_1_b = 2;
console.log(quiz_1_a, quiz_1_b);

//quiz_1_a = quiz_1_b;
//quiz_1_b = quiz_1_a;   =>  윗줄에서 a값에 b 값이 대입되면서 a값이 사라진다

let quiz_1_c = quiz_1_a;
quiz_1_a = quiz_1_b;
quiz_1_b = quiz_1_c; // c에다 a 값을 넣어놓고 c값을 b값으로 가져온다

console.log(quiz_1_a, quiz_1_b);

//Quiz 2 다음 연산자들의 결과값을 예측
console.log(1 / 0); // 무한대 => infinity
console.log(1 + 2 * 3); // 사칙연산 순서 지킨다
console.log(7.5 % 2); // 소수점 나머지 값 1.5
console.log(5 == "5"); // 값만 비교 => true
console.log(5 === "5"); // 형식까지 비교 => false
console.log(5 != 5.0); // (같지않다)값만 비교 => false  => 같다
console.log(5 !== 5.0); // (같지않다)형식까지 비교 => false  => 같다
console.log(!true); // true가 아니다 => false
console.log(!false); // flase가 아니다 => true

//배열 Quiz
// 다음 배열에 대하여 아래의 질문에 답하시오

let animals = [
  "Aardvark",
  "Albatross",
  "Alligator",
  "Alpaca",
  "Ant",
  "Ape",
  "Armadillo",
  "Donkey",
  "Baboon",
  "Badger",
  "Barracuda",
  "Bat",
  "Bear",
  "Beaver",
  "Bee",
  "Bison",
  "Cat",
  "Caterpillar",
  "Cattle",
  "Chamois",
  "Cheetah",
  "Chicken",
  "Chimpanzee",
  "Chinchilla",
  "Chough",
  "Clam",
  "Cobra",
  "Cockroach",
  "Cod",
  "Cormorant",
  "Dugong",
  "Dunlin",
  "Eagle",
  "Echidna",
  "Eel",
  "Eland",
  "Elephant",
  "Elk",
  "Emu",
  "Falcon",
  "Ferret",
  "Finch",
  "Fish",
  "Flamingo",
  "Fly",
  "Fox",
  "Frog",
  "Gaur",
  "Gazelle",
  "Gerbil",
  "Giraffe",
  "Grasshopper",
  "Heron",
  "Herring",
  "Hippopotamus",
  "Hornet",
  "Horse",
  "Kangaroo",
  "Kingfisher",
  "Koala",
  "Kookabura",
  "Moose",
  "Narwhal",
  "Newt",
  "Nightingale",
  "Octopus",
  "Okapi",
  "Opossum",
  "Quail",
  "Quelea",
  "Quetzal",
  "Rabbit",
  "Raccoon",
  "Rail",
  "Ram",
  "Rat",
  "Raven",
  "Red deer",
  "Sandpiper",
  "Sardine",
  "Sparrow",
  "Spider",
  "Spoonbill",
  "Squid",
  "Squirrel",
  "Starling",
  "Stingray",
  "Tiger",
  "Toad",
  "Whale",
  "Wildcat",
  "Wolf",
  "Worm",
  "Wren",
  "Yak",
  "Zebra",
];

//어레이에 마지막 아이템 “Zebra” 제거하기
animals.pop("Zebra");
console.log(animals);

//주어진 어레이에 “Dog” 추가하기
animals.push("Dog");
animals.sort();
console.log(animals);

//주어진 어레이에 “Mosquito”,“Mouse”,“Mule” 추가하기
animals.push("Mosquito", "Mouse", "Mule");
animals.sort();
console.log(animals);

//해당 어레이에는 "Human"이 있는가?
console.log(animals.includes("Human")); // = False

//해당 어레이에는 “Cat” 이 있는가?
console.log(animals.includes("Cat")); // = True

//"Red deer"을 "Deer"로 바꾸시오
console.log(animals.includes("Red deer")); // = True
console.log(animals.indexOf("Red deer")); // = 81
animals[81] = "Deer";
console.log(animals[81]);

//"Spider"부터 3개의 아이템을 기존 어레이에서 제거하시오
console.log(animals.includes("Spider"));
console.log(animals.indexOf("Spider")); // 85
animals.splice(85, 3);
console.log(animals);

//"Tiger"이후의 값을 제거하시오
console.log(animals.includes("Tiger"));
console.log(animals.indexOf("Tiger")); // 88
console.log(animals.slice(0, 88));
console.log(animals.splice(88));
let a = animals.slice(0, 88);
animals = a;
console.log(animals);

//"B"로 시작되는 아이템인 "Baboon"부터 "Bison"까지 가져와 새로운 어레이에 저장하시오
console.log(animals.indexOf("Baboon")); // 7
console.log(animals.indexOf("Bison")); // 14
console.log(animals.slice(7, 15));
let newAnimals = animals.slice(7, 15);
console.log(newAnimals);

/* 답 

// 어레이에 마지막 아이템 "Zebra" 제거하기
animals.pop()
console.log(animals)

// 주어진 어레이에 "Dog" 추가하기
animals.push("Dog")
console.log(animals)

//주어진 어레이에 "Mosquito","Mouse","Mule" 추가하기
animals.push("Mosquito","Mouse","Mule")
console.log(animals)

//해당 어레이에는 "Human"이 있는가?
console.log(animals.includes("Human"))

//해당 어레이에는 "Cat" 이 있는가?
console.log(animals.includes("Cat"))

//"Red deer"을  "Deer"로 바꾸시오 
animals[animals.indexOf("Red deer")] = "Deer"
console.log(animals)

//"Spider"부터 3개의 아이템을 기존 어레이에서 제거하시오 
animals.splice(animals.indexOf("Spider"),3)
console.log(animals)

// "Tiger"이후의 값을 제거하시오 
animals.splice(animals.indexOf("Tiger"))
console.log(animals)

//"B"로 시작되는 아이템인 "Baboon"부터 "Bison"까지 가져와 새로운 어레이에 저장하시오
let newList = animals.slice(animals.indexOf("Baboon"),animals.indexOf("Bison")+1)
console.log(newList)

*/

// if문 Quiz

//Quiz 1
//유저가 입력하는 숫자가 0인지 음성인지 양성인지 판단하는 프로그램을 만드시오
//html <input class="userInput" type="text"></input>;
//let userInputNumber = document.qurreyselector(".userInput")
let userInputNumber = -0.216;
if (userInputNumber === 0) {
  console.log("0입니다");
} else if (userInputNumber > 0) {
  console.log("양성");
} else if (userInputNumber < 0) {
  console.log("음성");
} else {
  console.log("숫자를 입력해 주세요");
}

//Quiz 2
//나는 대학교 교수다. 레포트 점수에따라 등급을 매기는 프로그램을 만드시오

let student = [
  { name: "john", score: 89.9, grade: "" },
  { name: "Ahn", score: 80, grade: "" },
  { name: "Ahn", score: -30, grade: "" },
  { name: "Ahn", score: 200, grade: "" },
  { name: "Ahna", score: "80점", grade: "" },
];

if (student[0].score > 100) {
  console.log("100을 넘을 수 없습니다.");
} else if (student[0].score >= 90 && student[0].score <= 100) {
  student[0].grade = "A";
  console.log(student[0].grade);
} else if (student[0].score >= 80) {
  student[0].grade = "B";
  console.log(student[0].grade);
} else if (student[0].score >= 70) {
  student[0].grade = "C";
  console.log(student[0].grade);
} else if (student[0].score >= 60) {
  student[0].grade = "D";
  console.log(student[0].grade);
} else if (student[0].score >= 0) {
  student[0].grade = "F";
  console.log(student[0].grade);
} else if (student[0].score < 0) {
  console.log("0보다 작을 수 없습니다");
} else {
  console.log("정확한 숫자를 입력하세요");
}

//Quiz 3
//한 지원자가 우리회사에 지원을했다. 지원자가 사용가능한 스킬은 배열에 제공이 된다
//Javascript와 React 둘다 할줄 안다면 “합격!”
//Javascript와 React 둘중 하나만 할줄 안다면 “예비”,
//두 스킬이 없다면 “탈락” 을 보여주는 프로그램을 짜시오
let skills = ["HTML", "CSS", "Javascript", "React"];

console.log(skills.includes("Javascript") && skills.includes("React"));

if (skills.includes("Javascript", "React")) {
  console.log("합격");
} else if (skills.includes("Javascript") || skills.includes("React")) {
  console.log("예비");
} else {
  console.log("탈락");
}

//
//반복문 Quiz

//Quiz1 1부터 100까지 더하는 for문

for (let i = 1; i <= 100; i++) {
  console.log(((i + 1) * i) / 2);
}

//Quiz2 1부터 100까지 홀수만
for (let i = 1; i < 100; i += 2) {
  console.log(i);
}

//Quiz3 1부터 50까지 369 게임 결과

for (let i = 1; i <= 50; i++) {
  let stringValue = i.toString();
  let result = "";
  for (let j = 0; j < stringValue.length; j++) {
    if (
      stringValue[j] == "3" ||
      stringValue[j] == "6" ||
      stringValue[j] == "9"
    ) {
      result += "짝";
    }
  }
  console.log(result.length > 0 ? result : i);
}

// Quiz 4 주어진 숫자가 소수이면 true 아니면 false를 출력하는 프로그램을 짜시오.

let inputnum = 10;
console.log("입력 숫자" + inputnum);

let prime = "소수입니다";
for (let i = 2; i < inputnum; i++) {
  console.log(inputnum % i);
  if (inputnum % 1 === 0) {
    prime = "소수가 아닙니다";
  }
}
console.log(prime);

//n번째 숫자까지의 소수
let inputnumm = 10;
console.log(inputnumm + "까지의 소수");
for (let i = 2; i <= inputnumm; i++) {
  let primee = "소수";
  for (let n = 2; n < i; n++) {
    if (i % n === 0) {
      primee = "소수X";
    }
  }
  console.log(i + "=" + primee);
}

//
//
// function Quiz

// Quiz 1 년,월,일 인자 세개를 받습니다.
// 년도만 받은 경우 xx년
// 년, 월을 받은경우 xx년xx월
// 세개를 받은경우 년/월/일

function meetA(a, b, c) {
  if (c) {
    return `${a}/${b}/${c}`;
  }
  if (b) {
    return `${a}년 ${b}월`;
  } else {
    return `${a}년`;
  }
} // a,b 값이 존재해야 c 값이 존재할 수 있으니 생략가능하다
//  매개변수값이 존재하면 true, 존재하지 않으면 undifinded 반환 => undifinded는 false값이다

meetA(2022);
console.log(meetA(2022));
meetA(2022, 2);
console.log(meetA(2022, 2));
meetA(2022, 2, 3);
console.log(meetA(2022, 2, 3));

//
// Quiz 2 숫자로 이루어진 arr의 가장 작은 값
// arr가 비워져있으면 0
//
let arrr = [100, 200, 30, 9, 3546];
console.log(arrr + " 의 최소값은?");
function findSmall(a) {
  if (a.length === 0) {
    return 0;
  } else {
    return Math.min.apply(null, a);
  }
}
findSmall(arrr);
console.log(findSmall(arrr));

// 답안

function findSmallest(a) {
  let result = a[0]; // 받은 array의 0번째 value 부터 시작
  if (a.length === 0) {
    return 0;
  }
  for (let i = 0; i < a.length; i++) {
    if (result >= a[i]) {
      result = a[i];
    }
  }
  return result;
}

findSmallest(arrr);
console.log(findSmallest(arrr));

//
//금액을 받아 몇개의 지폐와 동전이 필요한지 최소 개수 계산
//

let moneyy = 12300;
function countt(a) {
  let q = a + " = ";
  let w = "50000 X " + Math.floor(a / 50000);
  let e = ", 10000 X " + Math.floor((a % 50000) / 10000);
  let u = ", 5000 X " + Math.floor((a % 10000) / 5000);
  let r = ", 1000 X " + Math.floor((a % 10000) / 1000);
  let t = ", 500 X " + Math.floor((a % 1000) / 500);
  let y = ", 100 X " + Math.floor((a % 500) / 100);
  return q + w + e + u + r + t + y;
}
countt(moneyy);
console.log(countt(moneyy));

//
//답안
//
function changeCalculate(money) {
  let unit = [50000, 10000, 5000, 1000, 500, 100];
  for (let i = 0; i < unit.length; i++) {
    let num = Math.floor(money / unit[i]);
    console.log(`${unit[i]} x ${num}`);
    money = money - num * unit[i];
  }
}
changeCalculate(12300);
