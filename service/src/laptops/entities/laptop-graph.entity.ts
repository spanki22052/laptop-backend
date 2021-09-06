import { Field,  Int,  ObjectType } from "@nestjs/graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
@ObjectType()
export class LaptopGraph {
    @PrimaryGeneratedColumn()
    @Field(type => Int)
    id: number;

    @Column()
    @Field()
    title: string;

    @Column()
    @Field()
    price: number;

    @Column()
    @Field()
    description: string;
}