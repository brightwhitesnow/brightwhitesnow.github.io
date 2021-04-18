console.log('Bài 1')

for (let b = 0; b <= 100; b = b + 7) {
    console.log(b)
}

console.log('Bài 2')

let i = 1;
let j = 1;
if (i === 1) {
    console.log('Monday')
    i++
}
if (j === 1) {
    console.log('Brush My Teeth')
    console.log('Eat')
    console.log('Go to School')
    j++
}
if (i === 2) {
    console.log('Tuesday')
    i++
}
if (j === 2) {
    console.log('Brush My Teeth')
    console.log('Eat')
    console.log('Go to School')
    j++
}
if (i === 3) {
    console.log('Wednesday')
    i++
}
if (j === 3) {
    console.log('Brush My Teeth')
    console.log('Eat')
    console.log('Go to School')
    j++
}
if (i === 4) {
    console.log('Thursday')
    i++
}
if (j === 4) {
    console.log('Brush My Teeth')
    console.log('Eat')
    console.log('Go to School')
    j++
}
if (i === 5) {
    console.log('Friday')
    i++
}
if (j === 5) {
    console.log('Brush My Teeth')
    console.log('Eat')
    console.log('Go to School')
    j++
}

console.log('Bài 3')

for (let z = 50; z <= 70; z++) {
    console.log('Hello Duong ' + z)
}

console.log('Bai 2 Again')

let bai2 = (thu, name) => {
    console.log(thu)
    console.log('Wake Up!')
    console.log('Brush My teeth')
    console.log(name + ', Eat')
}
bai2('Monday', 'Ben')
bai2('Tuesday', 'Ben')
bai2('Wednesday', 'Ben')
bai2('Thursday', 'Ben')
bai2('Friday', 'Ben')













let z = 7
let y = 5


if (y == 0) {
    console.log('Error')
}

if (z == 0) {
    console.log('Error')
}


console.log('Addition')

let a = (y, z) => {
    console.log(y + z)
}

console.log('Multiplication')

let m = (y, z) => {
    console.log(y * z)
}

console.log('Subtraction')

let s = (y, z) => {
    console.log(y - z)
}

console.log('Division')

let d = (y, z) => {
    console.log(y / z)
}





//var arr1 = ["Banana", "Apple", "Orange", "Tangerine", "Plum", "Grapefruit", "Mango"];
//arr1.slice(0)
//var myChildren = arr1.concat("Peach"); 
//document.getElementById("demo").innerHTML = arr1;

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango", ];
var citrus = fruits.slice(0, 1, 2, 3, 4);
citrus.push("Kiwi");
citrus[2] = "Georgie";
document.getElementById("demo").innerHTML = citrus ;