var school = function(name, localGovt, state) {

   var that = {};
   that.name = name;
   that.localGovt = localGovt || '';
   that.state = state || '';

   return that;
}


var university = function(name, localGovt, state, nameOfStreet) {
   var that = school(name, localGovt, state);
   that.nameOfStreet = nameOfStreet || '';
   that.headOfInstitution = 'Vice Chancellor';

   return that;
}

