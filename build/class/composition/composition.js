"use strict";
class Product {
    constructor(id, title, price) {
        this.id = id;
        this.title = title;
        this.price = price;
    }
}
class Delivery {
    constructor(date) {
        this.date = date;
    }
}
class HomeDelivery extends Delivery {
    //@ts-ignore
    constructor(date, address) {
        super(date);
        this.date = date;
    }
}
class ShopDelivery extends Delivery {
    // @ts-ignore
    constructor(shopId) {
        super(new Date());
    }
}
class Cart {
    constructor() {
        this.products = [];
    }
    addProduct(product) {
        this.products.push(product);
    }
    deleteProduct(productId) {
        this.products = this.products.filter((p) => p.id !== productId);
    }
    getSum() {
        //@ts-ignore
        return this.products.reduce((acc, current) => acc.price + current.price);
    }
    addDelivery(delivery) {
        this.delivery = delivery;
    }
    checkout() {
        if (this.products.length === 0) {
            throw new Error('No products!');
        }
        if (!this.delivery) {
            throw new Error('No delivery options!');
        }
        return { success: true };
    }
}
const cart = new Cart();
cart.addProduct(new Product(123, 'Infinity Q50', 16000));
cart.addProduct(new Product(456, 'Mercedes CLA 250', 18000));
cart.addProduct(new Product(789, 'Mazda 3', 5000));
cart.addDelivery(new HomeDelivery(new Date(), '3rd Proective lane, 6'));
console.log(cart);
cart.deleteProduct(789);
console.log('get sum: ', cart.getSum());
console.log('checkout: ', cart.checkout());
console.log(cart);
