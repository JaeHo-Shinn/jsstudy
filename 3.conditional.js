// 1. if 문

// if (조건) {
//  충족시할일;
// } else {
//    불충족시할일
// }
// 조건이 true면  충족시할일 실행, false면 불충족시할일 실행

let customer = [
  { name: "John", age: 21, licence: "have" },
  { name: "Jenny", age: 18, licence: "none" },
  { name: "Anna", age: 22, licence: "none" },
];

console.log(customer[1].age);

if (customer[0].age > 20) {
  console.log("운전이 가능합니다");
} else if (customer[1].age >= 18) {
  console.log("오토바이 운전이 가능합니다");
} else {
  console.log("운전이 불가능 합니다");
}

//           vs   ***위에서부터 아래로 판정하며 충족시 판정 종료
// 범위를 작은것 부터 큰것 순으로 혹은 범위 상세설정 ex) (age>=18 && age<=20)
if (customer[1].age >= 18) {
  console.log("오토바이 운전이 가능합니다");
} else if (customer[1].age > 20) {
  console.log("운전이 가능합니다");
} else {
  console.log("운전이 불가능 합니다");
}

//조건문 안에 조건문
// ********** 일치하는지 물어볼 때 항상 == or ===  ///  절대 = 하나만 XXXXX
if (customer[2].age > 20) {
  if (customer[2].licence === "have") {
    console.log("운전 가능");
  } else {
    console.log("면허가 필요합니다");
  }
}

// if 문 외 조건문 표현 switch

let menu = 1;
// if (menu == 1) {
//   console.log("물건사기");
// } else if (menu == 2) {
//   console.log("잔고확인");
// } else if (menu == 3) {
//   console.log("히스토리확인");
// } else {
//   console.log("홈으로 돌아가기");
// }

// switch(조건대상){
//     case 조건: 명령
//     break;
//     default : 명령   default는 if 문에서 else라고 생각하면 된다
//     }
// 차이는 크게 없지만 switch는 사용에 제한될 수 있다 = 값이 하나로 딱 안떨어 지는 경우 사용 불가
// if(menu > 1 && menu < 4){console.log("물건사기")}
// => 1보다 크고 4보다 작은 수 = 2,3   소수도 넣고 싶으면 하나하나 다 넣어줘야 한다.
// switch(menu){
// case 2:
// case 3:
//   console.log("물건사기")
//  }

switch (menu) {
  case 1:
    console.log("물건사기");
    break; //switch문을 탈출한다
  case 2:
    console.log("잔고확인");
    break;
  case 3:
    console.log("히스토리확인");
    break;
  default:
    console.log("홈으로 돌아가기");
    break;
}

//삼항연산식
// let 변수명 = 비교공식 ? true일경우 값 : flase일경우 값
// console.log(변수명);  =>확인
//true or flase로 구성된 조건문의 경우, ture, false 리턴값이 하나인 경우 사용 가능
// 많이 쓰인다

let menuu = 8;

// if (menuu <= 3) {
//   console.log("범위안의 숫자입니다");
// } else {
//   console.log("범위 밖의 숫자 입니다");
// }

let answer = menuu <= 3 ? "범위안의 숫자입니다" : "범위 밖의 숫자입니다";
console.log(answer);
