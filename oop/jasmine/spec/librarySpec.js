'use strict';
  describe("School Class: Create a Parent school class and a child university class, describe its features", function() {

    it("The school should be a type of `object`, and an instance of the `university` class", function() {
      var abuZaria = university('ABU', 'zaria', 'kaduna', 'Tafawa Balewa crescent');
      expect(typeof abuZaria).toEqual(typeof {});
    });

});