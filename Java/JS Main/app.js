
// // Alert //

// // alert("thankyou for input");
// // alert("thankyou for input");

// // Variabels 
// var text = "Hello";
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
// var num3 = num2 - 80 + 100;
// // alert(num3);

// // Develpoer Tool Bar (Inspect)
// console.log(100 - 80);

// var num4 = 1;
// num4 += 4;
// console.log(num4)

// // Prompt //

// var user_Name = prompt("Enter Your Name.")
// console.log(user_Name);
// var a = ('ali');

// // If Statement 
// if (a == ali) {
//     console.log("welocome");

// }
// if ("5" == 5) {
//     console.log("yes")
// }
// else {
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

// else {
//     console.log('F')
// }

// // Right Way Of Code Righting

// if (per <= 100 && per >= 90) { console.log('A1') }
// else if (per <= 100 && per >= 90) { console.log('A1') }



// // Testing Sets OF Condidtion
// // OR Condition
// if (age > 17 || gender === 'male') { }
// // And Condition
// if (age > 17 && gender === 'male') { }

// var english = + prompt("enter Your english marks")
// if (english > 500) {
//     alert("invalid")
// }
// var urdu = + prompt("enter Your Urdu marks")
// if (urdu > 500) {
//     alert("invalid")
// }
// var maths = + prompt("enter Your Maths marks")
// if (maths > 500) {
//     alert("invalid")
// }
// var chemistry = + prompt("enter Your Chemistry marks")
// if (chemistry > 500) {
//     alert("invalid")
// }
// var physics = + prompt("enter Your Physics marks")
// if (physics > 500) {
//     alert("invalid")
// }

// var total = english + urdu + maths + chemistry + physics;
// console.log(total)

// var per = (total / 500) * 100;

// console.log(per)
// if (total >= 500) {
//     alert("Invalid Values")
// }
// else if (per <= 100 && per >= 90) {
//     console.log("A1 (Congratulation You Got 75% Off On Monthly Fees)")
// }
// else if (per <= 90 && per >= 80) {
//     console.log('A(Congratulation You Got 50% Off On Monthly Fees)')
// }
// else if (per <= 80 && per >= 70) {
//     console.log('B (Congratulation You Got 40% Off On Monthly Fees)')
// }
// else if (per <= 70 && per >= 60) {
//     console.log('C (Congratulation You Got 30% Off On Monthly Fees)')
// }
// else if (per <= 60 && per >= 50) {
//     console.log('D (Congratulation You Got 20% Off On Monthly Fees)')
// }
// else if (per <= 50 && per >= 20) {
//     console.log('F (Sorry)')
// }

// // Arrays //

// var cities = ['Karachi', 'Faislabad', 'Lahore', 'Multan', 'Queeta'];
// console.log(cities[3])

// var mixArrays = ['hello', 10, true];
// console.log(mixArrays[0])

// mixArrays[0] = "no hello";
// console.log(mixArrays[0])

// // Array "Push" end se new value ko insert

// mixArrays.push('new elm', true, false, 1000);
// console.log(mixArrays);

// // Array "Pop" end se remove krega

// mixArrays.pop();
// console.log(mixArrays);

// // Array "Unshift" start se new value ko insert

// mixArrays.unshift('smit');
// console.log(mixArrays);


// // Array "shift" start se remove krega

// mixArrays.shift('smit');
// console.log(mixArrays);

// var arr = [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11, 12, 13];
// console.log(arr[0][2]);

// // SPlice for delete In Middle .

// var chart = ['a', 'b', 'c', 'd', 'e']
// chart.splice(1, 2);
// console.log(chart);

// // Splice For Adding in Middle 

// chart.splice(1, 0, 'b', 'c');
// console.log(chart);

// // splice Adding with Deleting

// chart.splice(2, 2, 'f', 'g', '1');
// console.log(chart);

// // Slice for making a Copy

// var names = ['ahad', 'maaz', 'haseeb', 'asharib', 'hassan', 'aarish'];
// console.log(names);

// var Copyarr = names.slice(4, 6);
// console.log(Copyarr);

// var Copyarr2 = names.slice(-6, -1);
// console.log(Copyarr2);

// for (var i = 0; i <= names.length - 1; i++) {

//     console.log(names[i])

//     if (names[i] === 'haseeb') {
//         console.log(i);

//         break;
//     }
// }


// // Loops //

// for (var i = 0; i < 10; i++) {

//     // (i for itation)

//     console.log('hello')
// }

// var names = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30];

// for (var i = 0; i <= names.length - 1; i++) {

//     if (names[i] % 2 == 0) {
//         console.log(names[i] + ' is even');
//     }
//     else {
//         console.log(names[i] + ' is odd');
//     }
// }

// // Nested Loops //

// for (var i = 0; i < 7; i++) {
//     console.log('inner:', i);

//     for (var j = 0; j < 7; j++) {
//         console.log('outer:', j);

//     }
// }

// var nums = [3, 5, 7,]
// var nums2 = [10, 20, 30, 40, 50, 60, 70]

// let total = 0;

// for (var i = 0; i < nums.length; i++) {
//     // console.log(nums[i]);

//     for (var j = 0; j < nums2.length; j++) {
//         // console.log(nums2[j] * nums[i]);
//         total += nums2[j] * nums[i];
//     }
//     console.log( 'total of:',nums2[j] += nums[i]);

//     console.log('--')
// }

// /Changing Case //

// var data = ['karachi', 'lahore', 'multan', 'queeta']

// var userCity = prompt('enter city').toLowerCase();
// var check = false;

// for (var i = 0; i < data.length; i++) {
//     if (userCity === data[i]) {
//         console.log('found!')
//         check = true;
//         break;
//     }
// }
// if (check === false){
//     console.log('not Found!')
// }

// var usernames = 'ali';

// var a = usernames.slice(0,1).toUpperCase();
// var B = usernames.slice(1).toLowerCase();

// console.log(usernames);
// console.log(a+B);

// var input = prompt('enter string');
// for (var i = 0; i < input.length; i++) {
//     console.log(i);
//     console.log(input[i]);

//     if (input.slice(i, i + 2) === '  ') {
//         alert('no double')
//         break;
//     }
// }

// var text = "The New York Magzine Doesn't allow the phrase the World War II some more text."
// console.log(text)
// for (var i = 0; i < text.length; i++) {
//     if (text.slice(i, i + 12) === "World War II") {
//         console.log(text.slice(0, i) + "the Second World War") + text.slice(i + 12);
//         break;
//     };
// };

// .lastIndexOf
// .indexOf



// var text = "The New York Magzine Doesn't allow the phrase the World War II some more text."
// var charIndex = text.indexOf("World War II");
// if (charIndex !== -1) {
//     text = text.slice(0, charIndex) + "the Second World War" + text.slice(charIndex + 12);
// }
// console.log(text);

// javascript.info //


// console.log(parseFloat) // 
// console.log(parseInt)  //
// console.log(Number("1")) //

// var num9 = 200;
// console.log(num9.toString());


var sum2 = 5.7699;
console.log(sum2.toFixed())

// Function //

function greeting(userName) {
    console.log('welcome' + userName)
}
greeting('shazil');


var a = prompt('enter name')
greeting(a);

function sums(a, b) {
    console.log(a + b)
}
sums(5, 10);


function percent(_totalmarks, _obtMarks) {

    var per = _obtMarks / _totalmarks * 100;
    console.log(per);
    return per;
}

var calper = percent(550, 467);
console.log(calper);


function grades(per) {
    if (per >= 90) {
        return 'A';
    }
    else if (per >= 80) {
        return 'B';
    }
    else {
        return 'c';
    }
}
function result(_totalmarks, _obtMarks){
     var x = percent(_totalmarks,_obtMarks);
     var y = grades(x);
    console.log('percent:',x,'grades',y)
}
result(232,111)
result(300,500)