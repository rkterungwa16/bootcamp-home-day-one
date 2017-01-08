
function dataTypes(value) {
   if (value === null || value === undefined) {
      return 'no value';
   }
   else if (typeof value === 'boolean') {
      return value;
   }
}
