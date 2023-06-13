'use strict'

// Задача 7. З клавіатури вводиться номер місяця.Вивести до якої пори він відноситься

let numMonth = parseInt(prompt('Введіть номер місяця'));
let result

switch (numMonth) {
	case 12:
	case 1:
	case 2: result = 'This month is winter'
		break;
	case 3:
	case 4:
	case 5: result = 'This month is spring'
		break;
	case 6:
	case 7:
	case 8: result = 'This month is summer'
		break;
	case 9:
	case 10:
	case 11: result = 'This month is autumn'
		break;

	default: result = 'Не вірні дані, такого місяця не існує'
		break;
}
alert(result)