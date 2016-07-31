// function add (a, b) {
//   return a + b;
// };
//
// console.log(add(3,1));
//
// var toAdd = [9, 5];
// // Spread operator spreads out array items as individual arguments
// console.log(add(...toAdd));


var person  = ['Osameh', 29];
var personTwo = ['Sami', 27];

function greet(name, age) {
  console.log('Hi ' + name + '. You are' + age)
}

greet(...person);
greet(...personTwo);


var names = ['Mohd', 'Riad'];
var final = ['Osameh', ...names];

final.forEach(function(name){
  console.log('Hi ' + name)
})
