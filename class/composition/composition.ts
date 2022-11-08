class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number
  ) {}
}

class Delivery {
  constructor(public date: Date) {}
}

class HomeDelivery extends Delivery {
  //@ts-ignore
  constructor(public date: Date, address: string) {
    super(date);
  }
}

class ShopDelivery extends Delivery {
  // @ts-ignore
  constructor(shopId: number) {
    super(new Date());
  }
}

type DeliveryOptions = HomeDelivery | ShopDelivery;

class Cart {
  private products: Product[] = [];
  private delivery: HomeDelivery | ShopDelivery;

  public addProduct(product: Product): void {
    this.products.push(product);
  }

  public deleteProduct(productId: number): void {
    this.products = this.products.filter((p: Product) => p.id !== productId);
  }

  public getSum(): number {
    //@ts-ignore
    return this.products.reduce((acc: Product, current: Product) => acc.price + current.price);
  }

  public addDelivery(delivery: DeliveryOptions) {
    this.delivery = delivery;
  }

  public checkout() {
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