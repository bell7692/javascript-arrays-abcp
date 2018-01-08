var chocolateBars = ['snickers' , 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (array, element) {
  [element, ... array];
  var newArr = array;
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
  
}