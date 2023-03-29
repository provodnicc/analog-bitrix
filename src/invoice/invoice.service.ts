import { Injectable } from '@nestjs/common';
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

  async create(createInvoiceDto: CreateInvoiceDto) {
    const product = await this.productService.findOne(createInvoiceDto.product_id)
    const invoice = this.invoiceRepo.create()
    invoice.product = product
    invoice.count = createInvoiceDto.count
    return await this.invoiceRepo.save(invoice)
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
