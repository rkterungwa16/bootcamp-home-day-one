'use strict';
  describe("School Class: Create a Parent school class and a child university class, describe its features", function() {

    it("The school should be a type of `object`, and an instance of the `university` class", function() {
      var abuZaria = university('ABU', 'zaria', 'kaduna', 'Tafawa Balewa crescent');
      expect(typeof abuZaria).toEqual(typeof {});
    });

    it("The school state and name should be a property of the school", function() {
      var abuZaria = university('ABU', 'zaria', 'kaduna', 'Tafawa Balewa crescent');
      expect(abuZaria.name).toBe('ABU');
      expect(abuZaria.state).toBe('kaduna');
    });

    it("The university should have an undergraduate or postgraduate program", function() {
      var abuZaria = university('ABU', 'zaria', 'kaduna', 'Tafawa Balewa crescent');
      expect(abuZaria.returnProgrammes().undergrad).toBe('Undergraduate');
      expect(abuZaria.returnProgrammes().postgrad).toBe('Postgraduate');
    });

    it("The school shoud have a Hall and an Auditorium ", function() {
      var abuZaria = university('ABU', 'zaria', 'kaduna', 'Tafawa Balewa crescent');
      expect(abuZaria.returnFacilities().hall).toBe('Auditorium');
      expect(abuZaria.returnFacilities().library).toBe('Library');
    });

});