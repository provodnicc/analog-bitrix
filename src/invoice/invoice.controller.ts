import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { InvoiceService } from './invoice.service';
import { CreateInvoiceDto } from './dto/create-invoice.dto';
import { UpdateInvoiceDto } from './dto/update-invoice.dto';

@Controller('invoice')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Post()
  async create(@Body() createInvoiceDto: Array<CreateInvoiceDto>) {
    console.log(createInvoiceDto)
    return await this.invoiceService.create(createInvoiceDto);
  }

  @Get()
  async findAll() {
    return await this.invoiceService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.invoiceService.findOne(+id);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateInvoiceDto: UpdateInvoiceDto) {
    return await this.invoiceService.update(+id, updateInvoiceDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return await this.invoiceService.remove(+id);
  }
}
