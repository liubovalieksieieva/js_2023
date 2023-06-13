'use strict'

//Задача 2. З клавіатури вводиться ціна товару і кількість грошей.Якщо грошей не вистачає то відмовляємо 
// у покупці, інакше, якщо ще залишаються гроші, то пропонуємо купити лотерею за 4 грн.

// Крок 0-1

let productPrice = parseFloat(prompt('Введіть ціну товару', '0.0'));
let amountOfMoney = parseFloat(prompt('Введіть кількість грошей, яку Ви бажаєте сплатити', '0.0'));
let balance = parseFloat(amountOfMoney - productPrice);
let lotteryPrice = 4;
// Крок 2-3 Розвязок і виведення
if (productPrice > amountOfMoney) {
	alert('Вибачте, ціна товару вища за наявні кошти')
} else {
	if (balance >= lotteryPrice)
		confirm(`У Вас залишилося ${balance.toFixed(2)} гривень, бажаєте придбати лотерею за 4 гривні?`);
	alert('Товар успішно сплачений! Дякуємо за покупку!')
}


