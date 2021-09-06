import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Laptop {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    price: number;
}
