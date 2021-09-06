import { Field, InputType } from "@nestjs/graphql";
import { PrimaryGeneratedColumn } from "typeorm";

@InputType()
export class CreateLaptopInput {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Field()
    readonly title: string;

    @Field()
    readonly price: number;

    @Field()
    readonly description: string;
}