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