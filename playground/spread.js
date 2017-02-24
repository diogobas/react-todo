function add (a, b) {
  return a + b;
}

console.log(add(3, 1));

var toAdd = [9, 5];
console.log(add(toAdd[0], toAdd[1]));
//Spread Operator
console.log(add(...toAdd));

var groupA = ['Marcos', 'Debora'];
var groupB = ['Mauricio'];
//var final = [3, groupA];
//var final = [3, ...groupA];
var final = [...groupB, 3, ...groupA];

console.log(final);

//--------------
var person = ['Diogo', 29];
var personTwo = ['Debora', 30];
//Hi Diogo, you are 29
//Hi Debora, you are 30

function greet (name, age) {
  console.log('Hi ' + name + ', you are ' + age);
}

greet(...person);
greet(...personTwo);

//--------------
var names = ['Marcos', 'Sandra'];
var final = ['Diogo']
//Hi Marcos
//Hi Sandra
//Hi Diogo

final = [...final, ...names];

final.forEach(function (name) {
  console.log('Hi ' + name);
});

//foreach
