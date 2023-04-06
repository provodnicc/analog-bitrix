import { Product } from "src/product/entities/product.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Stock {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @Column()
    count: number

    @ManyToOne(()=>Product, (product)=>product.stocks)
    product: Product
}
