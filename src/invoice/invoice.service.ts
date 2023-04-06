import { HttpCode, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductService } from 'src/product/product.service';
import { Repository } from 'typeorm';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';
import { Invoice } from './entities/invoice.entity';

@Injectable()
export class InvoiceService {
  constructor(
    @InjectRepository(Invoice)
    private invoiceRepo: Repository<Invoice>,

    private productService: ProductService
  ){}

  async create(createInvoiceDto: Array<CreateInvoiceDto>) {

    for(let invoiceDto of createInvoiceDto){
      let product = await this.productService.findOne(invoiceDto.product_id)
      if(!product){
        throw new HttpException('product undefined', HttpStatus.BAD_REQUEST)
      }
      const invoice = this.invoiceRepo.create(invoiceDto)
      invoice.product = product
      invoice.date = new Date()  
      await this.invoiceRepo.save(invoice)
    }
    return 
  }

  async findAll() {
    return await this.invoiceRepo.find()
  }

  async findOne(id: number) {
    return await this.invoiceRepo.findOneBy({id: id})
  }

  async update(id: number, updateInvoiceDto: UpdateInvoiceDto) {
    const invoice = await this.findOne(id)
    invoice.count = updateInvoiceDto.count
    return await this.invoiceRepo.update(id, updateInvoiceDto)
  }

  async remove(id: number) {
    const invoice = await this.findOne(id)
    return await this.invoiceRepo.remove(invoice)
  }
}
