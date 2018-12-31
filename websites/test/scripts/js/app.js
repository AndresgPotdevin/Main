/*let day = prompt('What day is it today?')

if (day === 'monday'){
  console.log('Tomorrow is Tuesday');
} else if (day === 'tuesday') {
  console.log('Tomorrow is Wednesday');
} else if (day === 'wednesday') {
  console.log('Tomorrow is Thursday');
} else if (day === 'thursday') {
  console.log('Tomorrow is Friday');
} else if (day === 'friday') {
  console.log('Tomorrow is Saturday');
} else if (day === 'saturday') {
  console.log('Tomorrow is Sunday');
} else if (day === 'sunday') {
  console.log('Tomorrow is Monday');
} else  {
  console.log('Thats not a weekday Stupid');
}; */

/*let number1 = prompt('Enter a number');
let number2 = prompt('Enter another number');

if (number1 > number2) {
  console.log(`${number1} is greater than ${number2}`)
} else if (number1 < number2) {
  console.log(`${number1} is less than ${number2}`);
} else if (number1 === number2) {
  console.log(`${number1} is equal to ${number2}`);
} else {
  console.log('That is not a number stupid');
}*/

/*let month = prompt("Enter a month (1-12)")
switch (month) {
  case "1":
    alert("January has 31 days");
    break;
  case "2":
    console.log("February has 28 days");
    break;
  case "3":
    console.log("March has 31 days");
    break;
  case "4":
    console.log("April has 30 days");
    break;
  case "5":
    console.log("May has 31 days");
    break;
  case "6":
    console.log("June has 30 days");
    break;
  default:
    console.log("That's not a valid month silly.");
}*/

/*let hours = prompt("enter an hour (1-24)")
let minutes = prompt("enter amount of minutes (1-60)")
let seconds = prompt("enter amount of seconds (1-60)")

seconds++;

if (seconds >= 60) {
  minutes++;
  seconds = 00;
  if (minutes >= 60){
    hours++;
    minutes = 0
    if (hours === 25){
      hours = 0;
      console.log(`${hours}h${minutes}m${seconds}s`);
    } else {
      console.log(`${hours}h${minutes}m${seconds}s`);
    }
  } else {
    console.log(`${hours}h${minutes}m${seconds}s`);
  }
} else{
  console.log(`${hours}h${minutes}m${seconds}s`);
};*/

// let i = 1
// while (i <= 10){
//   console.log(i);
//   i++;
// }
// let n = prompt("how many rounds would you like to go?")
// for (let i=1; i <= n; i++){
//   setTimeout(function () {
//   }, 3000);
//   console.log(i);
// }

// function square1(x) {
//   return x ** 2;
// };
//
// const square2 = x => x**2;
//
// function min(a,b){
//   if (a > b){
//     return b;
//   } else {
//     return a;
//   }
// };
//
// function calculate(a,b,c){
//   switch (b) {
//     case "+":
//         return a + c;
//       break;
//     case "-":
//       return a - c;
//       break;
//     case "*":
//       return a * c;
//       break;
//     case "/":
//       if (c === 0) {
//         return Infinity;
//       } else {
//         return a / c;
//       }
//       break;
//     default:
//       console.log("Not a valid operator!");
//   }
// };
//
// const circumference = r => 2 * Math.PI * r
// const area = r => Math.PI * r ** 2

// let r = prompt("Enter the radius of a circle")
// console.log(circumference(r));
// console.log(area(r));

// const aurora = {
//   name: "Aurora",
//   health: 150,
//   strength: 25,
//   xp: 0,
//   // Return the character description
//   describe() {
//     return `${this.name} has ${this.health} health points, ${this
//       .strength} as strength and ${this.xp} Xp points`;
//   }
// };
//
// const dog = {
//   name: "Goodboi",
//   species: "Husky",
//   size: "25 inches",
//   bark() {
//     return "WOOOOOOOF, WOOOOF, WOOOF!"
//   }
// };
//
// const r = Number(prompt("Enter the circle radius:"));
//
// // TODO: create the circle object here
// const circle = {
//   area(){return Math.PI * r ** 2},
//   circumference(){return 2 * Math.PI * r}
// }
// console.log(`Its circumference is ${circle.circumference()}`);
// console.log(`Its area is ${circle.area()}`);

// const account = {
//   name: "Andres",
//   balance: 0,
//   credit(c){
//     return account.balance += c;
//   },
//   describe(){
//     return `Owner: ${account.name}, Balance: ${account.balance}`
//   }
// };

// const threeMusketeers = ["Athos","Porthos","Aramis"]
//
// threeMusketeers.forEach(musketeer => {
//   console.log(musketeer);
// });
//
// threeMusketeers.push("D'Artagnan")
//
// for(const musketeer of threeMusketeers){
//   console.log(musketeer);
// };
//
// threeMusketeers.splice(2,1)
//
// for(let i=0;i<threeMusketeers.length;i++){
//   console.log(threeMusketeers[i]);
// };

// const values = [3, 11, 7, 2, 9, 10];
//
// values.forEach(num => {
//   let total = 0;
//
// })

// Show a DOM object's child node
// "node" is the DOM object
// "index" is the index of the child node
