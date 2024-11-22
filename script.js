//IIFE
//1-masala
// (function () {
//   let arr = [1, 2, 3, 4];
//   function test(a) {
//     let sum = 0;
//     for (let i = 0; i < a.length; i++) {
//       sum += a[i];
//     }
//     return sum;
//   }
//   let res = test(arr);
//   console.log(res);
// })();

//2-masala
// (function() {
//     let son1 = prompt("son kiriting");
//     let son2 = prompt("son kiriting");
//     let res = son1 * son2
//     console.log(res);
// })()

//Object, array copy
//1-masala
// let obj = { name: "Ali", age: 25 };
// let res = JSON.parse(JSON.stringify(obj))
//     res.city='Toshkent'

// console.log(res);

//2-masala
// let obj = [1, 2, 3];
// let res = obj.map(function (value) {
//     return value*2
// })
// console.log(res);

//3-masala
// let obj = { person: { name: "Ali" } };
// let res = JSON.parse(JSON.stringify(obj))
// console.log(res);

//Pure function
//1-masala
// let arr1 = [1, 2];
// let arr2 = [3, 4];

// function add(a, b) {
//   return a.concat(b);
// }
// let res = add(arr1, arr2);
// console.log(res);

//2-masala
// let arr = [2, 4, 6, 8];
// function sum(a) {
//     let sum = 0
//     let res=0
//     for (let i = 0; i < a.length; i++) {
//         sum += 1
//         res+=a[i]
//     }
//     return res/sum
// }
// let res=sum(arr)
// console.log(res);

//Rekursiv function
//1-masala

// let son = +prompt("son kirting");

// function faktorial(a) {
//   if (a == 0) {
//     return 1;
//   }
//   return a * faktorial(a - 1);
// }
// let res = faktorial(son);
// console.log(res);

//2-masala
// function fibonac(n) {
//     if (n === 0) {
//         return 0;
//     } else if (n === 1) {
//         return 1;
//     }

//     return fibonac(n - 1) + fibonac(n - 2);
// }

// let n = +prompt("Fibonacci sonini kiriting");
// console.log(fibonac(n));

//3-masala
// let arr = [1, 2, 3, 4];

// function max(arr, index = 0) {
//   if (index >= arr.length) {
//     return 0;
//   }

//   return arr[index] + max(arr, index + 1);
// }

// let res = max(arr);
// console.log(res);


//Object
//1-masala
// let obj = {
//     name: 'Ali',
//     age:25
// }
// function keys(a) {
//     console.log(Object.keys(a));
// }
// keys(obj)


//2-masala
// let obj = {
//     name: 'Ali',
//     age:25
// }
// function value(a) {
//     console.log(Object.values(a))
// }
// value(obj)


//3-masala
// let obj = {
//   name: "Ali",
//   age: 25,
// };
// function value(a) {
//   console.log(Object.entries(a));
// }
// value(obj);



//JSON
//1-masala
// let obj = { name: "Ali", age: 25 };
// function trans(a) {
//     let res=JSON.parse(JSON.stringify(a))
//     console.log(res);
// }
// trans(obj)


//String
//1-masala
// let text = "   Hello   World!   ";
// let result = text.replace(/\s+/g, '');

// console.log(result);


//2-masala
// let text = "Hello World!";
// let res = text.toLocaleUpperCase()
// console.log(res);


//3-masala
// let text = 'hello';
// let res = text[0].toUpperCase()
// res+=text.slice(1)
// console.log(res);


//4-masala
// let text = "hello   ";
// let res = text.trimEnd()
// console.log(res);


//5-masala
// let text = "Java Script";

// let res=text.split(" ");
// console.log(res);


//7-masala
// let text = "hello world";
// let res = text.length
// console.log(res);


//8-masala
// let text = "hello world";

// function deleted(a) {
//     let sum = '';
//     for (let i = 0; i < text.length; i++) {
//         if (text[i] == 'a' || text[i] == 'e' || text[i] == 'i' || text[i] == 'o' || text[i] == 'u') {
//             continue; 
//         }
//         sum += text[i]; 
//     }
//     return sum;  
// }

// let res = deleted(text);
// console.log(res);  







