import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './dto/product.model';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  allProducts(): Product[] {
    return this.productsService.getAllProducts();
  }

  @Get(':id')
  getProduct(@Param('id') id: string): Product[] {
    return this.productsService.getProduct(id);
  }

  // @Body() productBody: {
  //     title: string,
  //     description: string,
  //     price: number
  // }
  @Post()
  addProduct(
    @Body('title') productTitle: string,
    @Body('description') productDescription: string,
    @Body('price') productPrice: number,
  ): { id: string } {
    return this.productsService.insertProduct(
      productTitle,
      productDescription,
      productPrice,
    );
  }
}
