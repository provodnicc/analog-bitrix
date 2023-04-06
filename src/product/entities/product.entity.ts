import { Invoice } from "src/invoice/entities/invoice.entity";
import { Order } from "src/order/entities/order.entity";
import { Stock } from "src/stock/entities/stock.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Product {
    
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    stock_price: number

    @Column()
    price: number

    @Column()
    code: number

    @Column({default: 1})
    min_count: number

    @OneToMany(()=>Order, (order)=>order.product)
    orders: Order[]

    @OneToMany(()=>Invoice, (invoices)=>invoices.product)
    invoices: Invoice[]

    @OneToMany(()=>Stock, (stock)=>stock.product)
    stocks: Stock[]
}
