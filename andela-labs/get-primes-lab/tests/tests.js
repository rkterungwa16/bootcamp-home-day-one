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