"use strict"

// Задача 1.  З клавіатури вводяться імена двох дітей та кількість у них цукерок.Вивести не екран
//     ім’я тієї дитини, у якої кількість цукерок є більшою, або вивести, що кількість однакова.

// Крок 0-1. Змінні, введення даних
let firstChildName = prompt('Введіть ім\'я першої дитини', 'name');
let numOfCandiesFirstChild = parseInt(prompt(`Введіть кількість цукерок ${firstChildName}`, '0'));
let secondChildName = prompt('Введіть ім\'я другої дитини', 'name');
let numOfCandiesSecondChild = parseInt(prompt(`Введіть кількість цукерок ${secondChildName}`, '0'));

// Крок 2. Розв"язок
if (numOfCandiesFirstChild > numOfCandiesSecondChild)
	alert(`Більше цукерок має ${firstChildName}`)
else
	if (numOfCandiesFirstChild === numOfCandiesSecondChild)
		alert('У дітей однакова кількість цукерок')
	else
		alert(`Більше цукерок має ${secondChildName}`)



