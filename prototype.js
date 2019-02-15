function Person(firstName, lastName) {
  // data or properties
  this._firstName = firstName;
  this._lastName = lastName;
  // this._cart = new ShoppingCart();
}

function Customer(firstName, lastName) {
  // Calling the Person constructor
  Person.call(this, firstName, lastName);
  this._cart = [];
}

// Customer inherits from Person
Customer.prototype = Person.prototype;

Person.prototype.getFullName = function() {
  return `First Name: ${this._firstName} Last Name: ${this._lastName}`;
};

Person.prototype.initials = function() {
  return `${this._firstName[0]}${this._lastName[0]}`;
};

const customer1 = new Customer('Bob', 'Squarepants');
console.log(customer1.getFullName());
