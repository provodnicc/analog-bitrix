import { Product } from "src/product/entities/product.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    count: number

    @Column()
    date: Date

    @ManyToOne(()=>Product, (product)=>product.orders)
    product: Product

}
