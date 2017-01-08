
function getPrimes(n) {

	if (Number.isInteger(n) === false) {
		return 'wrong input type';
	}
	else{
		var arrayOfPrimes = []
	    for (var i = 0; i <= n; i++) {

		    if (isPrime(i)) {
			   arrayOfPrimes.push(i);
		    }
	    }
	    return arrayOfPrimes;
	}
	
}

function isPrime (num) {
	if ( num < 2) return false;
	for (var i=2; i<num; i++) {
		if (num%i === 0){
			return false;
		}
	}
	return true;
}
