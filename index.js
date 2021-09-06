function reverseString(str) {
	var newString = "";
	for (var i = str.length - 1; i >= 0; i--) {
		newString += str[i];
	}
	return newString;
}


reverseString("Good Day");

function reverseStringCheck(str) {
	if (!str || str.length < 2) {
		return 'Not a valid input';
	}
	const backwardsArray = [];
	const totalItems = str.length - 1;
	for (let i = totalItems; i >= 0; i--) {
		backwardsArray.push(str[i]);
	}

	return backwardsArray.join('');
}




//Built-in methods for reversing a string
function reverseStringSimple(str) {
	return str.split('').reverse().join('');
}

//ES6 format
const reverse4 = str => str.split('').reverse().join('');

//Spread Operator 
const reverse5 = str => [...str].reverse().join('');

reverseString("Hello");
reverseStringCheck("Good");
reverseStringSimple("Hello, there");
reverse4("Why, Hello");
reverse5("The Dark Side");