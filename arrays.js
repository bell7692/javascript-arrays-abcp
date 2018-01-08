var chocolateBars = ['snickers' , 'hundred grand', 'kitkat', 'skittles'];

function addElementToBeginningOfArray (array, element) {
  var newArr = [element, ... array];
  return newArr;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;
  
}

function addElementToEndOfArray(array, element)  {
  
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}
function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array) {
  
}
function destructivelyRemoveElementFromEndOfArray(array) {
  array.pop();
  return array;
}
function removeElementFromEndOfArray(array) {
  
}