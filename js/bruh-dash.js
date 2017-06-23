var global = window || GLOBAL;

/****************************************************************************************
 * Function signatures have been intentionally left out of the comments describing what *
 * each function does so that you can have practice looking up documentation. Please    *
 * Reference the documentation at [ https://lodash.com/docs/4.17.4 ] You should have    *
 * documentation up in a browser window at all times when working on projects!          *
 ****************************************************************************************/

 global.bruhdash = {

  // returns the first element of an array
  first: function(array) {
    return array.shift();
  },

  /* this works too! */
  // first: function (array) {
  //   return array[0];
  // },

  // returns the last element of an array
  last: function (array) {
    return array.pop();
  },

  // returns the index of the first matching element from left to right
  indexOf: function (array, n) {
    for (i = 0; i < array.length; i++) {
      if (n === array[i]) {
        return i;
      }
    }
    return -1;
  },

  // returns the index of the first matching element from right to left
  lastIndexOf: function (array, n) {
    for (var i = array.length - 1; i >= 0; i--) {
      if (array[i] === n) {
        return i;
      }
    }
    return -1;
  },

  // returns an array with all elements except for the last element
  initial: function (array) {
    array.pop();
    return array;
  },

  // returns an array with all falsey values removed
  compact: function(array) {
    return array.filter(Boolean);
},

  // creates a slice of an array from the start index up to but not including the end index
  slice: function (array, x, y) {
    var res = [];
    for (i = x; i < y; i++) {
      res.push(array[i]);
    }
    return res;
  },

  // returns a slice of array with n elements dropped from the beignning
  drop: function(array, n){
    var res = [];
    for (i = 0; i < array.length; i++) {
      if (i > n - 1) {
        res.push(array[i]);
      } else if(n === undefined){
        array.shift();
        return array;
      }
    }
    return res;
  },

  // returns a slice of array with n elements dropped from the end
  dropRight: function(array, n) {
      if (n === 0) {
        return array;
      } else if (n === undefined){
        array.pop();
        return array;
      } else {
        array.splice(array.length - n, n);
        return array;
      }
  },

  // creates a slice of an array with n elements taken from the beginning
  take: function (array, n) {
    if (n > array.length) {
      return array;
    } else if (n === 0) {
      array = [];
      return array;
    } else if (n === undefined) {
      return array.slice(0,1);
    } else {
      return array.slice(0, n);
    }

  },

  // creates a slice of an array with n elements taken from the end
  takeRight: function (array, n) {
    if (n > array.length) {
      return array;
    } else if (n === 0) {
      array = [];
      return array;
    } else if (n === undefined) {
      return array.splice(array.length - 1, 1);
    } else {
      return array.splice(array.length - n, n);
    }
    console.log(array.pop());
  },

  // fills elements of array with specified value from the start index
  // up to but not including the end index
  fill: function() {

  },

  // removes all given values from an array
  pull: function () {

  },

  // removes elements of an array corresponding to the given indices
  pullAt: function () {

  },

  // creates an array excluding all the specified values
  without: function() {

  },

  // returns an array with specified values excluded
  difference: function() {

  },

  /*******************
   *  STRETCH GOALS! *
   *******************/

  // creates an array of grouped elements
  zip: function () {

  },

  // creates an array of grouped elements in their pre-zip configuration
  unzip: function () {

  },

  // creates an array of elements into groups of length of specified size
  chunk: function(){

  },

  // iterates over elements of a collection and invokes iteratee for each element
  // Note: this should work for arrays and objects
  forEach: function() {

  },

  // creates an array of values by running each element in collection thru the iteratee
  // Note: this should work for arrays and objects
  map: function() {

  },

  /*************************
   *  SUPER STRETCH GOALS!  *
   *************************/

  // iterates over elements of a collection and returns all elements that the predicate returns truthy for
  // Note: this should work for arrays and objects
  filter: function() {

  },

  // Reduces the collection to a value which is the accumulated result of running each element
  // in the collection through an iteratee
  // Note: this should work for arrays and objects
  reduce: function() {

  }
};