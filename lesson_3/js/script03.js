'use srtict'

// Задача 3. Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби.

// Крок 0-1
let min = 1, max = 5;
let someRandomNum;
let result = parseInt(prompt('Випадковим чином генерується число від 1 до 5. Спробуйте вгадати число за 2 спроби', '0'));


// Розв"язок
someRandomNum = min + Math.floor(Math.random() * (max - min + 1));

if (someRandomNum === result)
	alert('Вірно!')
else {
	alert('Невірно, спробуйте ще!')
	result = parseInt(prompt('Спроба 2', '0'))
	if (result === someRandomNum)
		alert('Супер! Ви вгадали!')
	else
		alert(`Нажаль, випадкове число було ${someRandomNum}`)
}





