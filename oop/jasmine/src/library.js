var school = function(name, localGovt, state) {

   var that = {};
   that.name = name;
   that.localGovt = localGovt || '';
   that.state = state || '';

   return that;
}


var university = function(name, localGovt, state, nameOfStreet) {
	// Private members
   var _programmes = {
      undergrad: 'Undergraduate',
      postgrad: 'Postgraduate'
   }

   var that = school(name, localGovt, state);
   that.nameOfStreet = nameOfStreet || '';
   that.headOfInstitution = 'Vice Chancellor';

   that.returnProgrammes = function() {
      return _programmes;
   }

   return that;
}

