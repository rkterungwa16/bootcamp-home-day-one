describe("Data types tests ", function() {
  describe("Case for some falsy values", function() {

    it("should return 'no value' for null", function() {
      expect(dataTypes(null)).toEqual('no value');
    });

    it("should return 'no value' for undefined", function() {
      expect(dataTypes(undefined)).toEqual('no value');
    });

    it("should return false for `false`", function() {
      expect(dataTypes(false)).toBe(false);
    });

  });

  describe("Case for booleans", function() {

    it("should return true for `true`", function() {
      expect(dataTypes(true)).toBe(true);
    });

  });

  describe("Case for Numbers", function() {

    it("should return 'less than 100' for 44", function() {
      expect(dataTypes(44)).toBe('less than 100');
    });

    it("should return 'more than 100' for 144", function() {
      expect(dataTypes(144)).toBe('more than 100');
    });

    it("should return 'equal to 100' for 100", function() {
      expect(dataTypes(100)).toBe('equal to 100');
    });


  });

});