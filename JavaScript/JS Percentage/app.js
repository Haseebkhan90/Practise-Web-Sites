
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

