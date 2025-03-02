// Alert
// // alert("thankyou for input");
// // alert("thankyou for input");

// // Variabels 
// var text ="Hello";
// document.write(text);

// // Declartation 
// var a;

// a = "Pakistan";

// document.write(a);

// a = "Karachi";

// document.write(a);

// var smit1 = "SMIT"

// document.write(smit1);

// var user_name = "hey"

// var $;

// $ = "paragraph"

// // Strigns

// document.write($)

// var num1 = 10;
// var num2 = num1 + num1;
// var num3 = num2 -80 +100;
// // alert(num3);

// // Develpoer Tool Bar (Inspect)
// console.log(100-80);

// var num4 = 1;
// num4 += 4;
// console.log(num4)

// Prompt

// var user_Name = prompt("Enter Your Name.")
// console.log(user_Name); 
// var a = ('ali');

// // If Statement 
// if(a== ali){
//    console.log("welocome");

// }
// if("5" == 5){
//     console.log("yes")
// }
// else{
//     console.log("no")

// }
// // if else
// // else if
// // else

// var obtMarks = + prompt("enter Your marks")
// var per = (obtMarks / 500) * 100;
// console.log(obtMarks)
// console.log(per)

// if (obtMarks >= 500) {
//     alert("invalid")
// }

// else if (per >= 90) {
//     console.log('A1')
// }

// else if (per >= 80) {
//     console.log('A')
// }

// else if (per >= 70) {
//     console.log('B')
// }

// else if (per >= 60) {
//     console.log('C')
// }

// else{
//     console.log('F')
// }

// // Right Way Of Code Righting

// if(per <=100 && per >=90 ){console.log('A1')}
// else if(per <=100 && per >=90 ){console.log('A1')}



// Testing Sets OF Condidtion
// OR Condition
//  // if (age > 17 || gender === 'male'){}
// And Condition
//  // if (age > 17 && gender === 'male'){}

var english = + prompt("enter Your english marks")
if (english > 500) {
    alert("invalid")
}
var urdu = + prompt("enter Your Urdu marks")
if (urdu > 500) {
    alert("invalid")
}
var maths = + prompt("enter Your Maths marks")
if (maths > 500) {
    alert("invalid")
}
var chemistry = + prompt("enter Your Chemistry marks")
if (chemistry > 500) {
    alert("invalid")
}
var physics = + prompt("enter Your Physics marks")
if (physics > 500) {
    alert("invalid")
}

var total = english + urdu + maths + chemistry + physics ;
console.log(total)

var per = (total / 500) * 100;

console.log(per)
if (total >= 500) {
    alert("Invalid Values")
}
else if(per <=100 && per >=90){
    console.log("A1 (Congratulation You Got 75% Off On Monthly Fees)" )
}
else if(per <=90 && per >=80){
    console.log('A(Congratulation You Got 50% Off On Monthly Fees)')
}
else if(per <=80 && per >=70){
    console.log('B (Congratulation You Got 40% Off On Monthly Fees)')
}
else if(per <=70 && per >=60){
    console.log('C (Congratulation You Got 30% Off On Monthly Fees)')
}
else if(per <=60 && per >=50){
    console.log('D (Congratulation You Got 20% Off On Monthly Fees)')
}
else if(per <=50 && per >=20){
    console.log('F (Sorry)')
}

