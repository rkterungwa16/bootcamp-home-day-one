'use strict'

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var myApp = require('../app/library.js');

describe("Case for non numerical inputs", function() {

  it("should return 'wrong input type' for []" , function() {
    expect(myApp.getPrimes([])).to.equal('wrong input type');
  }); 

  it("should return 'wrong input type' for '5'" , function() {
    expect(myApp.getPrimes('5')).to.equal('wrong input type');
  });

  it("should return 'wrong input type' for 'seven'" , function() {
    expect(myApp.getPrimes('seven')).to.equal('wrong input type');
  });

  it("should return 'wrong input type' for boolean" , function() {
    expect(myApp.getPrimes(true)).to.equal('wrong input type');
  });

  it("should return 'wrong input type' for a function callback" , function() {
    var one = function () {};
    expect(myApp.getPrimes(one)).to.equal('wrong input type');
  });

  it("should return 'wrong input type' for an object" , function() {
    var one = {};
    expect(myApp.getPrimes(one)).to.equal('wrong input type');
  });

});

describe("Case for non integer numerical inputs", function() {

      it("should return 'wrong input type' for 6.1", function() {
       expect(myApp.getPrimes(6.1)).to.equal('wrong input type');
    });

});

describe("Case for expected outputs", function() {

      it("should return [] for 0", function() {
      expect(myApp.getPrimes(0)).to.eql([]);
    });

      it("should return [] for 1", function() {
      expect(myApp.getPrimes(1)).to.eql([]);
    });

      it("should return [ 2, 3, 5, 7, 11 ] for 11", function() {
      expect(myApp.getPrimes(11)).to.eql([ 2, 3, 5, 7, 11 ]);
    });

      it("should return [ 2 ] for 2", function() {
      expect(myApp.getPrimes(2)).to.eql([ 2 ]);
    });

      it("should return [ 2, 3 ] for 3", function() {
      expect(myApp.getPrimes(3)).to.eql([ 2, 3 ]);
    });

      it("should return [ 2, 3 ] for 4", function() {
      expect(myApp.getPrimes(4)).to.eql([ 2, 3 ]);
    });

      it("should return [ 2, 3, 5] for 6", function() {
      expect(myApp.getPrimes(6)).to.eql([ 2, 3, 5 ]);
    });

});