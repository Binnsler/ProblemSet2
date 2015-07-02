
// Problem 1 //

// var firstReverse = function(string){
// 	var newString = string.split('').reverse();
// 	return newString.join('')

// }

// console.log(firstReverse('Jamie'))



// Problem 2 //

// var swapCase = function(string){
// 	var returnArray = [];
// 	var splitArray = string.split('').forEach(function(element){
// 		if(element === element.toUpperCase()){
// 			returnArray.push(element.toLowerCase());
// 		}
// 		else{
// 			returnArray.push(element.toUpperCase());
// 		}
// 	});
// 	return returnArray.join('');
// }

// console.log(swapCase('Francesca Blume'))



// Problem 3 //

var letterCount = function(string){
	var most = 0;
	var winner = '';
	var stringArray = string.split(' ');
	stringArray.forEach(function(word){
		for (var i = 0; i < word.length; i++) {
			var numMatches = word.match('/'+word[i]+'/'g).length;
			if(numMatches > most){
				most = numMatches;
				winner = word;
			}
			console.log(word, i, word[i], numMatches, most, winner);
		}
	})
	return winner;

}

console.log(letterCount('Today is the greatest day ever'))