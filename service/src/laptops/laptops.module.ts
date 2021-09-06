import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LaptopsController } from './laptops.controller';
import { LaptopsService } from './laptops.service';
import { LaptopsResolver } from './laptops.resolver';
import { LaptopGraph } from './entities/laptop-graph.entity';
import { LaptopsMiddleware } from 'src/laptops.middleware';

@Module({
    imports: [
        TypeOrmModule.forFeature([LaptopGraph])
    ],
    providers: [LaptopsService, LaptopsResolver],
    controllers: [LaptopsController]
})
export class LaptopsModule {

    configure(consumer: MiddlewareConsumer) {
        consumer.apply(LaptopsMiddleware).forRoutes({ path: "laptops/*", method: RequestMethod.GET })
    }

}
