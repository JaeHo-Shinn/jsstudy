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
