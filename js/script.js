//1--------------------------

const arr = [...Array(15)].map(() =>
  Math.floor(Math.random() * 20));
console.log(arr);

//2-----------------------------

const resultOne = arr.filter(el => el % 3 == 0);
console.log(resultOne);

//3---------------------------------

const resultTwo = arr.find(el => el > 7);
if (resultTwo == undefined) {
  console.log("Все элементы меньше 7")
} else {
  console.log(resultTwo);
}

//4---------------------------------

const resultThree = arr.map((el)  => el * 2);
console.log(resultThree);

//5---------------------------------

const resultFour = arr.reduce((previousValue, currentValue) =>
  !(currentValue % 2) ? previousValue + currentValue : previousValue
);
console.log(resultFour);

//6---------------------------------

arr.shift();
console.log(arr);
arr.pop();
console.log(arr);

// задание со звездочкой

const arrOne = ['dog', 'cat', 'bird', 'rabbit', 'horse'];
const arrTwo = ['apple', 'car', 'cat', 'ball', 'horse'];
const arrThree = [];
for(i = 0; i < arrTwo.length; i++) {
  if (arrOne.includes(arrTwo[i]) == true) {
    arrThree.push(arrTwo[i]);
  } else {
    continue;
  }
}
console.log(arrThree);