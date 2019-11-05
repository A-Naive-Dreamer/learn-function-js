function logName(name) {
  console.log(`Hello, ${name}`);
}

const nameA = "Alpha",
  nameB = "Betty";

logName(nameA);
logName(nameB);

const checkAge = function(age) {
  if (age >= 18) {
    console.log("You are old enough");
  } else if (age < 18 && age >= 0) {
    console.log("You are still young");
  } else {
    console.log("You are not born yet");
  }
};

checkAge(10);
checkAge(25);
checkAge(-2);

const addMarks = (text, mark, times) => {
  let newText = text;

  for (let i = 0; i < times; ++i) {
    newText += mark;
  }

  console.log(newText);
};

addMarks("Hello", "!", 1);
addMarks("Hello", "!", 3);
addMarks("How are you", "?", 1);
addMarks("How are you", "?", 2);

const showNameWithAge = (name = "Unknown", age = 0) => {
  const nameWithAge = `${name} is ${age} years(s) old`;

  return nameWithAge;
};

const alpha = showNameWithAge("Alpha", 11);
const betty = showNameWithAge("Betty", 42);
const gamma = showNameWithAge("Gamma", 30);

console.log(alpha);
console.log(betty);
console.log(gamma);

function add() {
  let x = prompt("Masukkan bilangan pertama untuk pertambahan"),
    y = prompt("Masukkan bilangan kedua untuk pertambahan"),
    res = parseInt(x) + parseInt(y),
    show = `Hasil ${x} - ${y} = ${res}`;

  alert(show);
}

function subtract() {
  let x = prompt("Masukkan bilangan pertama untuk pengurangan"),
    y = prompt("Masukkan bilangan kedua untuk pengurangan"),
    res = parseInt(x) - parseInt(y),
    show = `Hasil ${x} - ${y} = ${res}`;

  alert(show);
}

function multiply() {
  let x = prompt("Masukkan bilangan pertama untuk perkalian"),
    y = prompt("Masukkan bilangan kedua untuk perkalian"),
    res = parseInt(x) * parseInt(y),
    show = `Hasil ${x} x ${y} = ${res}`;

  alert(show);
}

function divide() {
  let x = prompt("Masukkan bilangan pertama untuk pembagian"),
    y = prompt("Masukkan bilangan kedua untuk pembagian"),
    res = parseInt(x) / parseInt(y),
    show = `Hasil ${x} : ${y} = ${res}`;

  alert(show);
}

function calculator() {
  choice = prompt(
    "Masukkan pilihan operasi yang Anda inginkan (1: pertambahan, 2: pengurangan, 3: perkalian, 4: pembagian"
  );

  switch (choice) {
    case "1":
      add();
      break;
    case "2":
      subtract();
      break;
    case "3":
      multiply();
      break;
    case "4":
      divide();
      break;
  }

  let retry = prompt("Apakah anda ingin mengulang (Yes/No)?");

  if (retry === "Yes" || retry === "yes") {
    calculator();
  }
}

calculator();
