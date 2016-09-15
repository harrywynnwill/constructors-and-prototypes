//Question 1

// What happens if you rename CountModel to countmodel? Does this have any ramifications?

function CountModel() {
  this._count = 0;
};

CountModel.prototype = {
  count: function() {
    return this._count;
  },

  set: function(count) {
    this._count = count;
  }
};

var countModel = new CountModel();
countModel.set(5);
// console.log("count is", CountModel());


//Question 2
function CountModel() {
  this._count = 0;
};

CountModel.prototype = {
  count: function() {
    return this._count;
  },

  // What happens if you rename `set` to `_set` (and change
  // `countModel.set(5)` below to `countModel._set(5)`)?
  _set: function(count) {
    this._count = count;
  }
};

var countModel = new CountModel();
countModel._set(5);
//console.log("count is", countModel.count());


//Question 3

function CountModel() {
  this._count = 0;

  // What happens if you uncomment the line below. Why does this happen?

  //Answer - you should never return from a constructor function.
   return {};
};

CountModel.prototype = {
  count: function() {
    return this._count;
  },

  set: function(count) {
    this._count = count;
  }
};

var countModel = new CountModel();
countModel.set(5);
// console.log("count is", countModel.count());

//Question 4


function CountModel() {
  this._count = 0;
};

CountModel.prototype = {
  count: function() {
    return this._count;
  },

  set: function(count) {
    this._count = count;
  }
};

// What happens if you omit the `new` keyword in the next line? Why?
// new access the constructor to make an instance of the object

var countModel = new CountModel();
countModel.set(5);
//console.log("count is", countModel.count());


//Question 5

function CountModel() {
  this._count = 0;
};

CountModel.prototype = {
  count: function() {
    return this._count;
  },

  set: function(count) {
    this._count = count;
  }
};

var countModel = new CountModel();

// What happens if you add this code? Why?

// you are overriding the prototype
countModel.set = function() {
  return "hello";
};

countModel.set(5);

//console.log("count is", countModel.count());

// Question 6

function CountModel() {
  this._count = 0;
};

CountModel.prototype = {
  count: function() {
    return this._count;
  },

  set: function(count) {
    this._count = count;
  }
};

var countModel = new CountModel();
countModel.set(5);
console.log("count is", countModel.count());

// Bonus research project. Can you find the property name below that
// makes the statement log `true`?
 console.log(countModel["__proto__"] === CountModel.prototype);
