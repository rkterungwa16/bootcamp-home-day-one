
function dataTypes(value) {
   if (value === null || value === undefined) {
      return 'no value';
   }
   else if (typeof value === 'boolean') {
      return value;
   }

   else if (typeof value === 'number' && value < 100) {
      return 'less than 100';
   }

   else if (typeof value === 'number' && value > 100) {
      return 'more than 100';
   }
   else if (typeof value === 'number' && value === 100) {
      return 'equal to 100';
   }
}
