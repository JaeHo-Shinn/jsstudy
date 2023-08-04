// 1. 변수  variable

//replit.com 코드 연습 사이트

let color = "black";
//변수 변수이름 = 값

//변수이름은 겹치지 않아야 한다
//"=" 은 오른쪽 값을 왼쪽으로 집어 넣는다

console.log(color);
//콘솔창에 color를 로그해라

//console.log(color2);
//color2라는 변수가 없다 =error  => 오타 주의 => 복붙해라

// let color = "haha";
// error color를 이미 black 으로 설정해줬다
color = "pink";
// let으로 선언한 변수 값을 변경해줄 때는 let 없이 변수이름만

const color1 = "blue";

console.log(color1);

// color1 = "green";
// error   const => constant
// const로 설정한 변수값은 변경할 수 없다.

var color2 = "red";
var color2 = "pink";
color2 = "green";

console.log(color2);

//var는 가장 처음 만들어진 변수선언 함수 => 예측 불가  => 사용 안하는 추세
// ex) const 선언 => 앞으로 값이 변하지 않겠구나  let 선언 => 새로운 값을 받겠구나

// 2. 자료형과 연산자

//string과 number
//변수에 들어갈 수 있는 값 =>  "string" ""안에 들어가 있는 값은 다 문자 취급
let string = "123" + 1;
let number = 123 + 1;
console.log(string); // 1231
console.log(number); // 124

number = number - 122; //주의 number -123; 만 했을경우 => 그래서 그 값을 어디다 넣어줄껀데??
// number = number - 123; 을 해야 number에다 넣어준다
number = number / 2;
console.log(number);

number = number % 2; //%는 나머지를 나타내는 연산자
console.log(number);

number = number > 1;
console.log(number);

number = number >= 3 || number <= 1; // ||는 or
console.log(number);

number = number < 2 && number >= -1; // &&는 and
console.log(number);

//boolean  ture와 false값 => string이 아니다 => "" 필요없다
let passward = true;
let id = false;
console.log(passward); //
console.log(id); //

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

/* 
호이스팅 : let과 var의 차이

const => 명확하다. 변경할수 없는 값 예를들어 id 나 passward 설정해 놓으면
누군가 밑에서 바꿨을때 error 뜬다

근데 let과 var의 차이는?
var가 먼저 나옴 
es6에서 업그레이드 => let 나옴 
var의 문제는? 

var의 문제점
(1) 동일 변수 재선언   => let은 재선언 불가, 재할당만 가능
(2) 호이스팅  => let은 호이스팅은 되지만 TDZ에 넣어서 할당 전에는 접근 차단
(3) 지역변수를 전역변수로 올려버림  => let은 지역변수에 묶어놓는다

자바스크립트는 선언한 변수 먼저 기억을 해놓고 실행될 때 가져와서 대입한다.
=> 호이스팅 : 안에있는 변수들을 최상단으로 올리는 것을 호티스팅이라고 한다.

console.log(b)  => error => b라는 변수는 선언되지 않았다    
    VS 
console.log(a); => undifine  변수 선언되기 전에 호출? 다른 언어에서는 error 값이다. 
                  js에서는 undifine a라는 변수가 있는 것을 알고있고, 아직 값이 할당되기 전이기 때문에 undifine이 뜬다
var a = 1;  
console.log(a);  => 1  => 위에서 1이 할당되어서 1값을 갖는다 

또, js는 전역변수와 지역변수의 구분이 명확하지 않다
ex) for(var i + 1; i<5; i++){
    console.log(i)      => 1,2,3,4
    }   
    console.log(i)     => 5   => ???????????

 js 는 함수(function)의 지역변수를 제외하고 if문 for문 등 의 지역변수를 다 전역변수로 올려버린다

 ===> let을 사용하는 경우 해결
  => 호이스팅의 경우 TDZ(Temporal Death Zone)을 만들어서 넣어준다. a가 선언된건 알고 있지만 할당 전에는 접근 불가 => error
  => 지역변수가 전역변수로 올라가는것 방지
  => 동일 변수 선언 금지
*/
