'use strict'

// З клавіатури вводиться назва категорії водія(А - мотоцикл, В - легковий автомобіль,
// С - вантажний автомобіль).Вивести на екран назву транспортного засобу, яким він може керувати.

let driverCategory = prompt('Введіть категорію водійського посвідчення літерами латинського алфавіту', 'A');
let result

switch (driverCategory) {
	case 'A':
	case 'a': result = 'Ви можете керувати мотоциклом'
		break;
	case 'B':
	case 'b': result = 'Ви можете керувати легковим автомобілем'
		break;
	case 'C':
	case 'c': result = 'Ви можете керувати вантажним автомобілем'
		break;

	default: result = 'категорія не існує'
		break;
}
alert(result)
