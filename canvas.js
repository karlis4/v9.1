// function calculateArea(radius) {
//     const area = Math.PI * radius * radius;
//     //return area;
// }

// // Присваиваем возвращённое значение переменной
// const areaOfCircle = calculateArea(5);

// // Используем возвращённое значение для вывода в консоль
// console.log(`Площадь круга: ${areaOfCircle}`);

// // Используем возвращённое значение как аргумент для другой функции
// function printArea(area) {
//     console.log(`Площадь круга: ${area}`);
// }

// printArea(calculateArea(7));

// // Используем возвращённое значение в условии
// if (calculateArea(3) > 20) {
//     console.log('Площадь круга больше 20');
// }







//                           6           //
                                           
//const result = prompt('Ваш никнейм:');     // 
                                           
//alert(`ваш никнейм ${result}`);            //

//////////////////////////////////////////////


//                       8                 //

// let a = 1, b = 1;

// alert( ++a ); // 2, префиксная форма возвращает новое значение
// alert( b++ ); // 1, постфиксная форма возвращает старое значение

// alert( a ); // 2, значение увеличено один раз
// alert( b ); // 2, значение увеличено один раз
///////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
// "" + 1 + 0 = "10" // (1)
// "" - 1 + 0 = -1 // (2)
// true + false = 1
// 6 / "3" = 2
// "2" * "3" = 6
// 4 + 5 + "px" = "9px"
// "$" + 4 + 5 = "$45"
// "4" - 2 = 2
// "4px" - 2 = NaN
// "  -9  " + 5 = "  -9  5" // (3)
// "  -9  " - 5 = -14 // (4)
// null + 1 = 1 // (5)
// undefined + 1 = NaN // (6)
// " \t \n" - 2 = -2 // (7)
////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////
// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(+a + +b); // 12
/////////////////////////////////////////////////////////////////







//                                      9


//////////////////////////////////////////////////////////////////////////////
// let jsName = prompt('Какое «официальное» название JavaScript?', '');

// if (jsName == 'ECMAScript') {
//   alert('Верно!');
// } else {
//   alert('Не знаете? ECMAScript!');
// }
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
// let Chislo = prompt('Число:', '');

// if (Chislo > 0) {
//   alert('1');
// } else if(Chislo < 0){
//   alert('-1');
// } else if (Chislo === 0) {
//     alert('-1');
// }

// alert(Chislo);
//////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////

// let result = (a + b < 4) ? 'Мало' : 'Много';

// alert(result);
//////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////
// let message = (login == 'Сотрудник') ? 'Привет' :
//   (login == 'Директор') ? 'Здравствуйте' :
//   (login == '') ? 'Нет логина' :
//   '';
//////////////////////////////////////////////////////////////////////////////


//             11

//////////////////////////////////////////////////////////////////////////////
// let age = prompt("Укажите число", );

// if ((age < 90) && (age >= 14) || (age <= 90) && (age > 14 )){
//         alert('диапазон');
// } else{
//     alert('не диапазон');

// }
//////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////////////////
// let age = prompt("Укажите число: ", );

// if (age >= 14 != age <= 90){
//         alert('не диапазон');
// } 
/////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////
// let nickName = prompt('Кто там?: ', '');

// if (nickName == null){
//     alert('Отменено');
// } else if(nickName != 'Admin') {
//     alert('Я вас не знаю');
// } 

// let password;

// if (nickName == 'Admin') {
//         password = prompt('Пароль?', '');
//         if (password == "Я главный") alert('Здравствуйте!');
//         else if (password != "Я главный" && password != null) alert('Неверный пароль');
// } if (password == null)  alert('Отменено');
//////////////////////////////////////////////////////////////////////////////////










//                        12


///////////////////////////////////////////////////////
// let num1 = 10,
//     num2 = 20,
//     result;

// if (result ??= num1) {
//   if (num1 ?? result) {
//     result = num1;
//   } else {
//     result = num2;
//   }
// }
///////////////////////////////////////////////////////




///////////////////////////////////////////////////////
// let num1 = 10,
//     num2 = 20,
//     result;

// result ??= num1 ?? num2;

// console.log(result);
///////////////////////////////////////////////////////


///////////////////////////////////////////////////////

// let x = null;
// let y = 10;
// let result;

// function getValue(a, b) {
//     result = a ?? b;

//     return result;
// }

// const fk = getValue(x, y);

// console.log(fk);
///////////////////////////////////////////////////////



///////////////////////////////////////////////////////
// let arr = {
//     name: null
// };

// function getName(obj) {
//     if (obj.name == "Andrew") {
//         result = obj.name;
//     } else if (obj.name ??= "Unknown") {
//         result = "Unknown";
//     }

//     return result;
// }

// const funk = getName(arr);

// console.log(funk);
///////////////////////////////////////////////////////




//                         13

//////////////////////////////////////////////
// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         alert(i);
//     }

// }
////////////////////////////////////////////////


////////////////////////////////////////////////
// let i = 0;

// while (i < 3) {
//     alert( `number ${i}!` );
//     i++;
// }
//////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////
// let input = prompt('Введите число больше 100: ', '');

// for (let i = 0; i <= input; i++) {
//     if (input < 100 && input != null){
//         input = prompt('Введите ещё раз: ', '');
//     }else if (input == null) break;
    
// }
///////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////
// let input = prompt('Введите число больше 100: ', '');

// while (true) {
//     if (input === null) break;
//     if (input === '' || input < 100) {
//         input = prompt('Введите ещё раз: ', '');
//     } else {
//         break;
//     }
// }
////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////
// let n = 10; // Вы можете изменить это значение для других интервалов

// for (let i = 2; i <= n; i++) {
//     let isPrime = true;
//     for (let j = 2; j < i; j++) {
//         if (i % j === 0) {
//             isPrime = false;
//             break;
//         }
//     }
//     if (isPrime) {
//         console.log(i);
//     }
// }
//////////////////////////////////////////////////////////////////////////////////





//                                    14

/////////////////////////////////////////////////////////////////////////////////////////////////
// let browser = 'Fi';

// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;
  
//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;
  
//     default:
//       alert( 'We hope that this page looks ok!' );
//   }


//   if (browser === 'Edge') {
//     alert( "You've got the Edge!" );
//   } else if (browser === 'Chrome' || 
//             browser === 'Firefox' ||
//             browser === 'Safari' || 
//             browser === 'Opera'){alert( 'Okay we support these browsers too' );}
//     else {
//         alert( 'We hope that this page looks ok!' );
//     }
//////////////////////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////
// const number = +prompt('Введите число между 0 и 3', '');

// switch (number) {
//     case 0:
//         alert('Вы ввели число 0');
//         break;
//     case 1:
//         alert('Вы ввели число 1');
//         break;
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
//         break;
// }
//////////////////////////////////////////////////////////////////////


// let key = +prompt('введите число');

// switch (key) {
//     case 1:
//         alert('понедельник');
//         break;
//     case 2:
//         alert('вторник');
//         break;
//     case 3:
//         alert('среда');
//         break;
//     case 4:
//         alert('четверг');
//         break;
//     case 5:
//         alert('пятница');
//         break;
//     case 6:
//         alert('суббота');
//         break;
//     case 7:
//         alert('воскресенье');
//         break;
// }







//                                 15


// function checkAge(age) {
//     if (age >= 18) {
//       return true;
//     } else {
//       return confirm('А родители разрешили?');
//     }
//   }
  
//   let age = prompt('Сколько вам лет?', 18);

//   function showMovie(age) {
//     if ( !checkAge(age) ) {
//       return;
//     }
  
//     alert( "Вам показывается кино" ); // (*)
//     // ...
//   }

//   showMovie();
  
//   if ( checkAge(age) ) {
//     alert( 'Доступ получен' );
//   } else {
//     alert( 'Доступ закрыт' );
//   }



// function showPrimes(n) {
//     nextPrime: for (let i = 2; i < n; i++) {
  
//       for (let j = 2; j < i; j++) {
//         if (i % j == 0) continue nextPrime;
//       }
      
//       console.log(i);

//       //alert( i ); // простое
//     }
    
//     

//   }

//   showPrimes(30);


  


// function showPrimes(n) {

//     for (let i = 2; i < n; i++) {
//       if (!isPrime(i)) continue;
  
//       console.log(i);  // простое
//     }
//   }
  
//   function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//       if ( n % i == 0) return false;
//     }
//     return true;
//   }

//   showPrimes(30);



//////////////////////////////////////////////////////////////////////////////
// let input = prompt("Введите два числа, разделенные пробелом:");
// let numbers = input.split(" ");
// let num1 = numbers[0];
// let num2 = numbers[1];

// function min(a,b){
//     if (a < b){
//         return alert(a);
//     } else if(a > b) {
//         return alert(b);
//     } else if(a == b){
//         return alert(a || b);
//     }

// }

// min(num1,num2);
////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////
// let input = prompt("Введите два числа, разделенные пробелом:");
// let numbers = input.split(" ");
// let num1 = numbers[0];
// let num2 = numbers[1];


// function pow(a,b){
//    return a ** b;
// }

// let result = pow(num1,num2);

// alert(result);
////////////////////////////////////////////////////////////////////////////////





//                                              16

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   function showOk() {
//     alert( "Вы согласны." );
//   }
  
//   function showCancel() {
//     alert( "Вы отменили выполнение." );
//   }
  
//   // использование: функции showOk, showCancel передаются в качестве аргументов ask
//   ask("Вы согласны?", showOk, showCancel);




//////////////////////////////////////////////////////////////////////
// const greet = function(name, callback) {
//     alert(`${callback()} ${name}`);
// };


// function callback() {
//     let hellow = 'Привет, ';
//     return hellow;
// }

// greet('Владислав', callback)
////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////
// const square = function(number, callback) {
//     alert(`${callback(number)}`);
// };


// function callback(a) {
//     return a * a;
// }

// square(900, callback);
////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////
// let ask = (question, yes, no) => (confirm(question)) ? yes() : no();

//     ask(
//         "Вы согласны?",
//         () => alert("Вы согласились."),
//         () => alert("Вы отменили выполнение.")
//       );
///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////////////////////
// const isEven = (num, callback) => {
//     prompt('Введите число: ', num) ? alert(callback(num)) : alert(callback(num))
// };

// function callback(num) {
//     let i = num;
//     if (i % 2 == 0) return true;
//     else return false;
// }

// // Пример использования:
// isEven(4, callback); // Ожидаемый результат: true
// isEven(7, callback); // Ожидаемый результат: false
/////////////////////////////////////////////////////////////////////////////////////////



// function pow(x, n) {
//     if (n < 0) {
//       alert("Отрицательные значения 'n' не поддерживаются");
//     } else {
//       let result = 1;
  
//       for (let i = 0; i < n; i++) {
//         result *= x;
//       }
  
//       return alert(result);
//     }

    
//   }
  
// pow(2, 3);


// function showPrime(n) {

//     for (let j = 2; j <= n; j++) {
//     isPrime(j);
//     }
//     }
    
//     function isPrime(j) {
    
//     for (let i = 2; i < j; i++) {
//     if (j % i == 0) return;
//     }
    
//     return console.log(j);
//     }

// function pow(x, n) {
//     let result = 1;
  
//     for (let i = 0; i < n; i++) {
//       result *= x;
//     }
  
//     return alert(result);
//   }


//   pow(10, 3);










//                                      1(Object)

// let fruit = prompt("Какой фрукт купить?", "apple");

// let bag = {
//   [fruit]: 5, // имя свойства будет взято из переменной fruit
// };

// alert( bag[fruit] )


//////////////////////////////////////////////////////////////////////////
// let user = {
//     name: 'John',
//     surname: 'Smith'
// };


// user.name = 'Pete';

// alert(user.name);

// delete user.name;
////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////////
// let schedule = {};

// function isEmpty(obj) {
//     for (let key in obj) {
      
//       return false;
//     }
//     return true;
//   }

//   schedule["8:30"] = "get up";

// isEmpty(schedule);
/////////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   }

// function isEmpty(obj) {

//     let sum = 0;

//     for (key in obj) {
//        sum += obj[key];
//     }

//     return alert(sum);


// }


// isEmpty(salaries);
///////////////////////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////////////////////
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

  
//   function multiplyNumeric(obj) {
//     for (key in obj) {
//         if ( typeof obj[key] === 'number' ) {
//             obj[key] *= 2;
//         }
//     }
           
        
// } 


//   alert(multiplyNumeric(menu));
/////////////////////////////////////////////////////////////////////////////////////
  



// function marry(man, woman) {
//     woman.husband = man;
//     man.wife = woman;
  
    
//     return {
//       father: man,
//       mother: woman
//     }
//   }


 

//   let family = console.log(marry({
//     name: "John"
//   }, {
//     name: "Ann"
//   }));





// let GreenGrass = function(enter1, enter2, enter3, obj1, obj2) {
//     let obj3 = {};

//     if (enter1 === '') enter1 = `"${enter1}"`;
//     if (enter2 === '') enter2 = `"${enter2}"`;
//     if (enter3 === '') enter3 = `"${enter3}"`;

//     return console.log(Object.assign(obj3, obj1, obj2));
// }



// let enter1 = prompt('Впишите свойство', '');
// let enter2 = prompt('Впишите свойство', '');
// let enter3 = prompt('Впишите свойство', '');

// let obj1 = {
//     neme: 'John',
//     height: 150,
//     weight: 190
// };

// let obj2 = {
//     [enter1]: 'rød',
//     [enter2]: 'real',
//     [enter3]: 'Komsomolskaya'
// };

// GreenGrass(enter1, enter2, enter3, obj1, obj2);



//                                              4


// function makeUser() {
//     return {
//       name: "John",
//       ref: this
//     };
//   }
  
//   let user = makeUser();
  
//   alert( user.ref.name ); 



///////////////////////////////////////////////////////////////////////////////
// let Anzahl1 = prompt('Введите число а:');
// let Anzahl2 = prompt('Введите число b:');

// let calculator = {
//     a: [Anzahl1],
//     b: [Anzahl2],

//     read() {
//         a = this.a;
//         b = this.b;
//     },
//     sum() {
//         return +a + +b; 
//     },
//     mul() {
//         return a * b;
//     }
// };

// calculator.read();

// alert(calculator.sum());
// alert(calculator.mul());
///////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////
// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this;
//     },
//     down() {
//       this.step--;
//       return this;
//     },
//     showStep: function() { // показывает текущую ступеньку
//       alert( this.step );
//       return this;
//     }
//   };

//   ladder.up().up().down().showStep().down().showStep();
/////////////////////////////////////////////////////////////////////////////









//                                             5


/////////////////////////////////////////////////////////////////////////////////////////
// function Calculator() {
//     this.a = +prompt('Введите a: ', 0);
//     this.b = +prompt('Введите b: ', 0);

//     this.read = function() {
//         a = this.a;                  //this.a = +prompt('Введите a: ', 0);
//         b = this.b;                  //this.b = +prompt('Введите b: ', 0);
//     }

//     this.sum = function() {
//         return a + b;
//     }

//     this.mul = function() {
//         return a * b;
//     }
// } 

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum = " + calculator.sum() );
// alert( "Mul = " + calculator.mul() );
///////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////////
// function Accumulator(startingValue) {
//     this.value = startingValue;

//     this.read = function () {
//         this.one = +prompt('Сколько нужно добавить?', 0)
//         this.value += this.one;
//         return;
//     }

   
// }

// let accumulator = new Accumulator(1);

// accumulator.read(); 
// accumulator.read(); 
// accumulator.read(); 

// alert(accumulator.value);
/////////////////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////////////////
// let person = {
//     name: 'Vlad',
//     age: 17,
//     greet() {
//         alert(`Привет ${this.name}. Тебе ${this.age} лет`);
//     }
// }

// person.greet();
//////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////
// let rectangle = {
//     width: 5,
//     height: 8
// }

// function calculateArea(rectangle) {
//     obj = rectangle;
//     return alert(obj.width * obj.height);
// }


// let result = calculateArea(rectangle);
/////////////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////////
// let car = {
//      start() {
//          alert('Машина запустилась');
//          return this;
//      },

//     stop() {
//         alert('Машина остановилась');
//         return this;
//     },
    
// }

// car.stop().start().start().start();
///////////////////////////////////////////////////////////////////////////



let shoppingList = {
    

    addItem() {
        this.addName = prompt('Какой продукт добавить?', '');
        this.addKey = prompt('Какое свойство добавить?', '');
        shoppingList[this.addName] = this.addKey;
        return this;
    },

    removeItem() {
        let removeName = prompt('Какой продукт удалить?', this.addName);
        for (removeName in shoppingList) {
            delete shoppingList[removeName];
    }

    return this;
    }
}

shoppingList.addItem().removeItem();

// const privateProperty = Symbol('privateProperty');

// let obj = {
//   publicProperty: 'I am public',
//   [privateProperty]: 'I am private'
// };

// console.log(obj.publicProperty); // Output: I am public
// console.log(obj[privateProperty]);


// let Person = {
//   name: 'John',
//   age: 25,
//   gender: 'man',

//   [Symbol.toPrimitive](hint) {
//     alert(hint);
//     hint = this.name;
//     return alert(`Ваше имя: ${hint}`);
//   },

//   toString() {
//     alert(`Пол: ${this.gender}`);
//     return this;
//   },

//   valueOf() {
//     alert(`Возраст: ${this.age}`)
//     return this;
//   }
// }

// alert(Person);
// Person.toString().valueOf();





//                                          1 (Типы данных)



////////////////////////////////////////////////////////////////////////
// let calc = () => {
//     let num1 = +prompt('Введите первое число:', '');
//     let num2 = +prompt('Введите второе число:', '');

//     return num1 + num2;
// }

// let result = calc();

// alert(result);
//////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////
// function readNumber() {
//     let num1 = +prompt('Введите число:', '');

  
//         for (let i = 0; i <= num1; num1++) {
//         num1 = +prompt('Введите число ещё раз:', '');

//         if (num1 != null && num1 != '') {
//         return alert(`Вы, наконец-то, ввели число: ${num1}`);
//         } else if (num1 == 0) return alert(null);
//     } 
        
//     return alert(`Число: ${num1}`);
    
    
    
// }

// readNumber();
////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////
// function random(min, max) {
//     return min + Math.random() * (max - min);
//   }
  
//   alert( random(1, 5) );
//   alert( random(1, 5) );
//   alert( random(1, 5) );
/////////////////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////////////////
// function randomInteger(min, max) {
//     return alert(Math.floor(min + Math.random() * (max - min)));
// }

// randomInteger(1, 5);
////////////////////////////////////////////////////////////////////////////////////





//                                              3



////////////////////////////////////////////////////////
// let ucFirst = (str) => {
//     let a1 = str[0].toUpperCase();
//     let a2 = str.slice(1);

//     alert(a1 + a2);
// }

// ucFirst('вася');
////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////
// let checkSpam = (str) => {

//         let str1 = str.toLowerCase();
//         let str2 = str.toUpperCase();

//         if (str1.includes('viagra') || str1.includes('xxx') || 
//             str2.includes('XXX')) {
//             return alert(true);
//         } else return alert("Спам");
    
// }


// checkSpam('buy ViAgRA now');
// checkSpam('free xxxxx');
// checkSpam("innocent rabbit");
///////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////
// function truncate(str, maxlength) {
//         if (str.length > maxlength) {
//             return alert(str.slice(0, 19) + '\u2026');
//         }

//     return alert(str);
// }

// truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);
// truncate("Всем привет!", 20);
///////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////
// function extractCurrencyValue(str) {


//     if (str.at[0] !== 'number') {
//         return str.slice(1);
//     }
// }

// alert( extractCurrencyValue('$120'));
///////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////
// function extractCurrencyValue(str) {
//     if (isNaN(str[0])) {
//         return alert(str.slice(1));
//     }
//     return parseFloat(str.slice(1));
// }

// alert(extractCurrencyValue('\$120'));
//////////////////////////////////////////////////////////////////////////////////






//                                              4


//////////////////////////////////////////////////////////////////////
// let styles = ["Джаз", "Блюз"];
// styles.push("Рок-н-ролл");
// styles[Math.floor((styles.length - 1) / 2)] = "Классика";
// alert( styles.shift() );
// styles.unshift("Рэп", "Регги");
//////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////////
// let arr = [];

// function sumInput(numbers) {
//     let enter = +prompt('Введите число:', 0);
//     //numbers.push(enter);

//     for(let i = 0; i < enter; enter++) {
//         let enter = +prompt('Введите число:', 0);
        
//         if (enter === '' || typeof enter !== 'number' || enter === null){
//             return numbers += numbers[i];
//         } else if (enter === 0) {
//              enter = +prompt('Введите число:', 0);
//         } else numbers.push(enter);
//     }

//     for (let i = 0; i < numbers.length; i++) {
//         return enter += numbers[i]
//     }

   

// }

// sumInput(arr);
/////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////
// function sumInput() {

//     let numbers = [];
  
//     while (true) {
  
//       let value = prompt("Введите число", 0);
  
//       // Прекращаем ввод?
//       if (value === "" || value === null || !isFinite(value)) break;
  
//       numbers.push(+value);
//     }
  
//     let sum = 0;
//     for (let number of numbers) {
//       sum += number;
//     }
//     return sum;
//   }
  
//   alert( sumInput() );
/////////////////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////////////////
// function getMaxSubSum(arr) {

//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         numb = arr[i];
//         if (numb < 0) continue;
//         else sum += numb;
//         alert(sum);
//     }

//     return;
   
// }


//getMaxSubSum([-1, 2, 3, -9]); 
// getMaxSubSum([2, -1, 2, 3, -9]);
// getMaxSubSum([-1, 2, 3, -9, 11]);
// getMaxSubSum([-2, -1, 1, 2]);
// getMaxSubSum([100, -9, 2, -3, 5]); 
// getMaxSubSum([1, 2, 3]);

// function getMaxSubSum(arr) {
//     let maxSum = 0;
//     let partialSum = 0;
  
//     for (let item of arr) { // для каждого элемента массива
//       partialSum += item; // добавляем значение элемента к partialSum
//       maxSum = Math.max(maxSum, partialSum); // запоминаем максимум на данный момент
//       if (partialSum < 0) partialSum = 0; // ноль если отрицательное
//     }
  
//     return maxSum;
//   }
  
//   alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
//   alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
//   alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
//   alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
//   alert( getMaxSubSum([1, 2, 3]) ); // 6
//   alert( getMaxSubSum([-1, -2, -3]) ); // 0






/////////////////////////////////////////////////////////////////////////////
// let arr = ['Вася', 'Петя', 'Ольга', 'Олег', 'Маша', 'Саша', 'Адрей'];
// let startEnter = +prompt('Введите  начальный индекс:', 0);
// let endEnter = +prompt('Введите конечный индекс:', 0);

// function removeElement(arr, startIndex, endIndex) {
//   let newArr = [];

//   arr.splice(startIndex, endIndex);

//   //arr.forEach((item, index) => {
//     alert(newArr = arr);
//   //});
  
  
// }



// removeElement(arr, startEnter, endEnter);
////////////////////////////////////////////////////////////////////////////////////




//////////////////////////////////////////////////////////////////////////////////////
// let arr = ['Вася', 'Петя', 'Ольга', 'Олег', 'Маша', 'Саша', 'Адрей'];
// let startEnter = +prompt('Введите  начальный индекс:', 0);
// let endEnter = +prompt('Введите конечный индекс:', 0);

// function getSubArray(arr, start, end) {
//   let newArr = [];
//   newArr = arr.slice(start, end);

//   return newArr;
// }


// let result = getSubArray(arr, startEnter, endEnter);

// alert(result);
///////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////////////
// let arr1 = [];
// let arr2 = [];



// function mergeArrays(arr1, arr2) {
//   let newArr = [];

//   while (true) {
//     let joinTo1 = prompt('Введите  значения для 1 массива:', '');
//     if (isFinite(joinTo1) || joinTo1 === null) break;

//     arr1.push(joinTo1);

//   }

//   while (true) {
//     let joinTo2 = prompt('Введите  значения для 2 массива:', '');
//     if (isFinite(joinTo2) || joinTo2 === null) break;

//     arr2.push(joinTo2);

//   }

//   newArr = arr1.concat(arr2);

  
//   alert(newArr);

//   return newArr;
// }


// let result = mergeArrays(arr1, arr2);

//alert(result);
///////////////////////////////////////////////////////////////////////////////////////////////////



////////////////////////////////////////////////////////////////////////////////
// let arr = ['Вася', 'Петя', 'Ольга', 'Олег', 'Маша', 'Саша', 'Андрей'];

// function logElements(arr) {
//   let result = '';
//   arr.forEach((item, index) => {
//     result += `Элемент: ${item}, Индекс: ${index}\n`;
//   });
//   return result;
// }

// alert(logElements(arr));
/////////////////////////////////////////////////////////////////////////////////////



// let users = [
//   {id: 1, name: "Вася"},
//   {id: 2, name: "Петя"},
//   {id: 3, name: "Маша"}
// ];

// function findElement(arr, callback) {
//   return callback(arr);
// }


// function callback(arr) {
//   let newArss = arr.filter(item => item.id < 3);
//   return newArss;

// }


// alert(findElement(users, callback));



// [1, -2, 15, 2, 0, 8].sort(function(a, b) {
//   alert( a + " <> " + b );
//   return a - b;
// });

// function compareNumeric(a, b) {
//   if (a > b) return 1;
//   if (a == b) return 0;
//   if (a < b) return -1;
// }

// let arr = [ 1, 2, 15 ];

// arr.sort(compareNumeric);

// alert(arr);




///////////////////////////////////////////////////////////////////////
// let obj = [{name: 'Viktor', age: 21}, 
//           {name: 'Alex', age: 17}, 
//           {name: 'Sasha', age: 29}, 
//           {name: 'Oleg', age: 16},
//           {name: 'Vlad', age: 23},];


// function ObjectAverage(mass) {
//   let newArray  = mass.map(item => {
  
//     if (item.age > 18) {
//       return {name: item.name.toUpperCase()};
//     } else return item;
// });

// return newArray;
// }


// console.log(ObjectAverage(obj));
/////////////////////////////////////////////////////////////////////////


/////////////////////////////////////////////////////////////////////////
// let obj = [{name: 'Viktor', age: 21}, 
//           {name: 'Alex', age: 17}, 
//           {name: 'Sasha', age: 29}, 
//           {name: 'Oleg', age: 16},
//           {name: 'Vlad', age: 21},];


// function ObjectAverage(mass) {


//   let newArray  = mass.sort(function(a, b) {
//     if (b.age !== a.age) {
//     return b.age - a.age;
//     } else return a.name.localeCompare(b.name);
//   }); 
  
   
// return newArray;
// }


// console.log(ObjectAverage(obj));
//////////////////////////////////////////////////////////////////////////






//////////////////////////////////////////////////////////////////////////
// let obj = [{firstname: 'Viktor', lastname: 'Viktorovich'}, 
//           {firstname: 'Alexsei', lastname: 'Alexseevich'}, 
//           {firstname: 'Vasilii', lastname: 'Vasiljecich'}, 
//           {firstname: 'Danil', lastname: 'Danilovich'},
//           {firstname: 'Oleg', lastname: 'Olegovich'},];

// function ObjectAverage(mass) {
//     let str = mass.join(',');

//     return str;
// }


// console.log(ObjectAverage(obj));
///////////////////////////////////////////////////////////////////////////







//                                                        5



///////////////////////////////////////////////////////////////////////////////
// let arr = [5, 3, 8, 1];


// function filterRange(arr, a, b) {

//     let newArr = arr.filter((item) => item >= a && item <= b);

//     return newArr;
// }


// let filtered = filterRange(arr, 1, 4);

// alert( filtered ); 

// alert( arr ); 
///////////////////////////////////////////////////////////////////////////////






///////////////////////////////////////////////////////////////////////////////
// function camelize(str) {
//     return str
//       .split('-') // разбивает 'my-long-word' на массив ['my', 'long', 'word']
//       .map(
//         // Переводит в верхний регистр первые буквы всех элементом массива за исключением первого
//         // превращает ['my', 'long', 'word'] в ['my', 'Long', 'Word']
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//       )
//       .join(''); // соединяет ['my', 'Long', 'Word'] в 'myLongWord'
//   }

//   alert(camelize('my-long-word'));
////////////////////////////////////////////////////////////////////////////////////////////////////




// let arr = [5, 3, 8, 1];


// function filterRangeInPlace(arr, a, b) {
//     arr = arr.filter((item) => {
//         item >= a && item <= b 

//         if(!(item >= a || item <= b)) return arr.splice(item, 1);
//     });

    
//     return arr;
    
// }





// let filtered = filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert( filtered );



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let arr = [5, 3, 8, 1];

// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < a || arr[i] > b) {
//             arr.splice(i, 1); // Удаляем элемент, не соответствующий диапазону
//             i--; // Возвращаемся на одну позицию назад, чтобы проверить новый элемент на этом же индексе
//         }
//     }
//     return arr; // Необязательно, так как массив изменяется по месту
// }

// let filtered = filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert(filtered);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





/////////////////////////////////////////
// let arr = [5, 2, 1, -10, 8];


// arr.sort((a, b) => b - a);

// alert( arr );
//////////////////////////////////////



///////////////////////////////////////////////////////////////////
// let arr = ["HTML", "JavaScript", "CSS"];


// function copySorted(arr) {
//     let newArr = arr.sort((a, b) => a.localeCompare(b));

//     return newArr;
// }



// let sorted = copySorted(arr);

// alert( sorted ); // CSS, HTML, JavaScript
// alert( arr ); // HTML, JavaScript, CSS (без изменений)
///////////////////////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////////////////////////
// function Calculator() {
//     // Методы вычитания и сложения
//     this.methods = {
//       "-": (a, b) => a - b,
//       "+": (a, b) => a + b
//     };
  
//     // Метод для выполнения математических операций
//     this.calculate = function(str) {
//       let split = str.split(' '),
//           a = +split[0],
//           op = split[1],
//           b = +split[2];
  
//       // Проверка наличия оператора и числовых значений a и b
//       if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//         return NaN; // Возвращаем NaN, если операция невозможна
//       }
  
//       // Выполняем математическую операцию с помощью соответствующего метода
//       return this.methods[op](a, b);
//     };
  
//     // Метод для добавления новых методов (операций)
//     this.addMethod = function(name, func) {
//       this.methods[name] = func; // Добавляем новый метод в объект methods
//     };
//   }


//   // Создаем новый экземпляр калькулятора
// let calc = new Calculator();

// // Добавляем новый метод (умножение)
// calc.addMethod("*", (a, b) => a * b);

// // Выполняем вычисления с помощью калькулятора
// console.log(calc.calculate("5 + 3")); // Output: 8
// console.log(calc.calculate("10 - 4")); // Output: 6
// console.log(calc.calculate("2 * 6")); // Output: 12
// console.log(calc.calculate("8 / 2")); // Output: NaN (деление не определено)
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// let arr = [5, 3, 8, 1];

// function filterRangeInPlace(arr, a, b) {
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < a || arr[i] > b) {
//             arr.splice(i, 1); // Удаляем элемент, не соответствующий диапазону
//             i--; // Возвращаемся на одну позицию назад, чтобы проверить новый элемент на этом же индексе
//         }
//     }
//     return arr; // Необязательно, так как массив изменяется по месту
// }

// let filtered = filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

// alert(filtered); // Выведет: 3,1
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






/////////////////////////////////////////////////////
// let user = [{ name: "Вася", age: 25 },
//             { name: "Петя", age: 30 },
//             { name: "Маша", age: 28 }]



// let names = user.map(item => {
//   return item.name;
// })

// alert( names );
///////////////////////////////////////////////////////





////////////////////////////////////////////////////////////////////////////////////////
// let user = [{ name: "Вася", surname: "Пупкин", id: 1 },
//             { name: "Петя", surname: "Иванов", id: 2 },
//             { name: "Маша", surname: "Петрова", id: 3 }]


// let usersMapped = user.map(item => {
//   return {fullName: `${item.name} ${item.surname}`, id: item.id};
// })

// alert( usersMapped[0].id );
// alert( usersMapped[0].fullName );
//////////////////////////////////////////////////////////////////////////////////////




////////////////////////////////////////////////////////////////////////////////////////////
// let users = [{ name: "Вася", age: 25 },
//             { name: "Петя", age: 30 },
//             { name: "Маша", age: 28 }];


// function sortByAge(arr) {
//   let newArr = arr.map(item => {return item.name});

//   newArr = newArr.sort();

//   return newArr;
// };



// alert(sortByAge(users));

// alert(users[0].name); 
// alert(users[1].name); 
// alert(users[2].name);
////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////
// function shuffle(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     let j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
// }

// // подсчёт вероятности для всех возможных вариантов
// let count = {
//   '123': 0,
//   '132': 0,
//   '213': 0,
//   '231': 0,
//   '321': 0,
//   '312': 0
// };

// for (let i = 0; i < 1000000; i++) {
//   let array = [1, 2, 3];
//   shuffle(array);
//   count[array.join('')]++;
// }

// // показать количество всех возможных вариантов
// for (let key in count) {
//   alert(`${key}: ${count[key]}`);
// }
//////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////////
// let user = [{ name: "Вася", age: 25 },
//             { name: "Петя", age: 30 },
//             { name: "Маша", age: 28 }]


// function getAverageAge(users) {
//   let newArr = users.map(item => {
//     return item.age
//   });

//   let sum = newArr.reduce((acc, item)=> acc + item, 0);

//   let zahl = sum / newArr.length;

//   return zahl;
// }

// alert( getAverageAge(user) );
/////////////////////////////////////////////////////////////////////////////////





///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const library = [
//   { id: 1, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951, genres: ['Novel', 'Coming-of-age'], rating: 4.1 },
//   { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, genres: ['Novel', 'Southern Gothic', 'Bildungsroman'], rating: 4.3 },
//   { id: 3, title: '1984', author: 'George Orwell', year: 1949, genres: ['Dystopian', 'Political fiction', 'Social science fiction'], rating: 4.2 },
//   { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813, genres: ['Novel', 'Romance'], rating: 4.4 },
//   { id: 5, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, genres: ['Novel', 'Tragedy'], rating: 3.9 },
//   { id: 6, title: 'Brave New World', author: 'Aldous Huxley', year: 1932, genres: ['Dystopian', 'Science fiction'], rating: 4.0 },
//   // ... добавьте еще несколько книг для полноты картины
// ];


// function addBook(updateLibriry) {
//   let bookTitle, bookAuthor, bookYear, bookGenre, bookRating;
  
//   const userInput = prompt('Введите значения, разделенные запятыми:', bookTitle, bookAuthor, bookYear, bookGenre, bookRating);

//   const values = userInput.split(',').map(value => value.trim());


//   return updateLibriry.push({ id: updateLibriry.length + 1, title: values[0], author: values[1], year: values[2],
//                                genres: values[3], rating: values[4] });

// }

// console.log(addBook(library));
// console.log(addBook(library));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const library = [
  { id: 1, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951, genres: ['Novel', 'Coming-of-age'], rating: 4.1 },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, genres: ['Novel', 'Southern Gothic', 'Bildungsroman'], rating: 4.3 },
  { id: 3, title: '1984', author: 'George Orwell', year: 1949, genres: ['Dystopian', 'Political fiction', 'Social science fiction'], rating: 4.2 },
  { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', year: 1813, genres: ['Novel', 'Romance'], rating: 4.4 },
  { id: 5, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, genres: ['Novel', 'Tragedy'], rating: 3.9 },
  { id: 6, title: 'Brave New World', author: 'Aldous Huxley', year: 1932, genres: ['Dystopian', 'Science fiction'], rating: 4.0 },
  // ... добавьте еще несколько книг для полноты картины
];

function addBook(updateLibrary) {
  const userInput = prompt('Введите значения (заголовок, автор, год, жанры через запятую, рейтинг) через запятую:');
  const values = userInput.split(',').map(value => value.trim());

  if (values.length < 5) {
    alert('Некорректный ввод. Пожалуйста, введите все значения.');
    return;
  }

  // Корректное разделение строки с жанрами по запятой и удаление лишних пробелов
  const genresString = values.slice(3, values.length - 1).join(',');  // Соединяем все жанры обратно
  const genres = genresString.split(',').map(genre => genre.trim());

  // Проверка на корректность разделения жанров
  console.log('Жанры:', genres);

  const newBook = {
    id: updateLibrary.length + 1,
    title: values[0],
    author: values[1],
    year: parseInt(values[2], 10),
    genres: genres,
    rating: parseFloat(values[values.length - 1])
  };

  return updateLibrary.push(newBook);
}




function deleteBook(updateLibrary) {
  let deleteObj = +prompt('Выберите id для удаления:', updateLibrary.length);
  
  
  updateLibrary.filter(item => {
    if(item.id === deleteObj) return updateLibrary.splice(item.id - 1, 1);
    
  });

  return updateLibrary;
}



function findBooksByGenre(updateLibrary) {
  let findGenre = prompt('Введите искомый жанр:');

  console.log(updateLibrary.filter(item => item.genres.includes(findGenre)));

  return updateLibrary;
}


function getAverageRating(updateLibrary) {
  let sumRating = updateLibrary.reduce((acc, bookRating) => acc + bookRating.rating, 0);
  let middleRating = sumRating / updateLibrary.length;

  return middleRating.toFixed(2);
}



function updateBook(updateLibrary) {
  let enterId = +prompt('Введите id:', updateLibrary.length);

  let element = updateLibrary.find(item => {
          if(item.id === enterId) return updateLibrary.indexOf(item.id - 1);
  });

  let updateObj = prompt('Введите элементы для изменения:');
  let newValues = updateObj.split(',').map(value => value.trim());

  let newGenresString = newValues.slice(3, newValues.length - 1).join(',');  
  let newGenres = newGenresString.split(',').map(genre => genre.trim());

  Object.assign(element, {
    id: element.id,
    title: newValues[0],
    author: newValues[1],
    year: parseInt(newValues[2], 10),
    genres: newGenres,
    rating: parseFloat(newValues[newValues.length - 1])
  });

  return updateLibrary;
}


function sortBooksByYear(updateLibrary) {
  // let rise;
  // let down;
  let sortBooks = prompt('Выберите по возрастанию или по убыванию:');
  let sortValues = sortBooks.split(',').map(sortValue => sortValue.trim());


  if(sortValues[0] === '+'){
    updateLibrary.sort((a, b) => {return a.year - b.year});
  } else if(sortValues[0] === '-') updateLibrary.sort((a, b) => {return b.year - a.year});
  
  

  return updateLibrary;
}




 function libraryMenu(updateLibrary) {


//   let selectFunc = prompt(`a. Добавить книгу
// b. Удалить книгу
// c. Найти книги по жанру
// d. Получить средний рейтинг книг
// e. Обновить данные о книге
// f. Отсортировать книги по году издания
// g. Выход`);

  
     switch (selectFunc) {
       case 'a':
         addBook(updateLibrary);
         break;
       case 'b':
         deleteBook(updateLibrary);
         break;
       case 'c':
         findBooksByGenre(updateLibrary);
         break;
       case 'd':
         getAverageRating(updateLibrary);
         break;
       case 'e':
         updateBook(updateLibrary);
         break;
       case 'f':
         sortBooksByYear(updateLibrary);
         break;
     }
  
     if (selectFunc === 'g') return updateLibrary;

   return updateLibrary;
}


 console.log(libraryMenu(library));



function handleMultipleActions(actionsString, updateLibrary) {
  const actions = actionsString.split(',').map(action => action.trim());
  
  actions.forEach(action => {
      switch (action) {
          case 'add':
              addBook(updateLibrary);
              break;
          case 'delete':
              deleteBook(updateLibrary);
              break;
          case 'find':
              findBooksByGenre(updateLibrary);
              break;
          case 'average':
              getAverageRating(updateLibrary);
              break;
          case 'update':
              updateBook(updateLibrary);
              break;
          case 'sort':
              sortBooksByYear(updateLibrary);
              break;
          case 'exit':
              exitMenu(updateLibrary);
              break;
          default:
              console.log(`Неизвестная команда: ${action}`);
              break;
      }
  });
}

function libraryMenu(updateLibrary) {
  let exit = false;
  
  while (!exit) {
      const actionsString = prompt(`
          Введите действия, которые хотите выполнить (разделите запятыми):
          - add (добавить книгу)
          - delete (удалить книгу)
          - find (найти книги по жанру)
          - average (получить средний рейтинг книг)
          - update (обновить данные о книге)
          - sort (отсортировать книги по году издания)
          - exit (выход из меню)
      `);

      if(actionsString === null) return updateLibrary;

      handleMultipleActions(actionsString, updateLibrary);
  }

  return updateLibrary;
}

// Запуск меню
console.log(libraryMenu(library));




//                                                     6


// let range = {
//   from: 1,
//   to: 5
// };

// // 1. вызов for..of сначала вызывает эту функцию
// range[Symbol.iterator] = function() {

//   // ...она возвращает объект итератора:
//   // 2. Далее, for..of работает только с этим итератором,
//   // запрашивая у него новые значения
//   return {
//     current: this.from,
//     last: this.to,

//     // 3. next() вызывается на каждой итерации цикла for..of
//     next() {
//       // 4. он должен вернуть значение в виде объекта {done:.., value :...}
//       if (this.current <= this.last) {
//         return { done: false, value: this.current++ };
//       } else {
//         return { done: true };
//       }
//     }
//   };
// };

// // теперь работает!
// for (let num of range) {
//   alert(num); // 1, затем 2, 3, 4, 5
// }





// let range = {
//   from: 1,
//   to: 5,

//   [Symbol.iterator]() {
//     this.current = this.from;
//     return this;
//   },

//   next() {
//     if (this.current <= this.to) {
//       return { done: false, value: this.current++ };
//     } else {
//       return { done: true };
//     }
//   }
// };

// for (let num of range) {
//   alert(num); // 1, затем 2, 3, 4, 5
// }





// let str = "Hello";

// // делает то же самое, что и
// // for (let char of str) alert(char);

// let iterator = str[Symbol.iterator]();

// while (true) {
//   let result = iterator.next();
//   if (result.done) break;
//   alert(result.value); // выводит символы один за другим
// }







//                                                          7




// let john = { name: 'John' };

//   // давайте сохраним количество посещений для каждого пользователя
//   let visitsCountMap = new Map();

//   // объект john - это ключ для значения в объекте Map
//   visitsCountMap.set(john, 123);

//   alert(visitsCountMap.get(john)); // 123



/////////////////////////////////////////////////////////////////////////////////
// let values = ["Hare", "Krishna", "Hare", "Krishna",
//   "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];



// function unique(arr) {
//   let set = new Set(arr);

  
//   set.forEach((value, valueAgain, set) => {
//           set = value;
//   });

//   return set;
  
// }

// console.log(unique(values));



// let values = ["Hare", "Krishna", "Hare", "Krishna",
//      "Krishna", "Krishna", "Hare", "Hare", ":-O"
//    ];
  

// function unique(arr) {
//   return Array.from(new Set(arr));
// }

// console.log(unique(values));

////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////////
// function aclean(arr) {
//   let map = new Map();

//   for (let word of arr) {
//     // разбиваем слово на буквы, сортируем и объединяем снова в строку
//     let sorted = word.toLowerCase().split("").sort().join(""); // (*)
//     map.set(sorted, word);
//   }

//   return Array.from(map.values());
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) );
/////////////////////////////////////////////////////////////////////////////////////////


// function wordFrequency(text) {
//   // Преобразуем все символы к нижнему регистру и удаляем знаки препинания
//   text = text.toLowerCase().replace(/[^\w\s]/g, '');
  
//   // Разделяем текст на слова
//   let words = text.split(/\s+/);
  
//   // Создаем Map для хранения частоты слов
//   let freqMap = new Map();
  
//   // Перебираем каждое слово и увеличиваем его частоту в Map
//   words.forEach(word => {
//     let count = freqMap.get(word) || 0;
//     freqMap.set(word, count + 1);
//   });
  
//   return freqMap;
// }

// let text = "Hello, hello! How are you? I hope you are doing well. Hello!";
// console.log(wordFrequency(text));





// function uniqueElements(arr1, arr2) {
  
//   let newBigArr = arr1.concat(arr2);

//   let freqMap = new Map();

//   newBigArr.forEach(zahl => {
//         let count = freqMap.get(zahl) || 0;
//         freqMap.set(zahl, count + 1);
//       });

//       let result = [];
//   freqMap.forEach((count, zahl) => {
//     if (count === 1) {
//       result.push(zahl);
//     }
//   });


//   return result;


// }

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [4, 5, 6, 7, 8];

// console.log(uniqueElements(arr1, arr2));








////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// function intersection(setA, setB) {
//   let newBigArr = Array.from(setA).concat(Array.from(setB));

//   let freqMap = new Map();

//   let newFreqMap;
//   newBigArr.forEach(zahl => {
//              let count = freqMap.get(zahl) || 0;
//              freqMap.set(zahl, count + 1);       
//     });

//     newFreqMap = new Set(freqMap);

//     let againMap = new Map(Array.from(newFreqMap).filter(([key, value]) => value === 2));

    

//   return againMap;
  
// }

// let setA = new Set([1, 2, 3, 4]);
// let setB = new Set([3, 4, 5, 6]);
// console.log(intersection(setA, setB)); // Set { 3, 4 }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






// function groupByAge(persons) {
//   let newArr = new Map(Array.from(persons).sort((a, b) => a.age - b.age).map(([key, value]) => {return {age: key.name}}));

  



//   return newArr;
// }

// let persons = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 30 },
//   { name: 'Dave', age: 30 },
//   { name: 'Eve', age: 35 }
// ];
// console.log(groupByAge(persons));




// function groupByAge(persons) {
//   let ageMap = new Map();

//   persons.forEach(person => {
//     if (!ageMap.has(person.age)) {
//       ageMap.set(person.age, []);
//     }
//     ageMap.get(person.age).push(person.name);
//   });

//   return ageMap;
// }

// let persons = [
//   { name: 'Alice', age: 25 },
//   { name: 'Bob', age: 25 },
//   { name: 'Charlie', age: 30 },
//   { name: 'Dave', age: 30 },
//   { name: 'Eve', age: 35 }
// ];

// console.log(groupByAge(persons));




////////////////////////////////////////////////////////////////////////
// let newMap = [];

// function registerBook() {
//   let access = 'available'

//   let enterBook = prompt('Введите название книги:', access);
//   let valuesBook = enterBook.split(',').map(value => value.trim());

//   let addArr = [valuesBook[0], valuesBook[1]];

//   newMap.push(addArr);

//   let againMap = new Map(newMap);

//   return  againMap;
// }

// console.log(registerBook());
// console.log(registerBook());
// console.log(newMap);



// function borrowBook(newMap) {
//   let map = new Map(newMap); 

//   let key = prompt('Введите ключ:');
//   let value = prompt('Введите значение:');

//   if (map.has(key)) {
//     if (map.get(key) === value ) {
//       map.set(key, 'borrowed');
//     }
//   }

//   return map;
// }


// console.log(borrowBook(newMap));


// function borrowBook(newMap) {
//   let map = new Map(newMap); 

//   let keyName = prompt('Введите ключ:');

//   if(map.has(keyName)){
//     map.set(keyName, 'available');
//   }

//   return map;
// }

// console.log(borrowBook(newMap));

// function manageBooks() {
//   // Создаем начальный объект Map для хранения книг
//   let map = new Map();

//   while (true) {
//     // Запрашиваем у пользователя действие
//     let action = prompt('Выберите действие: \n1. Регистрация книги \n2. Выдача книги \n3. Возврат книги \n4. Завершить работу');

//     // Проверяем, выбрал ли пользователь завершение работы
//     if (action === '4') {
//       console.log('Работа завершена.');
//       break;
//     }

//     // Запрашиваем название книги
//     let keyName = prompt('Введите название книги:');

//     switch (action) {
//       case '1': // Регистрация книги
//         // Проверяем, если книга уже существует, сообщаем об этом
//         if (map.has(keyName)) {
//           console.log(`Книга "${keyName}" уже зарегистрирована.`);
//         } else {
//           // Регистрируем новую книгу как доступную
//           map.set(keyName, 'available');
//           console.log(`Книга "${keyName}" зарегистрирована.`);
//         }
//         break;
//       case '2': // Выдача книги
//         // Проверяем, существует ли книга и доступна ли она
//         if (map.has(keyName)) {
//           if (map.get(keyName) === 'available') {
//             map.set(keyName, 'borrowed');
//             console.log(`Книга "${keyName}" выдана.`);
//           } else {
//             console.log(`Книга "${keyName}" уже выдана.`);
//           }
//         } else {
//           console.log(`Книга с названием "${keyName}" не найдена.`);
//         }
//         break;
//       case '3': // Возврат книги
//         // Проверяем, существует ли книга и была ли она выдана
//         if (map.has(keyName)) {
//           if (map.get(keyName) === 'borrowed') {
//             map.set(keyName, 'available');
//             console.log(`Книга "${keyName}" возвращена.`);
//           } else {
//             console.log(`Книга "${keyName}" не была выдана.`);
//           }
//         } else {
//           console.log(`Книга с названием "${keyName}" не найдена.`);
//         }
//         break;
//       default:
//         console.log('Неверный выбор. Попробуйте снова.');
//     }
//   }

//   // Выводим финальное состояние библиотеки
//   console.log('Состояние библиотеки:');
//   for (let [key, value] of map) {
//     console.log(`"${key}": ${value}`);
//   }
// }

// // Вызов функции для запуска
// manageBooks();




// let tasks = new Map();
// let categories = new Set();
// let nextId = 1;

// function addTask() {
//   let title = prompt('Введите название задачи:');
//   let category = prompt('Введите категорию задачи:');
//   let completed = prompt('Завершена ли задача? (да/нет)') === 'да';
  
//   let id = nextId++;
//   tasks.set(id, { title, category, completed });
//   categories.add(category);
//   console.log(`Задача "${title}" добавлена.`);
// }

// function markTaskAsCompleted() {
//   let id = parseInt(prompt('Введите идентификатор задачи, которую нужно пометить как выполненную:'), 10);
//   if (tasks.has(id)) {
//     let task = tasks.get(id);
//     task.completed = true;
//     console.log(`Задача "${task.title}" помечена как выполненная.`);
//   } else {
//     console.log('Задача с таким идентификатором не найдена.');
//   }
// }

// function deleteTask() {
//   let id = parseInt(prompt('Введите идентификатор задачи для удаления:'), 10);
//   if (tasks.has(id)) {
//     let task = tasks.get(id);
//     categories.delete(task.category);
//     tasks.delete(id);
//     console.log('Задача удалена.');
//   } else {
//     console.log('Задача с таким идентификатором не найдена.');
//   }
// }

// function viewTasks() {
//   console.log('Список задач:');
//   tasks.forEach((task, id) => {
//     console.log(`ID: ${id}, Название: ${task.title}, Категория: ${task.category}, Выполнена: ${task.completed ? 'Да' : 'Нет'}`);
//   });
// }

// function viewCategories() {
//   console.log('Категории задач:');
//   categories.forEach(category => {
//     console.log(category);
//   });
// }

// // Пример использования
// addTask();
// markTaskAsCompleted();
// deleteTask();
// viewTasks();
// viewCategories();



/////////////////////////////////////////////////////////////////////////////////////////////////
// let user1 = { name: "Alice" };
// let user2 = { name: "Bob" };
// let subscription1 = { service: "Music" };
// let subscription2 = { service: "Video" };


// let newAddSubscription = new WeakMap();

// function addSubscription(user, subscription) {
//   if(!newAddSubscription.has(user, subscription) || !newAddSubscription.has(subscription)) {
//     let newArrObj = [];
//     newArrObj.push(subscription)
//     newAddSubscription.set(user, newArrObj);
//   }

//   return newAddSubscription;
// }

// console.log(addSubscription(user1, subscription1));
// console.log(addSubscription(user1, subscription2));
// console.log(addSubscription(user2, subscription1));



// let user1 = { name: "Alice" };
// let user2 = { name: "Bob" };
// let subscription1 = { service: "Music" };
// let subscription2 = { service: "Video" };

// let subscriptions = new WeakMap();

// function addSubscription(user, subscription) {
//   if (!subscriptions.has(user)) {
//     subscriptions.set(user, []);
//   }
//   subscriptions.get(user).push(subscription);
//   return subscriptions;
// }

// console.log(addSubscription(user1, subscription1));
// console.log(addSubscription(user1, subscription2));
// console.log(addSubscription(user2, subscription1));



// function removeSubscription(user, subscription) {
//   if(subscriptions.has(user)) {
//       subscriptions.delete(user, subscription);
    
//   }

//   return subscriptions;
// }

// console.log(removeSubscription(user1, subscription1));



// function removeSubscription(user, subscription) {
//   if (subscriptions.has(user)) {
//     let userSubscriptions = subscriptions.get(user);
//     let index = userSubscriptions.indexOf(subscription);
//     if (index !== -1) {
//       userSubscriptions.splice(index, 1);
//     }
//     if (userSubscriptions.length === 0) {
//       subscriptions.delete(user);
//     }
//   }
//   return subscriptions;
// }

// console.log(removeSubscription(user1, subscription1));

// function hasSubscription(user, subscription) {
//   if (subscriptions.get(user).includes(subscription)) {
//     console.log('подписка существует');
//   } else {
//     console.log('подписка не найдена');
//   }
// }

// console.log(hasSubscription(user2, subscription1));
///////////////////////////////////////////////////////////////////////////////////////


// let reader1 = { name: "Alice" };
// let reader2 = { name: "Bob" };
// let book1 = { title: "1984" };
// let book2 = { title: "Brave New World" };
// let book3 = { title: "Fahrenheit 451" };

// let addBookAndReader = new WeakMap();
// let addReader = new WeakSet();
// let addArrBooks = [{ title: "1984" }, 
//                    { title: "Brave New World" }, 
//                    { title: "Fahrenheit 451" }];


// function addBook(reader, book) {
//   if(!addBookAndReader.has(reader)) {
//     let add = [];
//     addBookAndReader.set(reader, add);
//   }

//   addBookAndReader.get(reader).push(book);

//   return addBookAndReader;
// }

// console.log(addBook(reader1, book1));
// console.log(addBook(reader1, book2));
// console.log(addBook(reader2, book3));


// function removeBook(reader, book) {
//   if(addBookAndReader.has(reader)){
//     let i = addBookAndReader.get(reader);
//     let newI = i.indexOf(book);
//     i.splice(newI, 1)
//   }
    
//   return addBookAndReader;
// }

// console.log(removeBook(reader1, book2));


// function hasBook(reader, book) {
//   if(addBookAndReader.has(reader)){
//     let i = addBookAndReader.get(reader);
//       if(i.includes(book)) {
//         console.log('Книга существует');
//         return true;
//       } else {
//         console.log('Книга не существует');
//         return false;
//       }
    
//   }
// }

// console.log(hasBook(reader1, book2));


// function addActiveReader(reader){
//   return addReader.add(reader);
// }

// console.log(addActiveReader(reader1));
// console.log(addActiveReader(reader2));

// function removeActiveReader(reader){
//   return addReader.delete(reader);
// }

// console.log(removeActiveReader(reader1));


// function isActiveReader(reader){
//   return addReader.has(reader) ? 
//           console.log(`${reader} является активным пользователем`) : 
//           console.log(`пользователь не найден или не является активным`);
// }

// console.log(isActiveReader(reader1));


// function addBookGroup(reader, books) {
//   if(!addBookAndReader.has(reader)){
//     addBookAndReader.set(reader, []);
//   }
  
//   addBookAndReader.get(reader).push(books)

//   return addBookAndReader;
// }

// console.log(addBookGroup(reader2, addArrBooks));


// // function removeBookGroup(reader, books) {
// //   let b = addBookAndReader.get(reader);

// //   b.splice(Array.isArray(books), 1);

// //   return addBookAndReader;
// // }

// function removeBookGroup(reader, books) {
//   books.forEach(book => removeBook(reader, book));

//   return addBookAndReader;
// }

// console.log(removeBookGroup(reader2, addArrBooks));




//                                                           9

/////////////////////////////////////////////////////
// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };



// function sumSalaries(salaries) {
//   let sum = 0;

//   for (let value of Object.values(salaries)) {
//     sum += value;
//   }

//   return sum;

// }

//console.log(sumSalaries(salaries));
///////////////////////////////////////////////////




// let user = {
//   name: 'John',
//   age: 30
// };


// function count(obj) {
//   // let newObj = Object.entries(obj);

//   // return newObj.length

//   return Object.entries(obj).length;
// }

// console.log(count(user));





//                                                      10

////////////////////////////////////////////////////////
// let user = {
//   name: "John",
//   years: 30
// };

// let {name, years: age, isAdmin = false} = user;

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false
///////////////////////////////////////////////////////




// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };


// function topSalary(salaries){
//   let newKey;
//   let result = 0;
//   for(let [key, value] of Object.entries(salaries)) {
    
//     if(result < value) {
//       result = value;
//       newKey = key;
//     }
//   }

//   return newKey;
// }

// console.log(topSalary(salaries));



// function topSalary(salaries) {
//   let topPaid = null;
//   let maxSalary = 0;

//   for (let [name, salary] of Object.entries(salaries)) {
//     if (maxSalary < salary) {
//       maxSalary = salary;
//       topPaid = name;
//     }
//   }

//   return topPaid;
// }

// console.log(topSalary(salaries));


// function getNestedValue(obj, path) {
//   return path.reduce((acc, key) => {
//     if (acc && typeof acc === 'object' && key in acc) {
//       return acc[key];
//     } else {
//       return undefined;
//     }
//   }, obj);
// }

// const obj = {
//   a: {
//     b: {
//       c: 42
//     }
//   }
// };

// console.log(getNestedValue(obj, ['a', 'b', 'c'])); // 42




// function mergeObjects(obj1, obj2) {
//   return { ...obj1, ...obj2 };
// }

// // Пример использования:
// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };

// console.log(mergeObjects(obj1, obj2)); // { a: 1, b: 3, c: 4 }



// const user = { firstName: 'John', age: 30 };


// function processUserData({firstName: name, age = 'Unknown age'}) {
  
//   return {name: name !== 'Unknown' ? name : 'Unknown', age: `${age} years old`};

// }


// console.log(processUserData(user));




// function processUserData(user) {
//   const {
//     firstName: name = 'Unknown',
//     age = 'Unknown age',
//     ...rest
//   } = user;

//   return {
//     name: name !== 'Unknown' ? name : 'Unknown',
//     age: typeof age === 'number' ? `${age} years old` : age,
//     ...rest
//   };
// }

// // Пример использования:
// const user = { firstName: 'John', age: 30 };
// console.log(processUserData(user)); // { name: 'John', age: '30 years old' }

// const userWithoutAge = { firstName: 'Jane' };
// console.log(processUserData(userWithoutAge)); // { name: 'Jane', age: 'Unknown age' }

// const userWithoutFirstName = { age: 25 };
// console.log(processUserData(userWithoutFirstName)); // { name: 'Unknown', age: '25 years old' }



//                                         11

// let date = new Date();
// date.setSeconds(date.getSeconds() + 70);

// alert( date );


// let start = Date.now(); // количество миллисекунд с 1 января 1970 года

// // выполняем некоторые действия
// for (let i = 0; i < 100000; i++) {
//   let doSomething = i * i * i;
// }

// let end = Date.now(); // заканчиваем отсчёт времени

// alert( `Цикл отработал за ${end - start} миллисекунд` );



// function diffSubtract(date1, date2) {
//   return date2 - date1;
// }

// function diffGetTime(date1, date2) {
//   return date2.getTime() - date1.getTime();
// }

// function bench(f) {
//   let date1 = new Date();
//   let date2 = new Date();

//   let start = Date.now();
//   for (let i = 0; i < 100000; i++) f(date1, date2);
//   return Date.now() - start;
// }

// alert( 'Время diffSubtract: ' + bench(diffSubtract) + 'мс' );
// alert( 'Время diffGetTime: ' + bench(diffGetTime) + 'мс' );





////////////////////////////////////////////////
// let date = new Date(2012, 1, 20, 3, 12);

// alert(date);
////////////////////////////////////////////////


////////////////////////////////////////////////
// let date = new Date(2012, 0, 3);  

// function getWeekDay(date) {
//   let day = date.getDay();

//   switch (day) {
//     case 0:
//       return 'ВС';
//     case 1:
//       return 'ПН';
//     case 2:
//       return 'ВТ';
//     case 3:
//       return 'СР';
//     case 4:
//       return 'ЧТ';
//     case 5:
//       return 'ПТ';
//     case 6:
//       return 'СБ';
//   }
// }


// alert( getWeekDay(date) ); 
//////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////
// function getWeekDay(date) {
//   let days = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];

//   return days[date.getDay() - 1];
// }

// function getLocalDay(date) {

//   let day = date.getDay();

//   if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
//     day = 7;
//   }

//   return day;
// }

// let date = new Date(2012, 0, 3);
// alert( getLocalDay(date) ); // ПТ
////////////////////////////////////////////////////////////////////////





/////////////////////////////////////////////////////////////
// let date = new Date(2015, 0, 2);

// function getDateAgo(date, days) {
//   date.setDate(date.getDate() - days);
//   return date.getDate();
// }

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)
////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////
// function getLastDayOfMonth(year, month) {
//   let date = new Date();

//   date.setFullYear(year, month + 1, 0);

//   return date.getDate();
// }

// alert(getLastDayOfMonth(2012, 1));
////////////////////////////////////////////////////////////



// let date = new Date();

// function getSecondsToday() {
//   return date.getHours() * date.getSeconds() * date.getMinutes() * date.getMilliseconds()  * 3600;
// }

// alert(getSecondsToday());


// function getSecondsToday() {
//   let now = new Date(); // Создаем новый объект Date для текущего времени
//   let startOfDay = new Date(now.getFullYear(), now.getMonth(), now.getDate()); // Создаем объект Date для начала текущего дня
//   let secondsToday = Math.floor((now - startOfDay) / 1000); // Разница в миллисекундах, деленная на 1000, чтобы получить секунды
//   return secondsToday;
// }

// alert(getSecondsToday());



//////////////////////////////////////////////////////////////////////////////
// function getSecondsToday() {
//   let now = new Date();

//   // создаём объект с текущими днём/месяцем/годом
//   let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());

//   let diff = now - today; // разница в миллисекундах
//   return Math.round(diff / 1000); // получаем секунды
// }

// alert(getSecondsToday());
/////////////////////////////////////////////////////////////////////////////




/////////////////////////////////////////////////////////////////////////////////
// function getSecondsToTomorrow() {
//   let now = new Date();
//   let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  
//   // Создаем объект Date для начала завтрашнего дня
//   let tomorrow = new Date(today);
//   tomorrow.setDate(today.getDate() + 1);

//   let diff = tomorrow - now; // разница в миллисекундах
//   return Math.floor(diff / 1000); // преобразуем в секунды и округляем вниз
// }

// alert(getSecondsToTomorrow());
//////////////////////////////////////////////////////////////////////////////////







// function formatDate(date) {
//   let diff = new Date() - date; // разница в миллисекундах

//   if (diff < 1000) { // меньше 1 секунды
//     return 'прямо сейчас';
//   }

//   let sec = Math.floor(diff / 1000); // преобразовать разницу в секунды

//   if (sec < 60) {
//     return sec + ' сек. назад';
//   }

//   let min = Math.floor(diff / 60000); // преобразовать разницу в минуты
//   if (min < 60) {
//     return min + ' мин. назад';
//   }

//   // отформатировать дату
//   // добавить ведущие нули к единственной цифре дню/месяцу/часам/минутам
//   let d = date;
//   d = [
//     '0' + d.getDate(),
//     '0' + (d.getMonth() + 1),
//     '' + d.getFullYear(),
//     '0' + d.getHours(),
//     '0' + d.getMinutes()
//   ].map(component => component.slice(-2)); // взять последние 2 цифры из каждой компоненты

//   // соединить компоненты в дату
//   return d.slice(0, 3).join('.') + ' ' + d.slice(3).join(':');
// }

// alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

// // вчерашняя дата вроде 31.12.2016, 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );




// function AdvancedCalculator() {
//   this.operations = {};

//   this.calculate = function(expression) {
//     let newExpression = expression.split(' ');

//     let num1 = +newExpression[0];
//     let op = newExpression[1];
//     let num2 = +newExpression[2];

//     switch (op) {
//       case '+':
//         return num1 + num2
//       case '-':
//         return num1 - num2;
//       case '*':
//         return num1 * num2;
//       case '/':
//         return num1 / num2;
//       case '**':
//         return num1 ** num2;
//       default:
//         console.log(`Неизвестный символ: ${op}`);
//     }

//     return  this.operations[op](num1, num2);
//   }

//   this.addOperation = function(operator, func) {
//     this.operations[operator] = func;
//   };
// }

// let advancedCalc = new AdvancedCalculator();




// // console.log(advancedCalc.calculate("10 + 5"));  // 15
// // console.log(advancedCalc.calculate("15 - 3"));  // 12
// // console.log(advancedCalc.calculate("4 * 2"));   // 8
// // console.log(advancedCalc.calculate("20 / 4"));  // 5
// // console.log(advancedCalc.calculate("2 ** 3"));  // 8


// advancedCalc.addOperation("%", (a, b) => a % b);
// advancedCalc.addOperation("&&", (a, b) => a && b);

// console.log(advancedCalc.calculate("10 % 3"));  // 1
// console.log(advancedCalc.calculate("1 && 0")); 



// function AdvancedCalculator() {
//   this.operations = {
//     '+': (a, b) => a + b,
//     '-': (a, b) => a - b,
//     '*': (a, b) => a * b,
//     '/': (a, b) => b !== 0 ? a / b : "Cannot divide by zero",
//     '**': (a, b) => a ** b
//   };

//   this.calculate = function(expression) {
//     let newExpression = expression.split(' ');

//     if (newExpression.length !== 3) {
//       throw new Error("Invalid expression format. It should be 'NUMBER operator NUMBER'");
//     }

//     let num1 = parseFloat(newExpression[0]);
//     let op = newExpression[1];
//     let num2 = parseFloat(newExpression[2]);

//     if (isNaN(num1) || isNaN(num2)) {
//       throw new Error("Invalid number in the expression.");
//     }

//     if (!(op in this.operations)) {
//       throw new Error("Unsupported operator: " + op);
//     }

//     return this.operations[op](num1, num2);
//   };

//   this.addOperation = function(operator, func) {
//     this.operations[operator] = func;
//   };
// }

// let advancedCalc = new AdvancedCalculator();

// // Adding new operations
// advancedCalc.addOperation("%", (a, b) => a % b);
// advancedCalc.addOperation("&&", (a, b) => a && b);

// // Testing the new operations
// console.log(advancedCalc.calculate("10 % 3"));  // 1
// console.log(advancedCalc.calculate("1 && 0"));  // 0





//                                            12





// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   participants: [{name: "John"}, {name: "Alice"}],
//   place: room // meetup ссылается на room
// };

// room.occupiedBy = meetup; // room ссылается на meetup

// alert( JSON.stringify(meetup, ['545455', '87756586']) );
// // {"title":"Conference","participants":[{},{}]}




// let room = {
//   number: 23,
// };

// let meetup = {
//   title: 'Conference',
//   participants: [{ name: 'John' }, { name: 'Alice' }],
//   place: room, // meetup ссылается на room
// };

// room.occupiedBy = meetup; // room ссылается на meetup

// alert(
//   JSON.stringify(meetup, function replacer(key, value) {
//     console.log(`${key}: ${value}`);
//     return key == 'occupiedBy' ? undefined : value;
//   })
// );






//////////////////////////////////////////////////////
// let user = {
//   name: "Василий Иванович",
//   age: 35
// };


// user = JSON.stringify(user);

// user = JSON.parse(user);

// console.log(user);
/////////////////////////////////////////////////////




// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Совещание",
//   occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//   place: room
// };

// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;

// alert( JSON.stringify(meetup, function replacer(key, value) {
//   return (key != "" && value == meetup) ? undefined : value;
// }));




// let project = {
//   name: "AI Research",
//   team: [{name: "John"}, {name: "Jane"}],
//   details: {
//     location: "San Francisco",
//     leader: null,

//     // toJSON() {
//     //   return {location: this.location, leader: this.leader};
//     // }
//   }
// };

// // Устанавливаем ссылки, создающие циклическую зависимость
// project.details.leader = project;
// project.team.push(project);

// alert(JSON.stringify(project, function replacer(key, value) {
//     return (key != "" && value == project) ? undefined : value;
// }));




// let project = {
//   name: "AI Research",
//   team: [{name: "John"}, {name: "Jane"}],
//   details: {
//     location: "San Francisco",
//     leader: null
//   }
// };

// // Устанавливаем ссылки, создающие циклическую зависимость
// project.details.leader = project;
// project.team.push(project);

// function replacer(key, value) {
//   // Используем набор для отслеживания уже увиденных объектов
//   const seen = new Set();
  
//   return function(key, value) {
//     // Если значение является объектом и не является null
//     if (value && typeof value === 'object') {
//       // Если объект уже был увиден, возвращаем undefined
//       if (seen.has(value)) {
//         return undefined;
//       }
//       // Добавляем объект в набор
//       seen.add(value);
//     }
//     // Если значение ссылается на project, возвращаем undefined
//     if (value === project) {
//       return undefined;
//     }
//     return value;
//   }
// }

// alert(JSON.stringify(project, replacer()));





// function pow(x, n) {
//   let result = 1;

//   // умножаем result на x n раз в цикле
//   for (let i = 0; i < n; i++) {
//     result *= x;
//   }

//   return result;
// }

// alert( pow(2, 3) ); // 8




// function pow(x, n) {
//   if (n == 1) {
//     return x;
//   } else {
//     return x * pow(x, n - 1);
//   }
// }

// alert( pow(2, 3) ); // 8




// Функция для загрузки JSON данных из файла
// async function loadJSON(filePath) {
//   const response = await fetch(filePath);
//   const data = await response.json();
//   return data;
// }

// // Функция для сохранения JSON данных в файл
// function saveJSON(data, filePath) {
//   const jsonString = JSON.stringify(data, null, 2);
//   const blob = new Blob([jsonString], { type: 'application/json' });
//   const url = URL.createObjectURL(blob);
//   const a = document.createElement('a');
//   a.href = url;
//   a.download = filePath;
//   a.click();
//   URL.revokeObjectURL(url);
// }

// // Функция для обработки данных
// function processData(data) {
//   const monthlySales = {};

//   data.forEach(sale => {
//       const date = new Date(sale.date);
//       const month = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;

//       if (!monthlySales[month]) {
//           monthlySales[month] = {
//               total_sales: 0,
//               total_amount: 0,
//               count: 0
//           };
//       }

//       monthlySales[month].total_sales += sale.total_amount;
//       monthlySales[month].total_amount += sale.total_amount;
//       monthlySales[month].count += 1;
//   });

//   const result = Object.entries(monthlySales).map(([month, stats]) => ({
//       month,
//       total_sales: stats.total_sales,
//       average_sale: stats.total_amount / stats.count
//   }));

//   return result;
// }

// // Основная функция
// async function main() {
//   const inputFilePath = 'sales_data.json'; // Путь к входному JSON файлу
//   const outputFilePath = 'monthly_sales_data.json'; // Путь к выходному JSON файлу

//   const data = await loadJSON(inputFilePath);
//   const processedData = processData(data);
//   saveJSON(processedData, outputFilePath);
// }

// // Запуск основной функции
// main();





// function filterAndSortStudents(students, minAge) {
//   return students
//       .filter(student => student.age > minAge)
//       .sort((a, b) => {
//           const avgA = a.grades.reduce((sum, grade) => sum + grade, 0) / a.grades.length;
//           const avgB = b.grades.reduce((sum, grade) => sum + grade, 0) / b.grades.length;
//           return avgB - avgA;
//       });
// }

// const students = [
//   { "name": "Alice", "age": 20, "grades": [85, 90, 78] },
//   { "name": "Bob", "age": 18, "grades": [92, 88, 95] },
//   { "name": "Charlie", "age": 22, "grades": [70, 75, 80] }
// ];

// console.log(filterAndSortStudents(students, 18));


// let newA = [];

// function aggregateSalesByMonth(sales){
//   let a = [];
//   let b = [];
//   let newDateforSales;
//   for (let i = 0; i < sales.length; i++) {
//     a.push(sales[i].date.slice(0, 7));
//     b.push(sales[i].amount);

//    if(!(newA.includes(a[i]))){ 
//       newDateforSales = a[i]; 
//       let sumOfAmount = b.reduce((sum, amo) => sum + amo, 0);
//       return newA.push({newDateforSales: sumOfAmount});
//       };
//   }

// return newA;
// }


// let sales = [
//   { "date": "2023-01-01", "product_id": 1, "amount": 100 },
//   { "date": "2023-01-15", "product_id": 2, "amount": 200 },
//   { "date": "2023-02-01", "product_id": 1, "amount": 150 }
// ];

// console.log(aggregateSalesByMonth(sales));




// function aggregateSalesByMonth(sales) {
//   if (!Array.isArray(sales)) {
//       throw new Error("Sales must be an array");
//   }

//   const result = {};

//   sales.forEach(sale => {
//       if (sale && sale.date && sale.amount) {
//           const month = sale.date.slice(0, 7); // "YYYY-MM"
//           if (!result[month]) {
//               result[month] = 0;
//           }
//           result[month] += sale.amount;
//       }
//   });

//   return result;
// }

// const sales = [
//   { "date": "2023-01-01", "product_id": 1, "amount": 100 },
//   { "date": "2023-01-15", "product_id": 2, "amount": 200 },
//   { "date": "2023-02-01", "product_id": 1, "amount": 150 }
// ];

// console.log(aggregateSalesByMonth(sales));



// let newData = [];

// const data = {
//   "users": [
//       { "id": 1, "name": "Alice" },
//       { "id": 2, "name": "Bob" }
//   ],
//   "orders": [
//       { "order_id": 101, "user_id": 1, "amount": 100 },
//       { "order_id": 102, "user_id": 2, "amount": 200 }
//   ]
// };


// function combineUserData(users, orders) {
//   const userMap = users.reduce((map, user) => {
//       map[user.id] = user.name;
//       return map;
//   }, {});

//   return orders.map(order => ({
//       order_id: order.order_id,
//       user_id: order.user_id,
//       user_name: userMap[order.user_id],
//       amount: order.amount
//   }));
// }

// console.log(combineUserData(data.users, data.orders));





// function aggregateSalesByMonth(sales) {
//   const result = {};

//   for (let i = 0; i < sales.length; i++) {
//       const month = sales[i].date.slice(0, 7); // "YYYY-MM"
//       if (!result[month]) {
//           result[month] = 0;
//       }
//       result[month] += sales[i].amount;
//   }

//   return result;
// }

// const sales = [
//   { "date": "2023-01-01", "product_id": 1, "amount": 100 },
//   { "date": "2023-01-15", "product_id": 2, "amount": 200 },
//   { "date": "2023-02-01", "product_id": 1, "amount": 150 }
// ];

// console.log(aggregateSalesByMonth(sales));




// function combineUserData(users, orders) {
//   const userMap = users.reduce((map, user) => {
//       if (user && user.id && user.name) {
//           map[user.id] = user.name;
//       }
//       return map;
//   }, {});

//   return orders.map(order => {
//       if (order && order.order_id && order.user_id && order.amount) {
//           return {
//               order_id: order.order_id,
//               user_id: order.user_id,
//               user_name: userMap[order.user_id],
//               amount: order.amount
//           };
//       }
//       return null;
//   }).filter(order => order !== null);
// }

// const data = {
//   "users": [
//       { "id": 1, "name": "Alice" },
//       { "id": 2, "name": "Bob" }
//   ],
//   "orders": [
//       { "order_id": 101, "user_id": 1, "amount": 100 },
//       { "order_id": 102, "user_id": 2, "amount": 200 }
//   ]
// };

// console.log(combineUserData(data.users, data.orders));







//                                         1(продвинутая работа с функциями)



// 1                                                1рекурсия и стек




// function pow(x, n) {
//     if (n == 1) {
//       return x;
//     } else {
//       return x * pow(x, n - 1);
//     }
//   }
  
//   alert( pow(2, 3) ); // 8



// let company = {
//     sales: [{
//       name: 'John',
//       salary: 1000
//     }, {
//       name: 'Alice',
//       salary: 600
//     }],
  
//     development: {
//       sites: [{
//         name: 'Peter',
//         salary: 2000
//       }, {
//         name: 'Alex',
//         salary: 1800
//       }],
  
//       internals: [{
//         name: 'Jack',
//         salary: 1300
//       }]
//     }
//   };



//   let company = { // тот же самый объект, сжатый для краткости
//     sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 600 }],
//     development: {
//       sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
//       internals: [{name: 'Jack', salary: 1300}]
//     }
//   };
  
//   // Функция для подсчёта суммы зарплат
//   function sumSalaries(department) {
//     if (Array.isArray(department)) { // случай (1)
//       return department.reduce((prev, current) => prev + current.salary, 0); // сумма элементов массива
//     } else { // случай (2)
//       let sum = 0;
//       for (let subdep of Object.values(department)) {
//         sum += sumSalaries(subdep); // рекурсивно вызывается для подотделов, суммируя результаты
//       }
//       return sum;
//     }
//   }
  
//   alert(sumSalaries(company)); // 6700






// let list = { value: 1 };
// list.next = { value: 2 };
// list.next.next = { value: 3 };
// list.next.next.next = { value: 4 };
// list.next.next.next.next = null;

// // добавление нового элемента в список
// list = { value: "new item", next: list };

// list = list.next.next.next;



// // Создание узлов
// let node1 = { value: 1, next: null, prev: null };
// let node2 = { value: 2, next: null, prev: null };
// let node3 = { value: 3, next: null, prev: null };
// let node4 = { value: 4, next: null, prev: null };

// // Связывание узлов
// node1.next = node2;
// node2.prev = node1;
// node2.next = node3;
// node3.prev = node2;
// node3.next = node4;
// node4.prev = node3;

// // Указатели на начало и конец списка
// let head = node1;
// let tail = node4;

// // Добавление нового элемента в начало
// let newNode = { value: "new item", next: head, prev: null };
// //head.prev = newNode;
// head = newNode;

// // Теперь head указывает на "new item", а tail на 4

// // Пример перемещения назад от конца списка
// let current = tail;
// while (current) {
//   console.log(current.value);
//   current = current.prev;
// }
// // Выведет 4, 3, 2, 1, "new item"







// function sumTo(n) {
//     let result = 0;

//     for (let i = 0; i <= n; i++){
//         result += i;
//     }

//     return result;
// }

// alert( sumTo(100) ); 





// function sumTo(n) {
//     if(n > 1){
//         return n + sumTo(n-1);
//     } else {
//         return n;
//     }

// }

// alert( sumTo(100) ); 




// function sumTo(n) {
//     let result = 0;
//     let arrForProgression = [];
//     for(let i = 0; i <= n; i++){
//         arrForProgression.push(i);
//     }
//     arrForProgression.shift();

//     result = arrForProgression.length / 2 * (arrForProgression[0] + arrForProgression[arrForProgression.length -  1]);

//     return result;
// }

// console.log( sumTo(49) ); 





// function factorial(n) {
//     if (n === 0) return 1;
//     return (n == 1) ? 1 : (n * factorial(n - 1))
// }

// console.log(factorial(10));



// function fib(n) {
//     let a = 1;
//     let b = 1;
//     for (let i = 3; i <= n; i++) {
//       let c = a + b;
//       a = b;
//       b = c;
//     }
//     return b;
//   }
  
//   alert( fib(3) ); // 2
//   alert( fib(7) ); // 13
//   alert( fib(77) ); // 5527939700884757




//   let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };
  
//   function printList(list) {
  
//     alert(list.value); // выводим текущий элемент
  
//     if (list.next) {
//       printList(list.next); // делаем то же самое для остальной части списка
//     }
  
//   }
  
//   printList(list);






//   let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };
  
//   function printList(list) {
//     let tmp = list;
  
//     while (tmp) {
//       alert(tmp.value);
//       tmp = tmp.next;
//     }
  
//   }
  
//   printList(list);





//   let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };
  
//   function printList(list) {
//     let tmp = list;
  
//     while (tmp) {
//       alert(tmp.value);
//       tmp = tmp.next;
//     }
  
//   }
  
//   printList(list);





// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };
  
//   function printReverseList(list) {
  
//     if (list.next) {
//       printReverseList(list.next);
//     }
  
//     alert(list.value);
//   }
  
//   printReverseList(list);








  // let list = {
  //   value: 1,
  //   next: {
  //     value: 2,
  //     next: {
  //       value: 3,
  //       next: {
  //         value: 4,
  //         next: null
  //       }
  //     }
  //   }
  // };
  
  // function printReverseList(list) {
  //   let arr = [];
  //   let tmp = list;
  
  //   while (tmp) {
  //     arr.push(tmp.value);
  //     tmp = tmp.next;
  //   }
  
  //   for (let i = arr.length - 1; i >= 0; i--) {
  //     alert( arr[i] );
  //   }
  // }
  
  // printReverseList(list);'





//   let list = {
//     value: 'a',
//     next: {
//       value: 'b',
//       next: {
//         value: 'c',
//         next: {
//           value: 'd',
//           next: null
//         }
//       }
//     }
//   };

  
// function reversePrintList(list){
  

//   if(list.next){
//     reversePrintList(list.next);
//   }
//   console.log(list.value);
// }


// reversePrintList(list);






// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Совещание",
//   occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
//   place: room
// };

// // цикличные ссылки
// room.occupiedBy = meetup;
// meetup.self = meetup;

// alert( JSON.stringify(meetup, function replacer(key, value) {
//   if(key != "" && value == meetup) {
//     return undefined;
//   } else return value;
// }));

/* в результате должно быть:
{
  "title":"Совещание",
  "occupiedBy":[{"name":"Иванов"},{"name":"Петров"}],
  "place":{"number":23}
}
*/




// function sum(...numbers) {
//   return numbers.reduce((sum, number) => sum + number, 0);
// }

// console.log(sum(1, 2, 3)); // 6
// console.log(sum(4, 5, 6, 7)); // 22





// function addToArray(array, ...elements) {
//   return [...array,...elements];
// }

// const initialArray = [1, 2, 3];
// const newArray = addToArray(initialArray, 4, 5, 6);

// console.log(newArray); // [1, 2, 3, 4, 5, 6]
// console.log(initialArray); // [1, 2, 3] (без изменений)



// function mergeObjects(...objects) {
//   return objects.reduce((sum, obj) => {
//     return {...sum,...obj};
//   }, {});
// }

// const obj1 = { a: 1, b: 2 };
// const obj2 = { b: 3, c: 4 };
// const obj3 = { d: 5 };

// const mergedObject = mergeObjects(obj1, obj2, obj3);

// console.log(mergedObject); // { a: 1, b: 3, c: 4, d: 5 }





// function mergeArrays(...arrays) {
//   let newArr = [];

//   for(let i = 0; i < arrays.length; i++){

//     let innerArrayLength = arrays[i].length;
    
//     for(let j = 0; j < innerArrayLength; j++) {
//         newArr.push(arrays[i][j]);
//     }
// }

// let set = new Set(newArr);  


//   return Array.from(set);
// }

// const result = mergeArrays([1, 2, 3], [3, 4, 5], [5, 6, 7]);
// console.log(result); // Ожидаемый вывод: [1, 2, 3, 4, 5, 6, 7]






// function sumNumbers(...numbers) {
//   let result = 0;

//   numbers.forEach((numb) => {
//     if(typeof numb == 'number'){
//       result += numb;
//     }
//   })

//   return result;
// }

// const total = sumNumbers(1, 'a', 2, 3, true, 4);
// console.log(total); // Ожидаемый вывод: 10




// function combineObjects(...objects) {
//   return objects.reduce((sum, obj) => {
//         return {...sum,...obj};
//     }, {});
//   }

// const combined = combineObjects(
//   { a: 1, b: 2 },
//   { b: 3, c: 4 },
//   { d: 5, a: 6 }
// );
// console.log(combined); // Ожидаемый вывод: { a: 6, b: 3, c: 4, d: 5 }





//                                                      3 (Область видимости переменных, замыкание)


////////////////////////////////////
// function sum(a) {

//   return function(b) {
//     return a + b;
//   }

// }


// console.log(sum(5)(-3));
//////////////////////////////////////








// let arr = [1, 2, 3, 4, 5, 6, 7];

// function inBetween(a, b){

//   return function(x){
   
//    return x >= a && x <= b;;
    
//   };

// }

// function inArray(newArr){
//   let c;

//   return function(x){

  
//     for(c of newArr){
//       if(c === x) return c;
//     }
    
//   }
// }


// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// alert( arr.filter(inArray([1, 2, 5])) ); // 1,2




// let users = [
//   { name: "Иван", age: 20, surname: "Иванов" },
//   { name: "Пётр", age: 18, surname: "Петров" },
//   { name: "Анна", age: 19, surname: "Каренина" }
// ];


// function byField(fieldName){
//     return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
// }




// console.log(users.sort(byField('name')));
// //users.sort(byField('age'));





function createCacheDecorator(fn) {
  // Создаем объект для хранения кэша
  let cache = new Map();

  // Возвращаем объект с методами для работы с кэшем
  return {
    // Метод для вызова функции с кэшированием результата
    cachedFunction: function(...args) {
      const key = JSON.stringify(args); // Генерируем ключ для кэша на основе аргументов
      if (cache.has(key)) {
        return cache.get(key); // Возвращаем значение из кэша, если оно уже там есть
      }
      const result = fn(...args); // Вызываем исходную функцию
      cache.set(key, result); // Сохраняем результат в кэш
      return result;
    },

    // Метод для сброса кэша
    clearCache: function() {
      cache.clear(); // Очищаем кэш
    }
  };
}

// Пример использования
const slowFunction = (num) => {
  console.log("Computing...");
  return num * 2;
};

const { cachedFunction, clearCache } = createCacheDecorator(slowFunction);

console.log(cachedFunction(5)); // Вывод: Computing... \n 10
console.log(cachedFunction(5)); // Вывод: 10 (из кэша)
clearCache();
console.log(cachedFunction(5)); // Вывод: Computing... \n 10




// function createTaskExecutor(taskHandler) {
//   return function(task) {
//     taskHandler(task);
//   };
// }

// // Пример использования
// const taskExecutor = createTaskExecutor((task) => {
//   console.log(`Executing task: ${task}`);
// });

// // Вызов функции taskExecutor
// taskExecutor('Task 1'); // Вывод: Executing task: Task 1
// taskExecutor('Task 2'); // Вывод: Executing task: Task 2







//let result = 0;

// function createHistoricalCounter() {
//   let moment = new Set();
//   let count = 0;
//   return {
//     increment: function(){
//         result += count + 1
//         return moment.add(result);           
//     },

//     getValue: function(){
//       return moment.size;
//     },

//     getHistory: function(){
//       return Array.from(moment);
//     },

    
//   };
// }

// // Пример использования
// const historicalCounter = createHistoricalCounter();
// historicalCounter.increment();
// historicalCounter.increment();
// historicalCounter.increment();
// historicalCounter.increment();
// historicalCounter.increment();
// historicalCounter.increment();
// console.log(historicalCounter.getValue());  // Вывод: 2
// console.log(historicalCounter.getHistory()); // Вывод: [1, 2]




//                                                        6(Объект функции, NFE)






// function ask(question, ...handlers) {
//   let isYes = confirm(question);

//   for(let handler of handlers) {
//     if (handler.length == 0) {
//       if (isYes) handler();
//     } else {
//       handler(isYes);
//     }
//   }

// }

// // для положительных ответов вызываются оба типа обработчиков
// // для отрицательных - только второго типа
// ask("Вопрос?", () => alert('Вы ответили да'), result => alert(result));




// function sayHi() {
//   alert("Hi");

//   // давайте посчитаем, сколько вызовов мы сделали
//   sayHi.counter++;
// }
// sayHi.counter = 0; // начальное значение

// sayHi(); // Hi
// sayHi(); // Hi

// alert( `Вызвана ${sayHi.counter} раза` ); // Вызвана 2 раза




function makeCounter() {
  // вместо
  // let count = 0

  function counter() {
    return counter.count++;
  };

  counter.count = 0;

  return counter;
}

let counter = makeCounter();
alert( counter() ); // 0
alert( counter() ); // 1







// function makeCounter() {
//   let count = 0;

//   function counter() {
//     return count++;
//   }

//   counter.set = value => count = value;

//   counter.decrease = () => count--;

//   return counter;
// }


// let counter = makeCounter();

// alert( counter() ); // 0
// alert( counter() ); // 1

// counter.set(10); // установить новое значение счётчика

// alert( counter() ); // 10

// counter.decrease(); // уменьшить значение счётчика на 1

// alert( counter() ); // 10 (вместо 11)




// function sum(a) {

//   let currentSum = a;

//   function f(b) {
//     currentSum += b;
//     return f;
//   }

//   f.toString = function() {
//     return currentSum;
//   };

//   return f;
// }

// alert( sum(1)(2) ); // 3
// alert( sum(5)(-1)(2) ); // 6
// alert( sum(6)(-1)(-2)(-3) ); // 0
// alert( sum(0)(1)(2)(3)(4)(5) ); // 15




// function make(a){
//   let count = a;

//   function make12(b){
//     count *= b;
//     return make12;
//   }

//   make12.toString = function(){
//     return count;
//   };

//   return make12;
// }


// console.log(+make(4)(5)(9));



// function calculateArea(w, h){

//   function rectangle(){
//     return w * h;
//   }

//   return rectangle;

// }


// let rectangle = calculateArea(5, 3);

// console.log(rectangle());



// const operations = [
//   (a, b) => {return a + b},
//   (a, b) => {return a - b},
//   (a, b) => {return a * b}
// ];

// // Функция для вывода истории операций
// function showHistory(operations) {
//   let history = "";
//   operations.forEach((operation, index) => {
//     // Используем свойство toString каждой операции
//     history += `${index + 1}. ${operation.toString()}\n`; 
//   });
//   return history;
// }

// // Пример использования:
// const sum = operations[0](5, 3); // Выполняет сложение
// const difference = operations[1](10, 2); // Выполняет вычитание
// const multiple = operations[2](10, 2);

// console.log(showHistory(operations));




// function showPrimes(n) {

//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;

//     console.log(i);  // простое
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//     if ( n % i == 0) return false;
//   }
//   return true;
// }


// console.log(showPrimes(10));













//                                                                       8 


// Предположим, у нас есть веб-форма, и мы хотим показать сообщение пользователю, если он не отправил форму в течение 10 секунд
// let formSubmitReminderTimeoutId;

// function remindUserToSubmitForm() {
//     formSubmitReminderTimeoutId = setTimeout(() => {
//         alert("Пожалуйста, отправьте форму.");
//     }, 10000); // 10000 миллисекунд = 10 секунд
// }

// // Функция, которая вызывается, когда форма отправлена
// function onFormSubmit() {
//     // Отменяем напоминание, так как форма уже отправлена
//     clearTimeout(formSubmitReminderTimeoutId);
//     // Другая логика обработки отправки формы
//     console.log("Форма отправлена.");
// }

// // Запускаем напоминание пользователю
// remindUserToSubmitForm();

// // Представим, что форма была отправлена пользователем через 5 секунд
// setTimeout(onFormSubmit, 5000);




// let timerId = setTimeout(() => {
//   console.log("Таймер сработал!");
// }, 3000); // Запускаем таймер на 3 секунды

// // Через 1 секунду отменяем таймер
// setTimeout(() => {
//   clearTimeout(timerId);
//   console.log("Таймер отменен!");
// }, 1000); 




// let timerId = setTimeout(function tick() {
//   alert('tick');
//   timerId = setTimeout(tick, 5000); // (*)
// }, 2000);






// function printNumbers(from, to) {
//   let current = from;

//   let timerId = setInterval(function() {
//     alert(current);
//     if (current == to) {
//       clearInterval(timerId);
//     }
//     current++;
//   }, 1000);
// }

// // использование:
// printNumbers(5, 10);




// let timerId = setTimeout(function printNumbers(from, to) {
//   let delay = 1000;
//   for(from = 0, to = 8; from <= to; from++){
//     delay += 1000;
//     alert(from);
//   }
  
//   timerId = setTimeout(printNumbers, delay); // (*)
// }, 1000);





// function printDaysReverse(from, to){
//   let days = ['понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  
//   let timerId = setInterval(function(){ 
//     if(to <= from) {
//       alert(days[from - to++]);
//     } else {
//         clearInterval(timerId);
//     };
//     }, 1000);
    

// }


// printDaysReverse(6, 0);



// function printNumbersStep(from, to, step){
//   step = 2;
//   let timerId = setTimeout(function func(){
//     if(from <= to){
//       alert(from);
//     from += step;
//       timerId = setTimeout(func, step * 1000);
//     } else {
//       clearTimeout(timerId);
//     }

    
//   }, step * 1000)

  
// }

// printNumbersStep(1, 10, 2);










// function countdownTimer(seconds){
//     let timerId = setInterval(function(){
//     if(seconds !== 0){
//       alert(seconds)
//       seconds--;
//   } else {
//     alert("Время вышло!");
//     clearInterval(timerId);
//   }
//   }, 1000);
// }

// countdownTimer(5);


//let guessNum = +prompt("Введите число: ");

// function generateRandomNumber(min, max){
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min); 
// }

// let result = generateRandomNumber(
//   +prompt("Введите минимальное число диапазона: "), 
//   +prompt("Введите максимальное число диапазона: "));


// function checkNumber(guess, secretNumber){
//   let count = new Map();
//   let c = 0;

//   let timerId = setTimeout(function func(){  
//     clearTimeout(timerId);

//     if(secretNumber < 50) {
//       alert("Число находится в диапазоне от 0 до 50");
//     }

//       if(guess === secretNumber){
//         clearTimeout(timerId);
//         alert("Угадал!");
//       } else {
//         while(guess !== secretNumber){
//           if(guess){
//             c++
//           }

//           if(!count.has(c)) {
//             count.set(`${c} попытка`, c);
//           }

          
//           guess = +prompt("Введите число ещё раз: ");
//         } 
        
//         if(guess === secretNumber) {
//             c++;
          
//           if(!count.has(c)) {
//             count.set(`${c} попытка`, c);
//           }
//           alert("Угадал!");
//       }
      
//       //if(timerId === 30) alert("Время вышло");
      
//       }

//     for (let keys of count.keys()) {
//       console.log(keys);
//     }
  
//   }, 30000);
// }

// console.log(checkNumber(+prompt("Введите число: "), result));





// function generateRandomNumber(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }

// let result = generateRandomNumber(
//   +prompt("Введите минимальное число диапазона: "),
//   +prompt("Введите максимальное число диапазона: ")
// );

// function checkNumber(guess, secretNumber, count = new Map()) {
//   let c = count.size + 1;

//   if (secretNumber < 50) {
//     alert("Число находится в диапазоне от 0 до 50");
//   }

//   if (guess === secretNumber) {
//     alert("Угадал!");
//     count.set(`${c} попытка`, c);
//     for (let keys of count.keys()) {
//       console.log(keys);
//     }
//     return; // Выход из функции, чтобы не продолжать игру после угадывания
//   }

//   count.set(`${c} попытка`, c);

//   guess = +prompt("Введите число ещё раз: ");

//   checkNumber(guess, secretNumber, count); // Рекурсивный вызов функции
// }

// checkNumber(+prompt("Введите число: "), result);






// function sumArray(arr) {
//   if (arr.length === 0) {
//     return 0; // Базовый случай: если массив пустой, возвращаем 0
//   } else {
//     return arr[0] + sumArray(arr.slice(1)); // Рекурсивный случай: возвращаем сумму первого элемента и рекурсивного вызова для остальной части массива
//   }
// }

// // Пример использования
// const arr = [1, 2, 3, 4, 5];
// const sum = sumArray(arr);
// console.log(sum); // Вывод: 15




// function slow(x) {
//   // здесь могут быть ресурсоёмкие вычисления
//   alert(`Called with ${x}`);
//   return x;
// }

// function cachingDecorator(func) {
//   let cache = new Map();

//   return function(x) {
//     if (cache.has(x)) {    // если кеш содержит такой x,
//       return cache.get(x); // читаем из него результат
//     }

//     let result = func(x); // иначе, вызываем функцию

//     cache.set(x, result); // и кешируем (запоминаем) результат
//     return result;
//   };
// }

// slow = cachingDecorator(slow);

// alert( slow(1) ); // slow(1) кешируем
// alert( "Again: " + slow(1) ); // возвращаем из кеша

// alert( slow(2) ); // slow(2) кешируем
// alert( "Again: " + slow(2) ); // возвращаем из кеша







// let worker = {
//   someMethod() {
//     return 1;
//   },

//   slow(x) {
//     alert("Called with " + x);
//     return x * this.someMethod(); // (*)
//   }
// };

// function cachingDecorator(func) {
//   let cache = new Map();
//   return function(x) {
//     if (cache.has(x)) {
//       return cache.get(x);
//     }
//     let result = func.call(this, x); // теперь 'this' передаётся правильно
//     cache.set(x, result);
//     return result;
//   };
// }

// worker.slow = cachingDecorator(worker.slow); // теперь сделаем её кеширующей

// alert( worker.slow(2) ); 
// alert( worker.slow(2) ); 









// let worker = {
//   slow(min, max) {
//     alert(`Called with ${min},${max}`);
//     return min + max;
//   }
// };

// function cachingDecorator(func, hash) {
//   let cache = new Map();
//   return function() {
//     let key = hash(arguments); // (*)
//     if (cache.has(key)) {
//       return cache.get(key);
//     }

//     let result = func.call(this, ...arguments); // (**)

//     cache.set(key, result);
//     return result;
//   };
// }

// function hash(args) {
//   return args[0] + ',' + args[1];
// }

// worker.slow = cachingDecorator(worker.slow, hash);

// alert( worker.slow(3, 5) ); // работает
// alert( "Again " + worker.slow(3, 5) ); // аналогично (из кеша)












// function work(a, b) {
//   alert( a + b ); // произвольная функция или метод
// }

// function spy(func) {

//   function wrapper(...args) {
//     // мы используем ...args вместо arguments для хранения "реального" массива в wrapper.calls
//     wrapper.calls.push(args);
//     return func.apply(this, args);
//   }

//   wrapper.calls = [];

//   return wrapper;
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }









// function f(x) {
//   alert(x);
// }

// function delay(f, ms){

//   return function(...args){
//     let timerId = setTimeout(() => f.apply(this, args), ms);

//     return timerId;
//   }
  
// }

// let f1000 = delay(f, 1000);
// let f1500 = delay(f, 15000);

// f1000("test"); // показывает "test" после 1000 мс
// f1500("test"); // показывает "test" после 1500 мс






// function debounce(func, ms) {
//   let timeout;
//   return function() {
//     clearTimeout(timeout);
//     timeout = setTimeout(() => func.apply(this, arguments), ms);
//   };
// }





// function debounce(func, ms) {
//   let timeout;
//   return function(...args) {
//     clearTimeout(timeout); // Отменяем предыдущий таймер
//     timeout = setTimeout(() => func.apply(this, args), ms); // Запускаем новый таймер
//   };
// }

// function logMessage(message) {
//   console.log(`Лог: ${message}`);
// }

// const debouncedLog = debounce(logMessage, 1000); // Задержка 1 секунда

// debouncedLog('Сообщение 1'); // Вывод в консоль: "Лог: Сообщение 1"
// debouncedLog('Сообщение 2'); // Ничего не выводится, т.к. задержка ещё не закончилась
// debouncedLog('Сообщение 3'); // Ничего не выводится, т.к. задержка ещё не закончилась

// setTimeout(() => {
//   debouncedLog('Сообщение 4'); // Вывод в консоль: "Лог: Сообщение 4"
// }, 1500);



// function f(a) {
//   console.log(a)
// }

// function throttle(func, ms) {

//   let isThrottled = false,
//     savedArgs,
//     savedThis;

//   function wrapper() {

//     if (isThrottled) { // (2)
//       savedArgs = arguments;
//       savedThis = this;
//       return;
//     }

//     func.apply(this, arguments); // (1)

//     isThrottled = true;

//     setTimeout(function() {
//       isThrottled = false; // (3)
//       if (savedArgs) {
//         wrapper.apply(savedThis, savedArgs);
//         savedArgs = savedThis = null;
//       }
//     }, ms);
//   }

//   return wrapper;
// }





// let f1000 = throttle(f, 1000);

// f1000(1); // показывает 1
// f1000(2); // (ограничение, 1000 мс ещё нет)
// f1000(3); // (ограничение, 1000 мс ещё нет)

//когда 1000 мс истекли ...
//...выводим 3, промежуточное значение 2 было проигнорировано






/////////////////////////////////////////////////////////////////
// function sayHello(name) {
//   return `Привет, ${name}!`;
// }

// function greet(func){
//   let result;
//   let result1;
//   return function(againName){
//     result = func.call(this, againName);

//     if(againName){
//       result1 = "Привет!";
//     }

//     return result1;
//   }
// }

// const greetedSayHello = greet(sayHello);

// console.log(greetedSayHello("Alice"));
///////////////////////////////////////////////////////////////////








// function printText(text) {
//   console.log(text);
// }

// function convert(func){
//   //let res;
//   return function(word){
//     return func.call(this, word.toUpperCase());
//   }
// }

// const convertedPrintText = convert(printText);

// console.log(convertedPrintText("hello")); // Вывод: "HELLO"





// function logMessage(message) {
//   console.log(message);
// }

// function sayWith(greet, func){
//      func.call(user, `${greet}, ${user.name}!`);
// }


// const user = { name: "Bob" };

// sayWith("Bob", "Привет", logMessage);





// function calculateSum(a, b) {
//   return a + b;
// }


// function logger(func){
//   let dateStart = new Date();
//   let result = 0;
//   return function(){
//     let funcResult = func.apply(this, arguments);
//     let dateEnd = new Date();
//     result = dateEnd - dateStart;
//     return `Функция: ${func.name}, 
//     Аргументы: ${arguments[0]}, ${arguments[1]}, 
//     Результат: ${funcResult}, 
//     Время: ${result}`;

//   }
// }

// const loggedSum = logger(calculateSum);

// console.log(loggedSum(2, 3)); // Вывод: "Функция: calculateSum, Аргументы: 2, 3, Результат: 5, Время: [время в мс]"







// function logMessage(message) {
//   console.log(`Лог: ${message}`);
// }

// function repeat(func, ms){
//   return function(greet){
//     setInterval(() => func.call(this, greet), ms);
//   }
// }

// const repeatingLog = repeat(logMessage, 1000); // Вызов каждые 1 секунду

// repeatingLog("Привет!");








// function logMessage(message) {
//   console.log(`Лог: ${message}`);
// }

// function delay(func, ms){
//   return function(goodbye){
//     let timerId = setTimeout(function f(){
//       func.call(this, goodbye);

//       timerId = setTimeout(f, 10000);
//     }, ms);
//   }
// }

// const delayedLog = delay(logMessage, 2000); // Вызов с задержкой в 2 секунды

// delayedLog("Пока!"); 







// function logMessage(message) {
//   console.log(`Лог: ${message}`);
// }

// function throttle(func, calls){
//   return function(message){
//     let timerId = setTimeout(function f(){
//       if(timerId === calls + 1){
//         clearTimeout(timerId);
//         return timerId;
//       }

//       func.call(this, message);

//     }, 1000)
//   }
// }

// const throttledLog = throttle(logMessage, 2); // Ограничение до 2 вызовов в секунду

// throttledLog("Сообщение 1"); // Вывод: "Лог: Сообщение 1"
// throttledLog("Сообщение 2"); // Вывод: "Лог: Сообщение 2"
// throttledLog("Сообщение 3"); // Вывод: Ничего не выводится, т.к. ограничение достигнуто
// throttledLog("Сообщение 4"); // Вывод: "Лог: Сообщение 4" через 1 секунду



// function logMessage(message) {
//   console.log(`Лог: ${message}`);
// }

// function throttle(func, callsPerSecond) {
//   let lastCallTime = 0;
//   let count = 0;

//   return function(message) {
//     const now = Date.now();
//     if (now - lastCallTime >= 1000 / callsPerSecond) { // Условие проверки времени
//       lastCallTime = now;
//       count = 0; // Сброс счетчика после истечения секунды
//       func.call(this, message); 
//     } else if (count < callsPerSecond) {
//       count++;
//       func.call(this, message); 
//     }
//   };
// }

// const throttledLog = throttle(logMessage, 2); // Ограничение до 2 вызовов в секунду

// throttledLog("Сообщение 1"); // Вывод: "Лог: Сообщение 1"
// throttledLog("Сообщение 2"); // Вывод: "Лог: Сообщение 2"
// throttledLog("Сообщение 3"); // Вывод: "Лог: Сообщение 3"
// throttledLog("Сообщение 4"); // Вывод: "Лог: Сообщение 4"
// throttledLog("Сообщение 5"); // Вывод: Ничего не выводится, т.к. ограничение достигнуто
// throttledLog("Сообщение 6"); // Вывод: "Лог: Сообщение 6" через 1 секунду







// function longRunningTask() {
//   console.log("Начало выполнения задачи");
//   setTimeout(() => {
//     console.log("Задача завершена");
//   }, 5000);
// }

// function cancellable(func){
//   return function cancel(){
//     clearTimeout(func());
//   }
// }


// const cancellableTask = cancellable(longRunningTask);

// cancellableTask(); // Начало выполнения задачи
// setTimeout(cancellableTask.cancel, 2000); // Отмена через 2 секунды

// // Вывод: "Начало выполнения задачи", "Задача отменена"




// function greet() {
//   return `Hello, ${this.name}!`;
// }

// function changeContext(func, user){
  
//     let newGreet = func.call(user, this.name);
//     return newGreet;
  
// }

// const user = { name: 'Alice' };

// console.log(changeContext(greet, user)); // Должно вывести: "Hello, Alice!"
// console.log(changeContext(greet, user, ['arguments']));





// function add(a, b) {
//   return a + b;
// }

// function logDecorator(funcAdd){
//   return function(){
//     return `${funcAdd.name}: ${funcAdd.apply(this, arguments)}`;
//   }
// }

// const loggedAdd = logDecorator(add);

// console.log(loggedAdd(1, 2)); // Должно вывести:
// // Вызывается функция 'add' с аргументами [1, 2]
// // Результат выполнения функции 'add': 3



// function printMessage(message) {
//   console.log(message);
// }

// function taskScheduler(func, ms, bool, textMessage){
//   let timerId = 0;
//   return function(){
//     if(bool === true){
//       setTimeout(() => func.call(this, textMessage), ms);
//       clearTimeout();
//     } else if(bool === false){
//       timerId = setInterval(() => func.call(this, textMessage), ms);
//     }
//   }
// }

// const task = taskScheduler(printMessage, 1000, true, 'Hello, World!');
// task(); // Выведет "Hello, World!" через 1 секунду и остановит выполнение

// const repeatingTask = taskScheduler(printMessage, 2000, false, 'Repeating message');
// // Выведет "Repeating message" каждую вторую секунду

// setTimeout(repeatingTask, 10000); // Остановит повторение через 10 секунд





// function taskScheduler(func, ms, isSingleShot, textMessage) {
//   let timerId = null;

//   function schedule() {
//     if (isSingleShot) {
//       timerId = setTimeout(() => {
//         func.call(this, textMessage);
//         timerId = null; // Обнуляем timerId после выполнения таймера
//       }, ms);
//     } else {
//       timerId = setInterval(() => {
//         func.call(this, textMessage);
//       }, ms);
//     }
//   }

//   function cancel() {
//     if (isSingleShot && timerId !== null) {
//       clearTimeout(timerId);
//     } else if (!isSingleShot) {
//       clearInterval(timerId);
//     }
//     timerId = null; // Обнуляем timerId после остановки таймера/интервала
//   }

//   return {
//     start: schedule,
//     stop: cancel
//   };
// }

// const printMessage = (message) => console.log(message);

// const task = taskScheduler(printMessage, 1000, true, 'Hello, World!');
// task.start(); // Выведет "Hello, World!" через 1 секунду и остановит выполнение
// // task.stop(); // Можно вызвать, чтобы остановить таймер, если он ещё не выполнен

// const repeatingTask = taskScheduler(printMessage, 2000, false, 'Repeating message');
// repeatingTask.start(); // Выведет "Repeating message" каждую вторую секунду

// setTimeout(() => {
//   repeatingTask.stop(); // Остановит повторение через 10 секунд
// }, 10000);





// function logMessage(message) {
//   console.log(`Лог: ${message}`);
// }

// function limitedCalls(funcM, funcR, calls){
//   return function(){

//     let timerId = setInterval(() => {funcM.call(this, funcR())
//       clearInterval(timerId); 
//   }, 1000);
    
//   if(timerId === calls){
//     clearInterval(timerId);
//     return "Завершить работу";
//   }

//   }
  
// }

// function getRandomNumber() {
//   return Math.floor(Math.random() * 10); 
// }

// const limitedGetRandomNumber = limitedCalls(logMessage, getRandomNumber, 3); // Ограничение до 3 вызовов

// limitedGetRandomNumber(); // Вывод: "Лог: 5" (случайное число)
// limitedGetRandomNumber(); // Вывод: "Лог: 2" (случайное число)
// limitedGetRandomNumber(); // Вывод: "Лог: 9" (случайное число)
// limitedGetRandomNumber(); // Ничего не выводится, так как ограничение достигнуто




// function partial(func, ...argsBound) {
//   return function(...args) { // (*)
//     return func.call(this, ...argsBound, ...args);
//   }
// }

// // использование:
// let user = {
//   firstName: "John",
//   say(time, phrase) {
//     alert(`[${time}] ${this.firstName}: ${phrase}!`);
//   }
// };

// // добавляем частично применённый метод с фиксированным временем
// user.sayNow = partial(user.say, new Date().getHours() + ':' + new Date().getMinutes());

// user.sayNow("Hello");
// // Что-то вроде этого:
// // [10:00] John: Hello!






// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'Вася',

//   loginOk() {
//     alert(`${this.name} logged in`);
//   },

//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },

// };

// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));








// function askPassword(ok, fail) {
//   let password = prompt("Password?", '');
//   if (password == "rockstar") ok();
//   else fail();
// }

// let user = {
//   name: 'John',

//   login(result) {
//     alert( this.name + (result ? ' logged in' : ' failed to log in') );
//   }
// };

// askPassword(user.login.bind(user, true), user.login.bind(user, false)); // ?










// const user = {
//   name: 'Иван',
//   sayHello(gr) {
//     console.log(`${gr}, ${this.name}!`);
//   }
// };

// user.sayGoodbye = user.sayHello.bind(user);
// let greeting = prompt("Введите приветствие");
// user.sayGoodbye(greeting);





// function processCallback(callback) {
//   console.log('Обработка...');
//   setTimeout(() => {
//     callback.call(this); // Вызов переданной функции
//   }, 1000);
// }

// const user = {
//   name: 'Иван',
//   sayHello() {
//     console.log(`Привет, ${this.name}!`);
//   }
// };



// processCallback(user.sayHello.bind(user));









// function sayName() {
//   console.log(`Имя: ${this.name}`);
// }

// function changeContext(func, context){
//   return function(){
//     return func.bind(context);
//   }
// }

// const user = { name: 'Иван' };
// const sayNameWithUser = changeContext(sayName, user); 

// sayNameWithUser()(); // Вывод: "Имя: Иван"



// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };



// function printList(list) {
//   let result = []; // Массив для хранения значений
//   result.push(list.value); // Добавляем значение текущего узла

//   if (list.next !== null) { // Проверяем, есть ли следующий узел
//     result = result.concat(printList(list.next)); // Рекурсивно обрабатываем следующий узел
//   }

//   return result; // Возвращаем массив
// }

// console.log(printList(list)); // Вывод: [1, 2, 3, 4]




// const Counter = (function() {
//   let count = 0;
//   return {
//     increment: function() {
//       count++;
//       console.log("Счетчик увеличен!"); //  Это  сообщение  должно  выводиться  при  каждом  увеличении  счетчика
//     }
//   };
// })();

// const Logger = (function() {
//   return {
//     log: function(message) {
//       console.log(message);
//     }
//   };
// })();

// //  Привязываем  log  к  increment
// Counter.increment = Counter.increment.bind(null, Logger.log); 

// Counter.increment(); //  Вывод:  "Счетчик увеличен!" 
// Counter.increment(); //  Вывод:  "Счетчик увеличен!"








// function sayHello(name) {
//   console.log(`Привет, ${name}!`); 
// }


// function createTimer(func, delay){

//   return {
//     start: function(){
//       setTimeout(() => func.call(this), delay);
//     }
//   };
// }

// const timer = createTimer(sayHello.bind(null, "Мир"), 2000); //  Создаем  таймер,  привязываем  sayHello  с  аргументом  "Мир"  и  задержкой  2  секунды
// timer.start(); //  Запускаем  таймер

// //  Вывод:  через  2  секунды  в  консоли  появится  "Привет, Мир!" 








//  Создаем  меню
// const menu = [
//   { name: "Пицца  Маргарита", price: 500, description: "Классическая  пицца  с  томатным  соусом  и  моцареллой", category: "Пицца" },
//   { name: "Суп  Томатный", price: 250, description: "Вкусный  и  свежий  томатный  суп", category: "Супы" },
//   { name: "Салат  Цезарь", price: 300, description: "Салат  с  курятиной,  сыром  Пармезан  и  заправкой  Цезарь", category: "Салаты" },
// ];

// //  Создаем  корзину
// const cart = {
//   items: []
// };

// let orderItem = new Map();


// function del(dish){
//   console.log("Ожидание...")
//   setTimeout(() => console.log(`Блюдо ${dish} удалёно из корзины`), 2000);
// }

// function addToCart(dishName, quantity){
  
// return function add(d){
//   menu.filter((dish) => {
//     if(d !== dish.name) return;
//     if(cart.items.includes(dish)){
//       dish.quantity += quantity;
//       for(let key of orderItem.keys()){
//         if(orderItem.has(key)){
//           orderItem.set(key, `Количество заказов ${dish.name}: ${quantity + quantity}`);
//         }
//       }
//     }

    


//     if(menu.includes(dish) && !(cart.items.includes(dish))){
//       if(dish.name === d){
//         dish.quantity = quantity
//         cart.items.push(dish);

//         if(!orderItem.has(dish)){
//           orderItem.set(`Блюдо ${dish.name}`, `Количество заказов ${dish.name}: ${quantity}`);
//         }
        
        
//       }
//     }

//   });

//   return add;
// }




// }

// function removeFromCartForDecorator(func, dishName){
//   return function(){
//     cart.items.map((d, i) => {
//       if(cart.items.indexOf(d)){
//         if(d.name === dishName){
//         cart.items.splice(i, 1);
//         orderItem.delete(`Блюдо ${d.name}`);
//         func.call(this, dishName);
//         }
//       }
      
      
//     })}
// }

// function getTotalPrice(){
//   let endSum = cart.items.reduce((sum, dish) => {
//     return sum += dish.price * dish.quantity;
//   }, 0)

//   return endSum;
// }

// function showCart(){
//   orderItem.forEach((value, key, map) => {
//     console.log(`${key}, ${value}`)
//   })
// }


// //  Добавляем  блюда  в  корзину
// addToCart = addToCart.bind(menu);

// addToCart("Суп  Томатный", 1)("Суп  Томатный", 1)("Суп  Томатный", 1)("Салат  Цезарь", 1);



// //  Выводим  корзину

// showCart();

// //  Удаляем  блюдо
// let removeFromCart = removeFromCartForDecorator.bind(menu);
// removeFromCart = removeFromCartForDecorator(del, "Салат  Цезарь");
// removeFromCart("Салат  Цезарь");


// getTotalPrice();
// //  Выводим  корзину  снова
// showCart();

// //  Получаем  общую  стоимость
// console.log("Общая  стоимость:", getTotalPrice());
































//                                                   1(флаги и дескрипторы свойств)







// let user = {
//   name: "john",
//   age: 30,
//   occupation: "programming"
// }




// "use strict";

// let user = {};


// Object.defineProperties(user, {
//   name: {value: "John", configurable: true},
//   age: {value: 30},
//   occupation: {value: "programming"}
// });

// //user.name = "Pete";

// //alert(user.name);


// Object.defineProperty(user, "name", {
//   writable: true,
// });


// user.name = "Pete";

// alert(user.name);


// delete user.name;

// alert(user.name);









//                                                       2(геттеры и сеттеры)


// let user = {
//   name: "John",
//   surname: "Smith",

//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   },

//   set fullName(value) {
//     [this.name, this.surname] = value.split(" ");
//   }
// };

// // set fullName запустится с данным значением
// user.fullName = "Alice Cooper";

// alert(user.name); // Alice
// alert(user.surname); // Cooper





// let user = {
//   get name() {
//     return this._name;
//   },

//   set name(value) {
//     if (value.length < 4) {
//       alert("Имя слишком короткое, должно быть более 4 символов");
//       return;
//     }
//     this._name = value;
//   }
// };

// user.name = "Pete";
// alert(user.name); // Pete

// user.name = ""; // Имя слишком короткое...







// function User(name, birthday) {
//   this.name = name;
//   this.birthday = birthday;

//   // возраст рассчитывается из текущей даты и дня рождения
//   Object.defineProperty(this, "age", {
//     get() {
//       let todayYear = new Date().getFullYear();
//       return todayYear - this.birthday.getFullYear();
//     }
//   });
// }

// let john = new User("John", new Date(1992, 6, 1));

// alert( john.birthday ); // доступен как день рождения
// alert( john.age );      // ...так и возраст





// function sum(a) {

//   let currentSum = a;

//   function f(b) {
//     currentSum += b;
//     return f;
//   }

//   f.toString = function() {
//     return currentSum;
//   };

//   return f;
// }

// alert( sum(1)(2) ); // 3
// alert( sum(5)(-1)(2) ); // 6
// alert( sum(6)(-1)(-2)(-3) ); // 0
// alert( sum(0)(1)(2)(3)(4)(5) ); // 15




// let thermostat = {
//   get temperature(){
//     return this._temperature;
//   },

//   set temperature(value){
//     if(!(value > 10 && value < 30)) {
//       console.log(`Число ${value} не соответствует диапазону`);
//       return;
//     }

//     this._temperature = value;
//   }
// };

// t = +prompt("Введите число: ");

// console.log(thermostat.temperature = t);

// console.log(thermostat.temperature);




// let counter = {
//   count: 0,

//   get value(){
//     return this._value;
//   },

//   set value(value) {
//     if(value < 0){
//       this.count--;
//       console.log("Число является отрицательным");
//       console.log("Счётчик уменьшен");
//       return;
//     }

//     if(value && value !== undefined && value !== null){
//       this.count++;
//       console.log("Счётчик увеличен");
//       this._value = value;
//     }
//   }
// }

// let c = +prompt("Введите число");

// console.log(counter.value = c);

// console.log(counter.value);







// let counter = {
//   value: 0,
//   limit: 15,

//   get newValue(){
//     return this.value;
//   }, 

//   set newValue(val){
//     if(val > this.limit){
//       this.value = this.limit;
//       return;
//     }

//     if(this.value !== 0){
//       this.value = val;
//       console.log(`Вы поменяли значение на ${val}`);
//       return;
//     } else {
//       this.value = val;
//       return;
//     }
//   }
// }


// let c = +prompt("Введите число");

// console.log(counter.newValue = c);

// console.log(counter.newValue);

// console.log(counter.newValue = c);

// console.log(counter.newValue);





























//                                                    1(Прототипное наследование)      



// let animal = {
//   eats: true
// };

// let rabbit = {
//   jumps: true
// };

// rabbit.__proto__ = animal; // (*)

// // теперь мы можем найти оба свойства в rabbit:
// alert( rabbit.eats ); // true (**)
// alert( rabbit.jumps ); // true





// const myObject = {
//   name: 'John',
//   age: 30
// };

// // У myObject нет свойства toString, но мы можем его использовать, 
// // так как он наследуется от Object.prototype
// console.log(myObject.toString()); // [object Object]

// // Если мы добавим свойство toString в myObject, 
// // оно переопределит то, которое было унаследовано от Object.prototype
// myObject.toString = function() {
//   return `My name is ${this.name} and I am ${this.age} years old.`;
// };

// console.log(myObject.toString());





// let animal = {
//   eats: true
// };

// let rabbit = {
//   jumps: true
// };

// rabbit.__proto__ = animal; // (*)

// // теперь мы можем найти оба свойства в rabbit:
// alert( rabbit.eats ); // true (**)
// alert( rabbit.jumps ); // true







// let animal = {
//   eats: true,
//   walk() {
//     alert("Animal walk");
//   }
// };

// let rabbit = {
//   jumps: true,
// };

// rabbit.__proto__ = animal;

// // walk взят из прототипа
// rabbit.walk(); // Animal walk









// let animal = {
//   eats: true,
//   walk() {
//     alert("Animal walk");
//   }
// };

// let rabbit = {
//   jumps: true,
//   __proto__: animal
// };

// let longEar = {
//   earLength: 10,
//   __proto__: rabbit
// };

// // walk взят из цепочки прототипов
// longEar.walk(); // Animal walk
// alert(longEar.jumps); // true (из rabbit)









// let head = {
//   glasses: 1
// };

// let table = {
//   pen: 3
// };

// let bed = {
//   sheet: 1,
//   pillow: 2
// };

// let pockets = {
//   money: 2000
// };


// table.__proto__ = head;
// bed.__proto__ = table;
// pockets.__proto__ = bed;


// console.log(pockets.pen);
// console.log(bed.glasses);












// let hamster = {
//   stomach: [],

//   eat(food) {
    
//     this.stomach.push(food);
//   }
// };

// let speedy = {
//   stomach: [],
//   __proto__: hamster
// };

// let lazy = {
//   stomach: [],
//   __proto__: hamster
// };

// // Этот хомяк нашёл еду
// speedy.eat("apple");
// alert( speedy.stomach ); // apple

// // У этого хомяка тоже есть еда. Почему? Исправьте
// alert( lazy.stomach ); // apple










// let hamster = {
//   stomach: [],

//   eat(food) {
//     // присвоение значения this.stomach вместо вызова this.stomach.push
//     this.stomach = [food];
//   }
// };

// let speedy = {
//    __proto__: hamster
// };

// let lazy = {
//   __proto__: hamster
// };

// // Шустрый хомяк нашёл еду
// speedy.eat("apple");
// alert( speedy.stomach ); // apple

// // Живот ленивого хомяка пуст
// alert( lazy.stomach ); // <ничего>



// const currentDate = new Date();
// const targetDate = new Date();
// let d = targetDate.setHours(10, 30, 0, 0); // Установить время на 10:30

// function timeMachine(date, callback) {
//   let secondsPassed = 0;
//   let timerId; 

//   // Создаем функцию для остановки таймера
//   function stopTimeMachine() {
//     clearTimeout(timerId); 
//     console.log("Таймер остановлен!");
//   }

//   return function() {
//     timerId = setTimeout(() => {
//       callback.call(this, date); 
//       secondsPassed++;

//       if (secondsPassed >= 5) {
//         clearTimeout(timerId);
//         console.log(`Прошло ${secondsPassed} секунд`);
//         return; 
//       }
//     }, 1000); 

//     // Возвращаем функцию stopTimeMachine, чтобы можно было прервать таймер
//     return stopTimeMachine;
//   }
// }

// let newTimeMachine = timeMachine(d, function(date) {
//   console.log("Текущее время:", date.toLocaleString());
// });

// // Запускаем "машину времени"
// let stopTimer = newTimeMachine(); 

// // Прерываем таймер через 3 секунды
// setTimeout(stopTimer, 3000); 










// function countdown(seconds, callback){
//   let timerId;
//   return function(){
    
      
//     timerId = setInterval(() => {
//       if(seconds < 0){
//       clearInterval(timerId);
//       return;
//     } else {
//       callback.call(this, seconds);
//       seconds--;
//     }}, 100);
    

//     return timerId;
//     } 
  
    
  
  
//   }




// let count = countdown(10, function(seconds) {
//   if (seconds > 0) {
//     console.log(`Осталось ${seconds} секунд`);
//   } else {
//     console.log("Время вышло!");
//   }
// });


// count();







// let Animal = {
//   name: "animal",
//   type: "animal"
// };

// let Cat = {
//   __proto__: Animal,
//   sound: "meow",

//   soundChange(newSound){
//     this.sound = newSound;
    
//   }
// };

// let PersianCat = {
//   __proto__: Cat
// };



// console.log(PersianCat.soundChange("purr"));







// let Car = {
//   model: "X5",
//   brand: "BMW",

//   start: function(bool){
//     if(bool === true){
//     console.log("Двигатель запущен!");
//     } else {
//       console.log("Двигатель запущен!(мощный)");
//     }
//   }
// };


// let myCar = {
//   __proto__: Car
// };


// let yourCar = {
//   __proto__: Car
// };

// myCar.start(true);
// yourCar.start();








// let Person = {
//   speak(){
//     console.log("Привет!");
//   },

//   constructor(name){
//     this.name = name;
//   }

// };



// function createPerson(){
//   let person = {};
//   person.__proto__ = Person;
//   return person;
// }


// let person = createPerson();

// person.constructor("John")
// person.speak();

// function createStudent(){
//   let studentPerson = {};
//   studentPerson.__proto__ = Person;
//   studentPerson.studies = "student";
//   return studentPerson;
// }

// let studentPerson = createStudent();

// studentPerson.constructor("John");
// studentPerson.speak();


















//                                                                     2

// function Rabbit(name) {
//   this.name = name;
//   alert(name);
// }

// let rabbit = new Rabbit("White Rabbit");

// let rabbit2 = new rabbit.constructor("Black Rabbit");










// function Animal() {
//   this.name = name;
//   this.age = 0;

//   this.speak = function(){
//     console.log("Громкий звук");
//   }
// }

// let animal = new Animal();
// console.log(animal.name = "Rob");
// console.log(animal.age = 3);



// function Dog() {}

// Dog.prototype = animal;

// let dog = new Dog();

// console.log(dog.name)

// function GoldenRetriever() {}

// GoldenRetriever.prototype = dog;

// let goldenRetriever = new GoldenRetriever();

// console.log(goldenRetriever.name)












// function Vehicle(model){
//   this.model = model;
//   this.maxSpeed = 0;

//   this.start = function(){
//     console.log("Транспортное средство заведено!");
//   }

//   this.move = function(){
//     console.log(`Движение с максимальной скоростью: ${this.maxSpeed}`);
//   }
// }

// let car = new Vehicle("Pontiac");


// console.log(car.maxSpeed = 120);
// console.log(car.move());
// console.log(car.start());

// let fly = new car.constructor("Messerschmidt bf.109");

// console.log(fly.maxSpeed = 500);
// console.log(fly.move());
// console.log(fly.start());

// let tank = new car.constructor("M60 Patton");

// console.log(tank.maxSpeed = 60);
// console.log(tank.move());
// console.log(tank.start());












// function Person(){
//   this.name = "";
//   this.age = "";

//   this.compare = function(otherPerson){
//     if(this.name < otherPerson) return -1;
//     else if(this.name === otherPerson) return 0;
//     else if(this.name > otherPerson) return 1;
//   }
// }


// let Alice = new Person();
// Alice.name = "Alice";
// Alice.age = 18;

// let John = new Alice.constructor();
// John.name = "Alice";
// John.age = 21;

// console.log(Alice.compare(John.name));
















//                                                                    3





// function f() {
//   alert("Hello!");
// }

// Function.prototype.defer = function(ms){
//   setTimeout(() => new this, ms);
// }

// f.defer(5000); // выведет "Hello!" через 1 секунду










// function f(a, b) {
//   alert( a + b );
// }

// Function.prototype.defer = function(ms){
//   let f = this;
//   return function(...args) {
//     setTimeout(() => f.apply(this, args), ms);
//   }
// };

// f.defer(10000)(1, 2); // выведет 3 через 1 секунду.









// const arr = [];

// Array.prototype.add = function(element){
//   for(let i = 0; i <= this.length; i++)
//   if(this.length === 0){
//     this[0] = element;
//     return this;
//   } else {
//     this[this.length++] = element;
//     return this;
//   }
// }

// console.log(arr.add(2));
// console.log(arr.add(1));
// console.log(arr.add(3));
// console.log(arr.add(8));
// console.log(arr.add(78));
// console.log(arr.add(11));





// Array.prototype.remove = function(element){
//   let next = 0;
//   if(element){
//     for(let i = element; i <= this.length-2; i++){
//     next = i; 
//     next++;
//     this[i] = this[next--];

//     if(i === this.length - 2){
//       this.splice(this.length - 1, 1)
//       }
//     }

    
//     return this;
//   }
// }

// console.log(arr.remove(1));









//                                                         4




// let dictionary = Object.create(null);

// // ваш код, который добавляет метод dictionary.toString

// dictionary.toString = function(){
//   str = '';
//   for(this.key in this){
//     str += this.key + ','
//   }

//   return str;
// };

// Object.defineProperty(dictionary, "toString", {
//   enumerable: false
// });

// // добавляем немного данных
// dictionary.apple = "Apple";
// dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// // только apple и __proto__ выведены в цикле
// for(let key in dictionary) {
//   console.log(key); // "apple", затем "__proto__"
// }

// // ваш метод toString в действии
// alert(dictionary); // "apple,__proto__"






// let dictionary = Object.create(null, {
//   toString: { // определяем свойство toString
//     value() { // значение -- это функция
//       return Object.keys(this).join();
//     }
//   }
// });

// dictionary.apple = "Apple";
// dictionary.__proto__ = "test";

// // apple и __proto__ выведены в цикле
// for(let key in dictionary) {
//   alert(key); // "apple", затем "__proto__"
// }

// // список свойств, разделённых запятой, выведен с помощью toString
// alert(dictionary); // "apple,__proto__"






// let animal = {
//   eats: true
// };

// // создаём новый объект с прототипом animal
// let rabbit = Object.create(animal);

// alert(rabbit.eats); // true

// alert(Object.getPrototypeOf(rabbit) === animal); // получаем прототип объекта rabbit

// Object.setPrototypeOf(rabbit, {}); // заменяем прототип объекта rabbit на {}












// const Calculator = {
//   add: function(...calcAdd){
//     let array = calcAdd.every(add => Array.isArray(add));
//     if(array === true){
//       let newArr = calcAdd.flat();
//       return newArr;
//     } else {
//       let result;
//       typeof calcAdd[0] === "string" ? result = '' : result = 0;
//       return calcAdd.reduce((result, add) => {result += add; return result}, result);
//     } 
//   },

//   divide: function(...calcDivide){
//     for(let i = 0; i <= calcDivide.length; i++)
//     if(Array.isArray(calcDivide[i])){
//       let newDividedArr = calcDivide[i].map((div, j) => {return div / calcDivide[1]});
//       return newDividedArr;
//     } else {
//       return calcDivide[0] / calcDivide[1];
//     }
//   }
// };

// let calc = Object.create(Calculator);
// console.log(calc.add(1, 2)); // 3
// console.log(calc.add("Hello", "World")); // "HelloWorld" 
// console.log(calc.add([1, 2], [3, 4])); // [1, 2, 3, 4]
// console.log(calc.divide(10, 2)); // 5 
// console.log(calc.divide([2, 4], 2)); // [1, 2] 






// const stringHelper = {}; 
// stringHelper.prototype = {};


// const text = "  this is a string  ";
// // const reversed = stringHelper.prototype.reverse(text);  // "gnirts a si sihT"
// stringHelper.prototype.capitalize = function(t){
//   for(let i = 0, j = 0; i <= t.length - 1; i++, j++)
//   if(typeof t.at(i) === "string" && t.at(i) !== " "){
//     let Upper = t.at(i).toUpperCase();
//     j++;
//     let result = Upper + t.slice(j, t.length - 1);
//     return result;
//  }
// }; 

// console.log(stringHelper.prototype.capitalize(text));
// // "This is a string"
// // const wordCount = stringHelper.prototype.countWords(text);  // 4
// // const cleanText = stringHelper.prototype.removeExtraSpaces(text);  // "This is a string"






























//                                                                    Классы





// class User {

//   constructor(name) {
//     this.name = name;
//   }

//   sayHi() {
//     alert(this.name);
//   }

// }

// // Использование:
// let user = new User("Иван");
// user.sayHi();





// class User {

//   constructor(name) {
//     // вызывает сеттер
//     this.name = name;
//   }

//   get name() {
//     return this._name;
//   }

//   set name(value) {
//     if (value.length < 4) {
//       alert("Имя слишком короткое.");
//       return;
//     }
//     this._name = value;
//   }

// }

// let user = new User("Иван");
// alert(user.name); // Иван

// user = new User(""); // Имя слишком короткое.










// function Clock({ template }) {
  
//   let timer;

  // function render() {
  //   let date = new Date();

  //   let hours = date.getHours();
  //   if (hours < 10) hours = '0' + hours;

  //   let mins = date.getMinutes();
  //   if (mins < 10) mins = '0' + mins;

  //   let secs = date.getSeconds();
  //   if (secs < 10) secs = '0' + secs;

  //   let output = template
  //     .replace('h', hours)
  //     .replace('m', mins)
  //     .replace('s', secs);

  //   console.log(output);
  // }

  // this.stop = function() {
  //   clearInterval(timer);
  // };

  // this.start = function() {
  //   render();
  //   timer = setInterval(render, 1000);
  // };

// }

// let clock = new Clock({template: 'h:m:s'});
// clock.start();









// class Clock {
//   constructor({ template }){
//     this.template = template;
//   }

//   render() {
//     let date = new Date();

//     let hours = date.getHours();
//     if (hours < 10) hours = '0' + hours;

//     let mins = date.getMinutes();
//     if (mins < 10) mins = '0' + mins;

//     let secs = date.getSeconds();
//     if (secs < 10) secs = '0' + secs;

//     let output = this.template
//       .replace('h', hours)
//       .replace('m', mins)
//       .replace('s', secs);

//     console.log(output);
//   }

//   stop() {
//     clearInterval(this.timer);
//   };

//   start() {
//     this.render();
//     this.timer = setInterval(() => this.render(), 1000);
//   };


// }


// let clock = new Clock({template: 'h:m:s'});

// clock.start();








// class User{
//   constructor(name){
//     this.name = name;
//   }

//   sayHello(gr){
//     console.log(`${gr}, ${this.name}`);
//   }

 
// }



// let user = new User("Иван");
// //let greet = prompt("Введите приветствие");
// user.sayGoodbye = user.sayHello.bind(user);
// user.sayGoodbye("Прощай");





// class GuessingGame{
//   constructor() {
//     this.secretNumber = 0;
//     this.attempts = 0;
//     this.timer = 0;
//     this.isRunning = true;
//   }


//   start(){
  
//   this.min = Math.ceil(0);
//   this.max = Math.floor(100);
//   this.secretNumber = Math.floor(Math.random() * (this.max - this.min + 1) + this.min); 

//   this.attempts = 10;
//   this.isRunning = true;



//   this.timer = setInterval(() => {
//     this.attempts--;
//     console.log("Осталось попыток:", this.attempts);
//     if (this.attempts === 0) {
//       this.stop();
//       console.log("Время вышло! Тайное число:", this.secretNumber);
//     }
//   }, 1000);


//   }


//   guess(number){
//     this.number = number;
//     if(this.attempts === 10 && this.number === this.secretNumber) this.checkWin();
//     if(this.number === this.secretNumber){
//       this.stop();
//     } else {
//       this.attempts--;
//       if(this.secretNumber > number) console.log("Число больше");
//       if(this.secretNumber < number) console.log("Число меньше");
      
//       this.number = +prompt("Попробуйте ещё раз");
//       return this.guess(this.number);
//     }

//     if(this.attempts === 0) this.stop();
//   }

//   stop(){
//     this.isRunning = false;
//     clearInterval(this.timer);
//   }

//   checkWin(){   
//       console.log("Вы выиграли!");
//       this.stop();
//   }


// }

// let game = new GuessingGame();

// game.start();
// console.log(game.guess(+prompt("Введите число: ")));
// game.stop();











// function slowFunction() {
//   for (let i = 0; i < 1e7; i++) {} // Имитация долгой работы
//   return "Finished!";
// }


// function measureExecutionTime(func){
//   let start = 0;
//   let end = 0;
//   let result = 0;
//   return function(){
//     start = Date.now();

//     console.log(func.call(this));

//     end = Date.now();
//     result = end - start;
//     return result;
//   }
// }

// const measuredSlowFunction = measureExecutionTime(slowFunction);
// console.log(measuredSlowFunction()); // Должно вывести время выполнения и "Finished!"







// const car = {
//   brand: "Toyota",
//   model: "Camry",
//   drive: function() {
//       return `Driving a ${this.brand} ${this.model}.`;
//   }
// };

// function testDrive(obj) {
//   const boundDrive = obj.drive.bind(obj); // Используйте bind для привязки контекста
//   console.log(boundDrive()); // Должно вывести "Driving a Toyota Camry."
// }

// testDrive(car);














// class AdvancedTimer{
//   constructor(){
//     this.timer = 0;
//     this.count = 0;
//     this.duration = 0;
//     this.interval = 0;
//   }

//   start(duration, interval){
//     this.duration = duration;
//     this.interval = interval;
//     this.timer = setInterval(() => {
//       if(this.count++ === (duration / interval)){
//         clearInterval(this.timer);
//         console.log("Таймер завершён!");
//         return;
//       }
//       console.log("Таймер запущен!");

//     }, interval);

    
//   }

//   pause(){
//     clearInterval(this.timer);
//   }

//   reset(){
//     this.timer = 0;
//     this.count = 0;
//     this.start(this.duration, this.interval);
//   }
// }




// const timer = new AdvancedTimer();
// timer.start(5000, 1000); // Должен выводить "Таймер запущен!" каждую секунду и завершиться через 5 секунд.
// setTimeout(() => timer.pause(), 3000); // Приостановить через 3 секунды.
// setTimeout(() => timer.reset(), 4000); // Сбросить через 4 секунды.






// function checkAccess(user, resource, callback) {
//   return function(){
//     if(user.role === 'admin'){
//       callback.call(user, resource);
//     } else {
//       console.log("Отказано в доступе");
//     }
//   }
// }

// function accessResource(resource) {
//   console.log(`Доступ  к  ресурсу  ${resource}  получен!`);
// }

// const user = {
//   role: 'casual'
// };

// let check = checkAccess(user, 'secretData', accessResource); //  Доступ  предоставлен,  вызов  accessResource  с  контекстом  user
// check();








// class Animal {
//   constructor(name) {
//     this.speed = 0;
//     this.name = name;
//   }
//   run(speed) {
//     this.speed = speed;
//     alert(`${this.name} бежит со скоростью ${this.speed}.`);
//   }
//   stop() {
//     this.speed = 0;
//     alert(`${this.name} стоит неподвижно.`);
//   }
// }

// let animal = new Animal("Мой питомец");



// class Rabbit extends Animal {
//   hide() {
//     alert(`${this.name} прячется!`);
//   }
// }

// let rabbit = new Rabbit("Белый кролик");

// rabbit.run(5); // Белый кролик бежит со скоростью 5.
// rabbit.hide(); // Белый кролик прячется!







// class Animal {

//   constructor(name) {
//     this.name = name;
//   }

// }

// class Rabbit extends Animal {
//   constructor(name) {
//     super(name);
//     this.created = Date.now();
//   }
// }

// let rabbit = new Rabbit("Белый кролик"); // Error: this is not defined
// alert(rabbit.name);







// function log(targetFunction) {
//   let listOfEl = "";
//   let count = new Map();
//   let resultF;
//   return function(...arguments){

//     for(let el of arguments){
//       listOfEl += `${el}, `;
//     }
    
//     if (listOfEl.lastIndexOf(",")) {
//       listOfEl = listOfEl.slice(0, listOfEl.lastIndexOf(","));
//     }
    
//     resultF = `Была вызвана функция с именем ${targetFunction.name} и фргументами ${listOfEl}`;

//     if(!count.has(resultF)){
//       count.set(resultF,`Результат её выполнения ${targetFunction.apply(this, arguments)}`);
//     }

//     return count;
//   }
// }

// function myFunction(a, b) {
//   return a + b;
// }

// const loggedFunction = log(myFunction);
// loggedFunction(2, 3); //







// class Animal{
//   constructor(name, type){
//     this.name = name;
//     this.type = type;
//     this.Base = new Map();
//   }

//   speak(){
//     console.log(`Я - ${this.type}`);
//   }

//   move(){
//     console.log(`${this.name} движется`);
//   }

//   dataBase(){
//     if(!this.Base.has(this.name)){
//       this.Base.set(this.name, this.type);
//     }
//   }
// }

// class Dog extends Animal{
//   constructor(name, type){
//     super(name);
//     this.type = type;
//   }

  
// }



// let dog = new Dog("Bobik", "собака");
// dog.move();
// dog.speak();
// dog.dataBase();





let Sum = {};

class Product{
  constructor(name, price, description, stock, category){
    this.name = name;
    this.price = price;
    this.description = description;
    this.stock = stock;
    this.category = category;
    this.GeneralInformation = new Map();
    this.general = {};
  }

  displayInfo(){
    
      console.log(`название: ${this.name}
        цена: ${this.price}
        описание: ${this.description}
        количество: ${this.stock}
        категория: ${this.category}`);
    
  }

  updateStock(amount){
    let change = prompt("Введите категорию товаров (Телефоны, Телевизоры, Ноутбуки): ");
    if(change !== null && change !== ''){
    if(this.GeneralInformation.has(change)){
      this.general.stock = amount;
      this.GeneralInformation.set(change, this.general) 
    }
  }
  }

  addToBasket(obj){
    this.general = obj;
    if(!this.GeneralInformation.has(this.category)){
      this.GeneralInformation.set(this.category, this.general);
    } else {
        this.GeneralInformation.set(this.category, this.general);
    }
  }

}


class Phone extends Product{
  constructor(name, price, description, stock, category, brand, model, screenSize, cameraResolution){
    super(name, price, description, stock, category);
    this.brand = brand;
    this.model = model;
    this.screenSize = screenSize;
    this.cameraResolution = cameraResolution;
  }

  displayInfo(){
    super.displayInfo();
    console.log(`компания: ${this.brand}
      модель: ${this.model}
      разрешение экрана: ${this.screenSize}
      разрешение камеры: ${this.cameraResolution}`);
  }

  updateStock(amount){
    super.updateStock(amount);
  }

  addToBasket(){
    this.general = {name: this.name, 
      price: this.price, 
      description: this.description, 
      stock: this.stock, 
      category: this.category,
      brand: this.brand,
      model: this.model,
      screenSize: this.screenSize,
      cameraResolution: this.cameraResolution
    };

    super.addToBasket(this.general);
  }
}

class Laptop extends Product{
  constructor(name, price, description, stock, category, brand, processor, ram, storageSize, screenResolution){
    super(name, price, description, stock, category);
    this.brand = brand;
    this.processor = processor;
    this.ram = ram;
    this.storageSize = storageSize;
    this.screenResolution = screenResolution;
  }

  displayInfo(){
    super.displayInfo();
    console.log(`компания: ${this.brand}
      Процессор: ${this.processor}
      ОЗУ: ${this.ram}
      размер хранилища: ${this.storageSize}
      размер экрана: ${this.screenResolution}`);
  }

  updateStock(amount){
    super.updateStock(amount);
  }

  addToBasket(){
    this.general = {name: this.name, 
      price: this.price, 
      description: this.description, 
      stock: this.stock, 
      category: this.category,
      brand: this.brand,
      processor: this.processor,
      ram: this.ram,
      storageSize: this.storageSize,
      screenResolution: this.screenResolution
    };

    super.addToBasket(this.general);
  }
}

class TV extends Product{
  constructor(name, price, description, stock, category, screenDiagonal, resolution, smartTV, soundSystem){
    super(name, price, description, stock, category);
    this.screenDiagonal = screenDiagonal;
    this.resolution = resolution;
    this.smartTV = smartTV;
    this.soundSystem = soundSystem;
  }

  displayInfo(){
    super.displayInfo();
    console.log(`Диагональ экрана: ${this.screenDiagonal}
      разрешение экрана: ${this.resolution}
      Функция "smartTV": ${this.smartTV}
      аудио-система: ${this.soundSystem}`);
  }

  updateStock(amount){
    super.updateStock(amount);
  }

  addToBasket(){
    this.general = {name: this.name, 
      price: this.price, 
      description: this.description, 
      stock: this.stock, 
      category: this.category,
      screenDiagonal: this.screenDiagonal,
      resolution: this.resolution,
      smartTV: this.smartTV,
      soundSystem: this.soundSystem
    };

    super.addToBasket(this.general);
  }
}

function sumCategory(allGadgetsOfCategory){
  let sum = 0;
  for(let i = 0; i <= products.length - 1; i++){
    if(products[i].GeneralInformation.has(allGadgetsOfCategory)){
      infoGadget = products[i].GeneralInformation.get(allGadgetsOfCategory);
      for(const key in infoGadget){
        if(key === "stock")
        sum += infoGadget[key];
        
      }
      
    }
    
  }
  return sum;
}

function searchProduct(gadget){
  let specifications = `Характеристики ${gadget}: `;
  for(let i = 0; i <= products.length - 1; i++){
  for(let value of products[i].GeneralInformation.values())
  if(value.name.includes(gadget)){
    for(const key in value){
      specifications += `${value[key]}, `;
    }
    console.log(specifications);
  }
}
}

function showProductsByCategory(allGadgetsOfCategory){
  let info = `Информация об устройстве: `;
  let infoGadget;
  for(let i = 0; i <= products.length - 1; i++){
    if(products[i].GeneralInformation.has(allGadgetsOfCategory)){
      infoGadget = products[i].GeneralInformation.get(allGadgetsOfCategory);
      for(const key in infoGadget){
        info += `${infoGadget[key]}, `;
      }
      console.log(info);
    }
  }
}


function sumOfCategory(func){
  let exit = false;
  return function(c){
    
    let category = prompt("Введите категорию товаров (Телефоны, Телевизоры, Ноутбуки): ");
    // если нам нужно подсчитать уже существующее свойство 
    if(!(category in Sum)){                                                                                                                                                                                                        
      Sum[category] = `В наличии ${func.call(this, category)} товаров этой категории`               
    } else {
      if(category in Sum){
      while(!exit){                                                                                 
        c = prompt("Введите категорию товаров ещё раз (Телефоны, Телевизоры, Ноутбуки): ");  
        if(c in Sum) break;                                                         
      } 
      Sum[c] = `В наличии ${func.call(this, category)} товаров этой категории`;
    }      
    }                                                                                            
    /////////////////////////////////////////////////////////////////////////////////////////                                                                                   
    

    return Sum;
  }
}

const phone1 = new Phone("iPhone 14 Pro", 1000, "Премиальный смартфон", 50, "Телефоны", "Apple", "iPhone 14 Pro", 6.1, 48);
const laptop1 = new Laptop("MacBook Air", 1200, "Легкий и мощный ноутбук", 20, "Ноутбуки", "Apple", "M2", 8, 256, "2560x1600");
const tv1 = new TV("Samsung QLED 55", 800, "Превосходный телевизор 4K", 10, "Телевизоры", 55, "4K", true, "Dolby Atmos");
const phone2 = new Phone("iPhone 14 Pro", 1000, "Премиальный смартфон", 50, "Телефоны", "Apple", "iPhone 14 Pro", 6.1, 48);

const products = [phone1, laptop1, tv1, phone2];

phone1.displayInfo();
phone1.addToBasket();
phone2.displayInfo();
phone2.addToBasket();
laptop1.displayInfo();
laptop1.addToBasket();
tv1.displayInfo();
tv1.addToBasket();
searchProduct("Samsung QLED 55"); 
showProductsByCategory("Телевизоры");


let sum = sumOfCategory(sumCategory);

sum();
sum("Телефоны");
