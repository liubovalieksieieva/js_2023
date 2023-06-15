'use strict'


//Задача 4. З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, 
// студентом, працівником, пенсіонером).

// 
const userAge = parseInt(prompt('Скільки Вам років?', '0'));
let result

if (userAge < 1 || userAge > 150)
	result = 'Некоректний вік'
else if (userAge <= 6)
	result = 'Ваш вік відповідає віку дитини у садочку'
else if (userAge <= 17)
	result = 'Ви є школярем'
else if (userAge <= 22)
	result = 'Ви студент'
else if (userAge <= 60)
	result = 'Ваш вік відповідає працездатному'
else result = 'Ваш вік відповідає пенсійному'

alert(result)
