/*const ru = "Russian23";
const en = "English";

const array = ["Russian", "English"];

array['name'] = "White-russian"
console.log(array);

/*const hello = 'hello JS';

const test = {
    hello,
    key1: 'ttst',
    key2: 15135,
    key3: true,
    key4: ['12', 'test'],

    'ktes jfieq': 'true',
    'test-123': 'test',
};
console.log(test)*/

/*const cart = {
    money: {
        sum: 500,
        currency: 'Руб',
        allowCurrency: ['Рубли', 'Евро'],
        discount: {
            hasDiscount: true,
            value: 30,
        },
    }, 
    items: [{
		title: 'Ручку',
		count: 2,
		price: 100,
	}, {
		title: 'Книгу',
		count: 1,
		price: 300,
	}],
};

const array = [];
array['name'] = true;

cart['name'] = 'John';
console.log(cart);

//console.log(cart.money.discount.value);
//console.log(cart.items[1].title);

// console.log(cart['money']['sum']);
// console.log(cart.money.sum);*/



/*                   5                   */

/*const a = 10;
const b = 5;
let c = 1;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);
console.log(a % b);

c--;
console.log(c);

console.log((2 + 2) * 2)

// 3

console.log('5' + '5');
console.log('Hello' + ' ' + 'world');

console.log('hello' != 'hello');
console.log('hello' !== 'hello');

console.log(+'5');
console.log(+'5' + 5);

const z = -5;
console.log(-z);

const obj = {
    name: 'Alex',
    age: 51,
}

console.log('age' in obj);

// console.log(10 >= 11);
// console.log(10 >= 10);
// console.log(10 >= 9);

// console.log(10 <= 11);
// console.log(10 <= 10);
// console.log(10 <= 9);*/



/*            6            */

/*const a = 1;
const b = 1;


if (a < b) {
    console.log('test');
}
else if (a < b) {
    console.log('test2');
}
else if (a === b) {
    console.log('test3');
}
else {
    console.log('test4');
}

/*if (a === 0 && a === b) {
    console.log('hello');
}*/

/*if (a === 0 || b === 0) {
    console.log('hello');
}

if (!(a === 0)) {
    console.log('hello');
}*/

/*const MIN_AGE = 18;

const userData = {
	name: 'Alex',
	age: 18,
	married: true,
	sex: 'male',
};

/*if (
    userData >= MIN_AGE && 
    userData.sex === 'male' && 
    !userData.married) {
    console.log('Вам доступен контент');
}*/

/*if (userData.name !== 'John' || userData.sex === 'female' ) {
	console.log('Вам доступен контент');
 }*/

 /*if (
	!(userData.age === MIN_AGE && userData.name === 'John')
) {
	console.log('Вам доступен контент');
}*/

/*                7             */

/*const name = 'Alex';

/*if (name === 'Alex') {
     	console.log('Привет Alex');
 }
 else if (name === 'John') {
 	console.log('Привет John');
 }
 else if (name === 'Kate') {
 	console.log('Привет Kate');
 }
 else {
 	console.log('Привет');
 }*/

 /*switch (name) {
    case 'Alex':
        console.log('Привет Alex');
        break;
    case 'John': 
        console.log('Привет John');
        break;
    case 'Kate':
        console.log('Привет Kate');
        break;
    default:
        console.log('Привет');
 }*/

/*const age = (name === 'John' && name !== 'Alex') ? 18 : 20;

/*let age = 0;
if (name === 'John') {
	age = 18;
} else {
	age = 20;
}*/

/*let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Маловато' );
    break;
  case 4:
    alert( 'В точку!' );
    break;
  case 5:
    alert( 'Перебор' );
    break;
  default:
    alert( "Нет таких значений" );
}*/


/*                 8                */

// while, do...while, for

//const arr = [1, 0, 55, 10, 531, 12, 12];

/*console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);*/

// let i = 0;
/*for (let i = 0; i < arr.length; i++) {
    /*if (arr[i] === 55) {
        break;
    }*/
    /*if (arr[1] === 55) {
        continue;
    }
    console.log(arr[i]);
}*/

//let i = 0;

/*while (i < arr.length) {
    console.log(arr[i]);
    i++;
}*/

/*while (i < 0) {
    console.log('test');
}


do {
    console.log('test');
}while(i < 0);

console.log('end');*/





/*                      9                    */

/*const cart = [{
    name: 'Арбуз',
    price: 100,
    count: 1,
}, {
    name: 'Хлеб',
    price: 10,
    count: 2,
}, {
    name: 'Молоко',
    price: 50,
    count: 1,
}];

//let finalPrice = 0;

const name = 'Alex';

let final = 0;

if (name === 'Alex') {
    const product = createProduct('Арбуз', 100, 1);
    const alexCart = [product]; // массив
    
    const debt = 150;

    final = calculateFinalPrice(alexCart);
    final += debt;

    console.log(finalPrice);
}
else if (name === 'John') {
    const product = createProduct('Хлеб', 20, 2);
    const johnCart = [product];
    const debt = 50;

    final = calculateFinalPrice(johnCart);
    final += debt;

    console.log(finalPrice);
}
else{
    const product = createProduct('Молоко', 50, 1);
    const userCart = [product];
    
    final = calculateFinalPrice(userCart);

    console.log(finalPrice);
}

function createProduct(name, price, count)  {
    if (name === '') {
        name = 'Неизвестный продукт';
        console.log('Вы задали неправильное имя продукта');
    }

    if (typeof price !== 'number') {
        price = 0;
        console.log('Вы задали неправильную цену');
    }

    if (typeof count !== 'number') {
        price = 0;
        console.log('Вы задали неправильное количество');
    }

    return {
        name,
        price,
        count,
    }
}




function calculateFinalPrice(cart) {
    let finalPrice = 0;

    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
    
        finalPrice += (product.price * product.count); 
    }

    return finalPrice;
}

calculateFinalPrice('Alex', 12, [12,12,12]);



console,log(final);



/*                       FUNKTIONS                     */

// Click 1
//console.log('Нажали на товар А');
//addProduct();

// Click 2
//console.log('Нажали на товар Б');
//addProduct();


// click 3
//console.log('Нажали на товар В');
//const result = addProduct();

//console.log(result);

/*function addProduct() {
     const isAvailable = isProductAvailable();

    if (isAvailable) {
        const blocked = isBlocked();
    
        if (blocked) {
            console.log('Вы заблокированы');
        }
        else {
            const possible = possibleToDelivery();

            if (possible) {
                console.log('Товар добавлен в корзину');
            }
            else {
                console.log('Нет возможности доставить');
            }
        }

    }
    else {
        console.log('Товара нет в наличии');
    }    
}*/
    
    





/*function calculate() {
    const a = 10;
    const b = 15;

    const result = a + b;
    const result2 = a - b;

    return {one: result, two: result2};
}

const sum = calculate();
//const sum2 = calculate();
//const sum3 = calculate();

//console.log(sum, sum2, sum3);

console.log(sum);




function addProduct() {
    const isAvailable = isProductAvailable();

   if (!isAvailable) {
       console.log('Товара нет в наличии');
       return;
   } 

   const blocked = isBlocked();


       if (blocked) {
           console.log('Вы заблокированы');
           return; // завершение функции, если true
       }

       const possible = possibleToDelivery();

        if (!possible) {
            console.log('Нет возможности доставить');
            return;
        }
}


console.log('Товар добавлен в корзину');

return 'Всё хорошо';*/




/*                                10                       */




/*const cart = [{
    name: 'Арбуз',
    price: 100,
    count: 1,
}, {
    name: 'Хлеб',
    price: 10,
    count: 2,
}, {
    name: 'Молоко',
    price: 50,
    count: 1,
}];

const name = 'John';
let final = 0;


/*if (name === 'Alex') {
	const product = createProduct('Арбуз', 100, 1);
	const alexCart = [product];

	const debt = 150;

	final = calculateFinalPrice(alexCart);
	final += debt;
}
else if (name === 'John') {
	const product = createProduct('Хлеб', 30, 2);
	const johnCart = [product];

	const debt = 50;

	calculateFinalPrice(johnCart, (price, t, t2) => {
        console.log(t2, t2); 
        console.log('Финальная цена', price + debt)
    });
	
}
else {
	const product = createProduct('Молоко', 50, 1);
	const userCart = [product];

	final = calculateFinalPrice(userCart);
}*/


/*function createProduct(name, price, count) {
	if (name === '') {
		name = 'Неизвестный продукт';
		console.log('Вы задали неправильное имя продукта');
	}

	if (typeof price !== 'number') {
		price = 0;
		console.log('Вы задали неправильную цену');
	}

	if (typeof count !== 'number') {
		count = 0;
		console.log('Вы задали неправильное количество');
	}

	return {
		name,
		price,
		count,
	};
}*/

/*function calculateFinalPrice(cart, callback) {
	
        setTimeout(() => {
        let finalPrice = 0;
        for (let i = 0; i < cart.length; i++) {
            const product = cart[i];
    
            finalPrice += (product.price * product.count);
        }

        callback(finalPrice, 'test', 12)
    }, 5000);

}*/




//function add(a, b) {
//    	return a+b;
//};

//const add = (a, b) => {
//    return a+b;
//};

//const add = (a, b) => {
//    console.log('test');
//    return a+b;
//}

//function add(a) {
//    return a + 5;
//}


//const add = a => a + 5;

//console.log(add(5, 10));




/*                              FUNCTIONS 2                    */

// Click 1
//console.log('Нажали на товар А');
//addProduct();

// Click 2
//console.log('Нажали на товар Б');
//addProduct();


// click 3
//console.log('Нажали на товар В');
const result = addProduct();

console.log(result);


/*function calculate() {
    const a = 10;
    const b = 15;

    const result = a + b;
    const result2 = a - b;
    
    return b;

    return {one: result, two: result2};
}*/

//const sum = calculate();
//const sum2 = calculate();
//const sum3 = calculate();

//console.log(sum, sum2, sum3);

//console.log(sum);

function addProduct() {
    const isAvailable = isProductAvailable();

    if (!isAvailable) {
        console.log('Товара не в наличии');
        return;
    }

   const blocked = isBlocked();


    if (blocked) {
        console.log('Вы заблокированы');
        return; // завершение функции, если true
    }

    const possible = possibleToDelivery();

    if (!possible) {
        console.log('Нет возможности доставить');
        return;
    }



     console.log('Товар добавлен в корзину');

     return 'Всё хорошо';


}

function isProductAvailable() {
    const result = true;
}

function isBlocked() {
     	const result = false; // то есть не заблокирован
     	return result;
}

function possibleToDelivery() {
 	const result = true; // то есть доставка возможна
 	return result;
}
    
    
//const calculate2 = () => {
//    const a = 10;
//    const b = 15;

//    return a + b;
//}


function calculate(a, b) {

    const result = a * 2;
    return a + b;
}

const sum = calculate(100, 190);

console.log(sum);

console.log(sum);*/


/*const films1 = {
    title: 'Все фильмы',
    films: [
        {name: 'Хроники Нарнии'},
        {name: 'Человек-паук'},
        {name: 'Что-то ещё'},
    ]
}*/

/*const myFilms = getFilms();

function getFilms(title = 'Все фильмы') {

    return {
        filmTitle: title,
        films: getFilmsArray(),
    };

    return result;
}

function getFilmsArray() {
    const films = [];

    addNewFilm(films, { name: 'Хроники Нарнии' }, 0);
	addNewFilm(films, { name: 'Человек паук' }, 1);
	addNewFilm(films, { name: 'Что-то еще' }, 2);
	addNewFilm(films, { name: 'Плохой фильм' });


    function addNewFilm(film, index) {
        if (index === undefined) {
            console.log('этот фильм не будет добавлен, тк нет индекса')
            return;
        }
    
        films[index] = film;
    }

    return films;
}

console.log(myFilms);

function calc(a, b, logger) {
 	logger('Алекс');


 	return a + b;
 }

  calc(1, 2, function (name) {
 	console.log(name, 'Я вызвалась');
 });


 calc(1, 2, (name) => {
 	console.log(name, 'Я вызвалась');
 });*/

 /*const data = [
    {id: 10, name: 'Alex', money: 1000},
    {id: 11, name: 'John', money: 500},
    {id: 55, name: 'Anna', money: 5500},
 ];

 const alexStr = getUsersMoney({id: 10}, (user) => {
    const str = 'У' + user.name + ' ' + user.money + ' Р';
    
    return str;
 });

console.log(alexStr);

 /*getUsersMoney({id: 10}, (user) => {
    const str = 'John has $' + user.money;
    console,log(str)
 });

 getUsersMoney({id: 10}, (user) => {
    const str = user.name + ' = ' + user.money
    console,log(str)
 });*/

/*function getUsersMoney(userInfo, callback) {
    const id = userInfo.id

    let result = null;

    for (let i = 0; i < data.length; i++) {
        const user = data[i];

        if (user && user.id === id) {
            result = user;
        }
    }
    const str = callback(result);

    return str; 
}*/






       /*                                 11                             */


       /*(function test() {
        console.log('test');
       })();



       const name = 'John';
       let final = 0;
       
       
        if (name === 'Alex') {
        	const product = createProduct('Арбуз', 100, 3);
        	const alexCart = [product];
       
        	const debt = 150;
       
        	final = calculateFinalPrice(alexCart);
        	final += debt;

            console.log('Финальная цена:', final + debt);
        }
        else if (name === 'John') {
        	const product = createProduct('Хлеб', 30, 2);
        	const johnCart = [product];
       
        	const debt = 50;
       
        	//calculateFinalPrice(johnCart, (price) => {
        	//	console.log('Финальная цена:', price + debt);
        	//});

            final = calculateFinalPrice(johnCart);

            console.log('Финальная цена:', final + debt);
        }
        else {
        	const product = createProduct('Молоко', 50, 1);
        	const userCart = [product];
       
        	final = calculateFinalPrice(userCart);
        }
       
       function createProduct(name, price, count) {
           if (name === '') {
               name = 'Неизвестный продукт';
               console.log('Вы задали неправильное имя продукта');
           }
       
           if (typeof price !== 'number') {
               price = 0;
               console.log('Вы задали неправильную цену');
           }
       
           if (typeof count !== 'number') {
               count = 0;
               console.log('Вы задали неправильное количество');
           }
       
           return {
               name,
               price,
               count,
           };
       }
       
       function calculateFinalPrice(cart) {
               let finalPrice = 0;

               if (!cart || cart.length === 0) {
                return finalPrice;
               }
       
               for (let i = 0; i < cart.length; i++) {
                   const product = cart[i];
       
                   finalPrice += (product.price * product.count);
               }
       
               return finalPrice;
       }



//const add = (a) => {
//    return (b) => {
//        return a + b;
//    }
//}

//const func = add();
//func();

/*const log = (time) => {
    return (message) => {
        return time + ' - ' + message;
    }
}

const logWithTime = log('9:00');
const logWithTime2 = log('19:00');


setTimeout(() => {
    const message = logWithTime('Пользователь нажал войти')
    console.log(message);
}, 1000);

setTimeout(() => {
    const message = logWithTime('Пользователь нажал выйти')
    console.log(message);
}, 2000);


//const result = add(10)(15);
//console.log(result);*/





/*                        12                       */

//const button = window.document.querySelector('test1');
//console.log(button);




/*                              13                       */



/*const value = 2;
const value2 = true;
const value3 = 'Строка';

console.log('Привет' + value + ' мир');
console.log(`Привет + ${value} +  мир`);
console.log(`${value}-${value2}:${value3}`);*/

const div = document.querySelector('div');


for (let i = 0; i < div.children.length; i++) {
    const element = div.children[i];

    if (element.tagName === 'UL') {
        console.log('SPAN-ELEMENT');
        element.innerHTML = `
            <ul>
                <li>erste</li>
                <li>zweite</li>
                <li>dritte</li>
            </ul>        
        
        
        `;

    }
    console.log(element);
}


//div.innerHTML = 'Hello world';
//div.textContent = 'Hello world';

console.log(div);




















