'use strict'

var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var myApp = require('../app/library.js');

describe("Case for non numerical inputs", function() {

  it("should return 'wrong input type' for []" , function() {
    expect(myApp.getPrimes([])).to.equal('wrong input type');
  }); 

});