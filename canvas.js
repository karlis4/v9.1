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
