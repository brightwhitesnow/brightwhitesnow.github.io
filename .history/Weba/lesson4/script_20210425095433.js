
let arr = ["Ben", "Big Chungus", "Duong", "Chicken"]

let Ben = {
    name: "Ben",
    age: 8,
    height: "1m25"
}

let Duong = {
    name: "Duong",
    age: 12,
    height: "1m58"
}

let BigChungus = {
    name: "Big Chungus",
    age: 83,
    height: "4ft"
}

let Chicken = {
    name: "Chicken",
    age: 1,
    height: "10in"
}


console.log(arr)
console.log('')
console.log(Ben)
console.log(Duong)
console.log(BigChungus)
console.log(Chicken)

document.getElementById("arrhtml").innerHTML = arr;
document.getElementById("benhtml").innerHTML = Ben.name, Ben.age, Ben.height;
document.getElementById("duonghtml").innerHTML = Duong;
document.getElementById("bigchungushtml").innerHTML = BigChungus;
document.getElementById("chickenhtml").innerHTML = Chicken;