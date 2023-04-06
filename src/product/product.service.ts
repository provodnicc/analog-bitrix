import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepo: Repository<Product>
  ){}

  async create(createProductDto: CreateProductDto) {
    const product = await this.productRepo.save(createProductDto)
    return product
  }

  async findAll() {
    const products = await this.productRepo.find()
    return products
  }

  async findOneByCode(code: number){
    const product = await this.productRepo.findOneBy({code: code})
    if(!product){
      throw new HttpException('на найдено', HttpStatus.BAD_REQUEST)
    }
    return product
  }

  async findOne(id: number) {
    const product = await this.productRepo.findOneBy({id: id})
    return product
  }

  async update(id: number, updateProductDto: UpdateProductDto) {
    const product = await this.productRepo.update(id, updateProductDto)
    return product
  }

  async remove(id: number) {
    const product = await this.findOne(id)
    return await this.productRepo.remove(product)
  }
}
