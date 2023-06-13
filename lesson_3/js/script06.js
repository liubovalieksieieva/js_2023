'use strict'

//  Задача 6ю З клавіатури вводиться номер дня тижня.Вивести на екран назву дня.

let numberWeekDay = parseInt(prompt('Введіть номер дня тижня', '0'));
let result

switch (numberWeekDay) {
	case 1: result = 'Monday'
		break;
	case 2: result = 'Tuesday'
		break;
	case 3: result = 'Wednesday'
		break;
	case 4: result = 'Thursday'
		break;
	case 5: result = 'Friday'
		break;
	case 6: result = 'Saturday'
		break;
	case 7: result = 'Sunday'
		break;

	default: result = 'Не вірно введено число'
		break;
}
alert(result)
