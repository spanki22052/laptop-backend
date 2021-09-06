import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UpdateProductDto } from './dto/update-product.dto';
import { LaptopGraph } from './entities/laptop-graph.entity';

@Injectable()
export class LaptopsService {
    constructor(@InjectRepository(LaptopGraph) private laptopModel: Repository<LaptopGraph>) { }

    async findAll(): Promise<LaptopGraph[]> {
        console.log(this.laptopModel.find())
        return this.laptopModel.find()
    }

    async findById(id: string): Promise<LaptopGraph> {
        return this.laptopModel.findOne(id)[0]
    }

    createLaptop(body: LaptopGraph) {

        if (body.title.length < 5) {
            throw new HttpException({
                status: HttpStatus.FORBIDDEN,
                error: "Title length smaller than 5"
            }, HttpStatus.FORBIDDEN)
        } else {
            return this.laptopModel.save(body)
        }
    }

    async removeLaptop(id: string) {
        return this.laptopModel.delete(id)
    }

}

// constructor(@InjectModel(Laptop.name) private laptopModel: Model<LaptopDocument>) { }

    // async getAll(): Promise<Laptop[]> {
    //     return this.laptopModel.find().exec()
    // }

    // async createLaptop(laptopDto: CreateProductDto): Promise<Laptop> {
    //     const newProduct = new this.laptopModel(laptopDto)
    //     return newProduct.save()
    // }

    // async remove(id: string): Promise<Laptop> {
    //     return this.laptopModel.findByIdAndRemove(id)
    // }