// Bai 1
const arr = ["hello World"];
console.log(arr.map(function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}));



// Bai 2

const arr1 = ["hello world"];
console.log(arr1.map(function title(str){
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}));
// Bai 3 
function protectEmail(email) {
    let name = email.slice(0,2);
    let a = "...";
    let b = email.slice(email.length - 10);
    return name+a+b;
}
console.log(protectEmail("long@gmail.com"));
//Bai 4

function reverse(str) {
    return str.split("").reverse().join("");
}
console.log(reverse("locon"));

//Bai 5
function countVowel(str) {
      let sts = (str.split("o").length - 1);
      return sts;
}
console.log(countVowel("hello"));
// bai 6

function reverse(str) {
    return str.split(" ").reverse().join(" ");
}
console.log(reverse("lo con hay di"));

// bai 7
function randomHex() {
    let hex = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    return hex;
}
console.log(randomHex());
// bai 8 
function parameterize(str) {

    return str.split(" ").join("-");
}
console.log(parameterize(" cac ban oi cac ban oi"));
// bai 9
