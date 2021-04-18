var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango", ];
var citrus = fruits;
citrus.push("Kiwi");
citrus[2] = "Duong";
citrus.pop(5);
document.getElementById("demo").innerHTML = citrus ;
console.log(fruits.length);