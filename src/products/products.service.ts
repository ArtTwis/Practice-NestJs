import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './dto/product.model';

@Injectable()
export class ProductsService {
  private products: Product[] = [];

  getAllProducts() {
    return [...this.products];
  }

  getProduct(id: string) {
    const product = this.products.filter((product) => product.id === id);

    if (!product) {
      throw new NotFoundException('Product not found! Try Again...');
    }

    return product;
  }

  insertProduct(title: string, description: string, price: number) {
    const newProduct = new Product(
      Math.floor(Math.random() * 100000) + '',
      title,
      description,
      price,
    );

    this.products.push(newProduct);

    return { id: newProduct.id };
  }
}
