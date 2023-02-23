// console.log("Hello World")
// var stdName = [];
// var stdName = new Array();

// var stdName = ["Habib", "Hamza", "usaid"];
// var stdName = [2, 3, 4];
// var stdName = [true, false];
// var stdName = ["Habib", 766, true];
// var stdQual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", " M. Phil.", "PhD"];
// document.write("<h1>Qualification</h1>");
// document.write("1) "+ stdQual[0] + "<br>");
// document.write("2) "+ stdQual[1] + "<br>");
// document.write("3) "+ stdQual[2] + "<br>");
// document.write("4) "+ stdQual[3] + "<br>");
// document.write("5) "+ stdQual[4] + "<br>");
// document.write("6) "+ stdQual[5] + "<br>");
// document.write("7) "+ stdQual[6] + "<br>");
// document.write("8) "+ stdQual[7] + "<br>");

// var stdName = ["Michael", "John ", "Tony"];
// var stdScore = [320, 230, 480];
// var stdQual_1 = (stdScore[0] / 500) * 100;
// var stdQual_2 = (stdScore[1] / 500) * 100;
// var stdQual_3 = (stdScore[2] / 500) * 100;
// document.write("Score Of " + stdName[0] + "is " + stdScore[0] + " . Percentage Is " + stdQual_1 +"%" +"<br>");
// document.write("Score Of " + stdName[1] + "is " + stdScore[1] + " . Percentage Is " + stdQual_2 +"%" +"<br>");
// document.write("Score Of " + stdName[2] + "is " + stdScore[2] + " . Percentage Is " + stdQual_3 +"%" +"<br>");


// var askColor = ["Red", "Green", "Blue"];
// prompt("Enter Your Color").unshift();

// var stdScore = [320, 280, 480 , 120];
// stdScore.sort();
// document.write(stdScore);

// var cities = ["Karachi", "Quetta", "Peshawar", "Lahore", "Islamabad"];
// document.write("Citites :" + "<br>" + cities +"<br><br>");
// var selecCities = ["Karachi", "Quetta"];
// document.write("Selected Cities :" + "<br>" + selecCities);

// var arr = ["This", "Is", "My", "Cat"]
// document.write("Array " + "<br>" + arr + "<br><br>");
// document.write( arr.join(' ') + "<br>");

// var devices = ["Keyboard", "Mouse", " Pointer", "Monitor"];
// document.write("Devices:" + "<br><br>");
// document.write("Out:" + "<br>" + devices[0] + "<br>");
// document.write("Out:" + "<br>" + devices[1] + "<br>");
// document.write("Out:" + "<br>" + devices[2] + "<br>");
// document.write("Out:" + "<br>" + devices[3] + "<br>");

// var devices = ["Apple", "Samsung", "Nokia", "Sony" ,"Haier"];
// document.write("Devices:" + "<br><br>");
// document.write("Out:" + "<br>" + devices[0] + "<br>");
// document.write("Out:" + "<br>" + devices[1] + "<br>");
// document.write("Out:" + "<br>" + devices[2] + "<br>");
// document.write("Out:" + "<br>" + devices[3] + "<br>");

// var Arr=[[1,2],[3,4],[5,6]];
// document.write(Arr);
// var arr_1 = [[0, 1, 2, 3]];
// var arr_2 = [[1, 0, 1, 2]];
// var arr_3 = [[2, 1, 0, 1]];
// document.write(arr_1.join(' ') + "<br>");
// document.write(arr_2.join(' ') + "<br>");
// document.write(arr_3.join(' ') + "<br>");

//var loop = "Habib"; just for cause not for applause
// for (let a = 1; a <= 10; a++) {
//     document.write( a +"<br>");

// }

// var table = +prompt("Enter Your Number");
// var length = +prompt("Enter The Length");
// for (let a = 1; a <= length; a++) {
//     var result = a * table;
//     document.write(`${table} x ${a} = ${result}` +"<br>");

// }

// var fruits = ["apple", "mango", "strawberry", "orange", "grapes",];
// for (let a = 0; a <= 4; a++) {
//     document.write(fruits[a] + "<br>");
//     document.write("Element At Index " + a + "=" + fruits[a] + "<br>");
// }

// document.write("<h1>Counting</h1>" + "<br>");
// for (let a = 1; a <= 15; a++) {
//     document.write(a);

// }
// var ourArray = [];
// document.write("<h1>Reverse Counting</h1>" + "<br>");
// for (var i = 10; i > 0; i--) {
//     ourArray.push(i);
//     document.write(i + " ");
// }
// document.write("<h1>Even</h1>" + "<br>");

// var number = +prompt("Enter Your Number")
// for (var x = 0; x <= number; x++) {
//     if (x === 0) {
//         console.log(x + " is even");
//     }
//     else if (x % 2 === 0) {
//         console.log(x + " is even");
//     }
//     else if (x !== 2) {
//         alert("You Enter Odd Number");
//         break;
//     }
// }
// document.write("<h1>Odd</h1>" + "<br>");

// for (var i = 0; i <= 20; i++) {
//     if (i % 2 != 0) {
//         console.log(i)
//     }
// }

// document.write("<h1>Series</h1>" + "<br>");

// var food = prompt("Enter Your Food");
// for (let a = 0; a <= food.length; a++) {
//     if (food === "cake") {
//         alert("Yes Your Food " + food + " Is Available");
//         break;
//     }
//     else if (food === "apple pie") {
//         alert("Yes Your Food " + food + " Is Available");
//         break;
//     }
//     else if (food === "cookie") {
//         alert("Yes Your Food " + food + " Is Available");
//         break;
//     }
//     else if (food === "chips") {
//         alert("Yes Your Food " + food + " Is Available");
//         break;
//     }
//     else if (food === "paties") {
//         alert("Yes Your Food " + food + " Is Available");
//         break;
//     }
//     else {
//         alert("You Want This " + food + " Is Not Avalaible");
//         break;
//     }
// }


// var num1 = +(prompt("Enter first number: "));
// var num2 = +(prompt("Enter second number: "));
// var num3 = +(prompt("Enter third number: "));
// let largest;

// if (num1 >= num2 && num1 >= num3) {
//     largest = num1;
// }
// else if (num2 >= num1 && num2 >= num3) {
//     largest = num2;
// }
// else {
//     largest = num3;
// }
// console.log("The largest number is " + largest);

// var num1 = +prompt("Enter First Number: ");
// var num2 = +prompt("Enter Second Number: ");
// var num3 = +prompt("Enter Third Number: ");
// let largest;

// if (num1 <= num2 && num1 <= num3) {
//     largest = num1;
// }
// else if (num2 <= num1 && num2 <= num3) {
//     largest = num2;
// }
// else {
//     largest = num3;
// }
// console.log("The Smallest Number Is " + largest);

// for (x = 1; x <= 100; x++) {
//     if (x % 5 == 0) {
//         document.write(x + "<br>")
//     }
// }