'use strict'


//Задача 4. З клавіатури вводиться вік людини. Вивести на екран ким він є (дитиною у садочку, школярем, 
// студентом, працівником, пенсіонером).

// 
let userAge = parseInt(prompt('Скільки Вам років?', '0'));



// 
if (userAge >= 2 && userAge <= 5)
	alert('Ваш вік відповідає віку дитини у садочку')
else if (userAge >= 6 && userAge <= 17)
	alert('Ви є школярем')
else if (userAge >= 18 && userAge <= 22)
	alert('Ви студент')
else if (userAge >= 23 && userAge <= 59)
	alert('Ваш вік відповідає працездатному')
else if (userAge >= 60)
	alert('Ваш вік відповідає пенсійному')
else
	alert('Некоректні дані')

