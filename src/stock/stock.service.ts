import { Injectable } from '@nestjs/common';
import { CreateStockDto } from './dto/create-stock.dto';
import { UpdateStockDto } from './dto/update-stock.dto';

@Injectable()
export class StockService {
  constructor(
    
  ){}

  async create(createStockDto: CreateStockDto) {
    return 
  }

  async findAll() {
    return 
  }

  async findOne(id: number) {
    return 
  }

  async update(id: number, updateStockDto: UpdateStockDto) {
    return 
  }

  async remove(id: number) {
    return 
  }
}
