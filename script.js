const dog = {
    name: "ki",
    age:10,
    bread: "Ta",
    gender: "male",
    color: "black",
    legs:4,
    favoritefood: "rice", 
    eat: function () {
        console.log(`${dog.name} is eating ${dog.favoritefood}, yum yum...`);
    },
    run: function (){
        console.log(`${dog.name} is running on ${dog.legs} legs...`);
    },
    bark: function (){
        console.log(`Woof Gau Gau Ang Ang ...`);
    }
}
// bai 1
console.log(dog);
// bai 2
console.log(`ten cho la ${dog.name}`);
// bai 3
console.log(`cho thich an ${dog.favoritefood}`);
// bai 4
dog.color = "Brown"
console.log(`${dog.color}`);
// bai 5
dog.age = dog.age + 2;
console.log(`${dog.age}`);
// bai 6
console.log(`${dog.eat()}`);
// bai7
console.log(`${dog.run()}`);
// bai 8
for (const key in dog) {
    console.log(`thuoc tinh la:${key}`);
}
// bai 9
for (const key in dog) {
    console.log(`thuoc tinh value la:${dog[key]}`);
}
// bai 10 
dog.isCrazy = false;
// bai 11
dog.crazy = function () {
    if (dog.isCrazy == false) {
        console.log(`${dog.name} is not crazy`)
    }
    else {
        for (i = 0; i < 5; i++){
            console.log(`${dog.run()} ...${dog.bark()}`);
        }
    }
}
console.log(`${dog.crazy()}`);
// bai 12

// bai 13
console.log(`${dog.crazy()}`);
// bai 14
delete dog.isCrazy;
// bai 15
console.log(`${dog.crazy()}`);




