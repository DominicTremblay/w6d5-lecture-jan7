// ES6 Syntax classes

class Customer {
  // data or properties
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._cart = new ShoppingCart();
  }

  // behaviors (methods)

  // getter
  get firstName() {
    return this._firstName;
  }

  // getter
  get lastName() {
    return this._lastName;
  }

  // setter
  set firstName(firstName) {
    this._firstName = firstName;
  }

  set lastName(lastName) {
    this._lastName = lastName;
  }

  getFullName() {
    return `First Name: ${this.firstName} Last Name: ${this.lastName}`;
  }

  addItemToCart(item) {
    this._cart.addProduct(item);
  }

  showCart() {
    console.log(this._cart.getCartContent());
  }
}

class Product {
  constructor(name, quantity, price) {
    this._name = name;
    this._quantity = quantity;
    this._price = price;
  }

  get name() {
    return this._name;
  }

  get quantity() {
    return this._quantity;
  }

  get price() {
    return this._price;
  }
}

class Food extends Product {
  constructor(name, quantity, price, expiryDate) {
    super(name, quantity, price);
    this._expiryDate = expiryDate;
    this._category = 'Food';
  }

  get expiryDate() {
    return this._expiryDate;
  }

  get category() {
    return this._category;
  }
}

class Electronic extends Product {
  constructor(name, quantity, price) {
    super(name, quantity, price);
    this._category = 'Electronics';
  }
  get category() {
    return this._category;
  }
}

class ShoppingCart {
  constructor() {
    this._products = [];
  }

  addProduct(product) {
    this._products.push(product);
  }

  getCartContent() {
    let displayStr = '';

    for (const product of this._products) {
      const options = {
        Food: `Expiry Date: ${product.expiryDate} Category: ${
          product.category
        }`,
        Electronics: `Category: ${product.category}`,
      };
      displayStr += '-'.repeat(35) + '\n';
      displayStr += 'Products in your cart:' + '\n';
      displayStr += '-'.repeat(35) + '\n';
      displayStr += `Product: ${product.name} Quantity: ${
        product.quantity
      } Price: ${product.price} \n`;
      displayStr += `${options[product.category] || ''}  \n`;
    }

    return displayStr;
  }
}

// creating an instance of the class Customer
const customer1 = new Customer('Bob', 'Squarepants');
const customer2 = new Customer('Super', 'Mario');
customer1.addItemToCart(new Food('cheese', '2', '6', new Date()));
customer1.showCart();

customer2.addItemToCart(new Food('chocolate', 10, 5, new Date()));
customer2.addItemToCart(new Electronic('Bluetooth speaker', 1, 300));
customer2.showCart();
