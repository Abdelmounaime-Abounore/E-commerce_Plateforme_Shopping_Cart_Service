import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';
import { Cart, CartDocument } from './entities/cart.entity';
import { Product, ProductDocument } from 'src/products/entities/product.entity';

@Injectable()
export class CartService {
  constructor(
    @InjectModel(Cart.name) private cartModel: Model<CartDocument>,
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  // async addProductToCart(cartId: string, productId: string, quantity: number): Promise<Cart> {
  //   try {
  //     const cart = await this.cartModel.findById(cartId);
  //     const product = await this.productModel.findOne({ _id: productId });
  
  //     if (!cart) {
  //       throw new NotFoundException('Cart not found');
  //     }
  //     if (!product) {
  //       throw new NotFoundException('Product not found');
  //     }

  //     if(product.quantity < quantity) {
  //       throw new BadRequestException('Invalid quantity');
  //     }

  //     product.quantity = quantity
  //     cart.products.push(product); 
  //     await cart.save();
  
  //     return cart.toJSON();
  //   } catch (error) {
  //     console.error(error);
  //     throw new InternalServerErrorException('Something went wrong');
  //   }
  // }

  // async deleteProductFromCart(cartId: string, productId: string): Promise<Cart> {
  //   try {
  //     const cart = await this.cartModel.findById(cartId);
  //     if (!cart) {
  //       throw new NotFoundException('Cart not found');
  //     }
  
  //     // const productIndex = cart.products.findIndex(product => product._id.toString() === productId);
  //     // if (productIndex === -1) {
  //     //   throw new NotFoundException('Product not found in the cart');
  //     // }
  //     // const productIds = cart.products.map(product => product._id.toString());
  //     // console.log(productIds);
      
  
  //     // const deletedProduct = cart.products.splice(productIndex, 1); // Remove the product from the array
  
  //     // Perform any other necessary logic, such as updating quantities or additional operations...
  
  //     await cart.save(); // Save the changes to the cart
  
  //     console.log(`Product with ID ${productId} deleted from cart with ID ${cartId}`);
  
  //     return cart.toJSON(); // Return the updated cart
  //   } catch (error) {
  //     console.error(error);
  //     if (error instanceof NotFoundException) {
  //       throw error;
  //     }
  //     throw new InternalServerErrorException('Something went wrong');
  //   }
  // }

  // async updateProductQuantity(cartId: string, productId: string, newQuantity: number): Promise<Cart> {
  //   try {
  //     const cart = await this.cartModel.findById(cartId);
  //     if (!cart) {
  //       throw new NotFoundException('Cart not found');
  //     }
      

  //     const productIndex = cart.products.findIndex(product => product._id === productId);
  //           if (productIndex === -1) {
  //       throw new NotFoundException('Product not found in the cart');
  //     }
  
  //     const product = await this.productModel.findOne({ _id: productId });
  //     if(product.quantity < newQuantity) {
  //       throw new BadRequestException('Invalid quantity');
  //     }
  //       cart.products[productIndex].quantity = newQuantity;
  //       await cart.save();
  
  //     return cart.toJSON();
  //   } catch (error) {
  //     console.error(error);
  //     if (error instanceof NotFoundException) {
  //       throw error;
  //     }
  //     throw new InternalServerErrorException('Something went wrong');
  //   }
  // }
}
