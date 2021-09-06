import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateLaptopInput } from './dto/create-product.dto';
import { LaptopGraph } from './entities/laptop-graph.entity';
import { LaptopsService } from './laptops.service';

@Resolver(of => LaptopGraph)
export class LaptopsResolver {

    constructor(private laptopService: LaptopsService) { }

    @Query(returns => [LaptopGraph])
    laptops(): Promise<LaptopGraph[]> {
        return this.laptopService.findAll()
    }

    @Mutation(returns => LaptopGraph)
    createLaptop(@Args("createLaptopInput") createLaptopInput: CreateLaptopInput): Promise<LaptopGraph> {
        return this.laptopService.createLaptop(createLaptopInput)
    }

    @Mutation(() => LaptopGraph)
    deleteLaptop(@Args("id", { type: () => Int }) id: number) {
        return this.laptopService.removeLaptop(id.toString())
    }

}
