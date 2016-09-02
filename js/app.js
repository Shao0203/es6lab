'use strict';
/*
//let

if (true) {
	var fruit = 'apple';
	let vege = 'mushroom';
}

console.log(fruit);console.log(vege);
*/

/*
//const

// const color = ['red']
// console.log(color)
// color.push('green','blue')
// console.log(color)
*/


// function breakfast() {
// 	return ['cake1', 'coffee2', 'apple3'];
// }

// var tmp = breakfast(),
// 	dessert = tmp[0], drink = tmp[1], fruit = tmp[2];

// let [dessert, drink, fruit] = breakfast();
// console.log(dessert, drink, fruit);

// function food() {
// 	return {dessert: 'cake', drink: 'milk', fruit: 'pear'};
// }

// let {dessert: _1, drink: _2, fruit: $3}
// 	= food();

// console.log(_1,_2,$3);
// alert(typeof _1)


// let fruit = 'apple', drink = 'water';
// let lunch = `today lunch is ${fruit} and ${drink} .`;
// console.log(lunch.includes('!'))


// function food(fruit='pear', drink='milk') {
// 	return `${fruit} , ${drink}`;
// }

// var food = food();
// console.log(food)

// let fruit = ['apple','pear'];
// let food = ['cake',...fruit];
// // alert(...food[2])
// console.log(food)
// console.log(...food)

// function food(dessert,drink,...rest) {
// 	console.log(dessert,drink,...rest);
// }

// food('cake','water','pear','apple','meat')

// console.log(food.name)

// let lunch = (num1,num2) => (num1 + num2);
// var sum = (num1, num2) => {
// 	if (num1 < num2) {
// 		return num2 - num1;
// 	} else {
// 		return num2 + num1;
// 	}
// };
// console.log(sum(6,5));

// let dessert = 'cake', drink = 'wine';
// let food = {
// 	dessert,
// 	drink,
// 	run() {
// 		return this.dessert + '|' + this.drink;
// 	}
// }
// console.log(food)
// console.log(food.run())

// var lunch = {
// 	dessert: 'cake',
// 	fruit: 'pear'
// };
// var food = {
// 	fruit: 'apple',
// 	drink: 'tea'
// }
// Object.assign(
// 	lunch,
// 	food
// );
// console.log(lunch)
// console.log(food)

// function* chef() {
// 	yield 'tomato';
// 	yield 'egg';
// }

// let cook = chef();

// console.log(cook.next());
// console.log(cook.next());
// console.log(cook.next());


// class Chef {
// 	constructor(lunch) {
// 		this.food = lunch;
// 		this.dish = [];
// 	}

// 	get menu() {
// 		return this.dish;
// 	}

// 	set list(integredient) {
// 		this.dish.push(integredient);
// 	}

// 	static cook(dinner) {
// 		console.log(dinner +'!');
// 	}
// }

// let user = new Chef();
// console.log(user.list = 'tomato');
// console.log(user.list = 'egg');
// console.log(user.menu);

// Chef.cook('meat');

// let box = new Set('abc');
// box.add('4d');
// box.delete('a');

// console.log(box);
// console.log(box.size);
// console.log(box.length);
// console.log(box.has('4d'))
// box.forEach(box => {
// 	console.log(box);
// })
// box.clear();
// console.log(box)


// let food = new Map();

// let fruit = {}, cook = function(){}, drink = 'water';
// food.set(fruit,'apple');
// food.set(cook,'knife');
// food.set(drink,'milk');
// console.log(food)
// console.log(food.size);
// console.log(food.get(fruit))














