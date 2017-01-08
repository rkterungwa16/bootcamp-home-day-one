'use strict'

module.exports = {

	getPrimes: function (n) {
		var arrayOfPrimes = [];

		if (Number.isInteger(n) === false) {
           return 'wrong input type';
        }

        for (var i = 0; i <= n; i++) {

          if (this.isPrime(i)) {
            arrayOfPrimes.push(i);
          }
       }
       return arrayOfPrimes;

	},

	isPrime: function (number) {

        if ( number < 2) return false;
        for (var i=2; i<number; i++) {
            if (number % i === 0){
               return false;
            }
        }
        return true;
    }
}