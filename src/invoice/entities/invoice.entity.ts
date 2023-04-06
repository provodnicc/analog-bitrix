import { Product } from "src/product/entities/product.entity";
import { Column, Entity, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Invoice {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    count: number
    
    @Column()
    date: Date

    @ManyToOne(()=>Product, (product)=>product.invoices)
    product: Product
}
