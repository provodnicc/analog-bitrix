import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductService } from 'src/product/product.service';
import { Repository } from 'typeorm';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { Order } from './entities/order.entity';

@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private orderRepo: Repository<Order>,

    private productService: ProductService
  ){}

  async create(createOrderDto: Array<CreateOrderDto>) {
    
    for(let orderDto of createOrderDto){
      const product = await this.productService.findOne(orderDto.product_id)
      const order = this.orderRepo.create(orderDto)
      order.product = product
      order.date = new Date()
      await this.orderRepo.save(createOrderDto)
    }
    
    return 
  }

  async findAll() {
    return await this.orderRepo.find()
  }

  async findOne(id: number) {
    return await this.orderRepo.findOneBy({id:id})
  }

  async update(id: number, updateOrderDto: UpdateOrderDto) {
    return await this.orderRepo.update(id, updateOrderDto)
  }

  async remove(id: number) {
    const order = await this.findOne(id)
    return await this.orderRepo.remove(order)
  }
}
