#Notes taken from Pivotal Labs blog on constructors and prototypes and maryrosecook exercises

https://blog.pivotal.io/labs/labs/javascript-constructors-prototypes-and-the-new-keyword


The `new` keyword was written into JS to act more like Java.

##What is a constructor?

A function can be written to be used as a constructor or to be called as a normal function, or be used either way.

A constructor is used with the new key word.

```
var Fridge = function Fridge() {
  //..
}

var fridge = new Fridge();
```

when `new Fridge()` is called it does four things...

1. creates a new Fridge object: `{}`
2. it sets the `constructor` property of object to `Vehicle`
this is not an ordinary property and wont show up if you enumerate the properties. you can't set the property of constuctor.

```
fridge;  // {}


var Beer = function Beer() {};
fridge.constructor = Beer;

fridge; // { constructor: function Fridge() }
fridge.constructor == Beer; // true
fridge instanceof Beer // false
fridge instanceof Fridge // true
```

The underlying, built in constructor property cannot be set manually. It only can be set with the `new` keyword.

3. it sets up the object to delegate to Fridge.prototype

  a function is just a special of object and like any object a function can have properties. Functions automatically get a property called `prototype`, which is just an empty object.

  when an object gets created, it inherits all of the properties of it's constructor's prototype.

```
Fridge.prototype.eggCount = 5;
var fridge = new Fridge;
fridge.eggCount; // 5
```

the `fridge` instance picked up the `eggCount` from `Fridge` prototype.

this "inheritance" is more than simply copying properties to the new objects. The object is setup to delegate any properties which have not been explicitly set up to its constructor's prototype.

we can change the prototype and still see the changes in the instanceof

```
Fridge.prototype.eggCount = 5;
var fridge = new Fridge;
fridge.eggCount; // 5
Fridge.prototype.eggCount = 8;
fridge.eggCount; // 8
```

but we can always override it without the `.prototype`

```
Fridge.prototype.eggCount = 5;
var fridge = new Fridge;
fridge.eggCount; // 5
Fridge.prototype.eggCount = 8;
fridge.eggCount; // 8
fridge.eggCount = 6;
fridge.eggCount // 6
(new Fridge()).eggCount // 8

```

**You can also assign methods to prototype, a method is just a function assigned to a property**

```
Fridge.prototype.turnOn = function turnOn () {"on!"}
fridge.turnOn(); // "on!"
```


4. it calls Fridge() in the context of the new object.
inside the function, `this` is set to the object we're constructing.

```
var Fridge = function Fridge(brand) {
  this.constructor; // function Fridge()
  this.brand = brand;
}
(new Fridge("Hotpoint")).brand; // "hotpoint"
```

don't return anything from constructor functions.

##Writing a class in Javascript

```
var Vehicle = function Vehicle(color) {
  // Initialization
  this.color = color;
}

// Instance methods
Vehicle.prototype = {
  go: function go() {
    return "Vroom!";
  }
}
```

##Subclassing

```
var Car = function() {};
Car.prototype = new Vehicle("tan");
Car.prototype.honk = function honk() { return "BEEP!"};
var car = new Car();
car.honk(); // "BEEP!"
car.go(); // "Vroom!"
car.color; // "tan"
car instanceof Car; //true
car instanceof Vehicle; //true
```
