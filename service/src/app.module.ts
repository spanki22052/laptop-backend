import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from "@nestjs/typeorm"
import { config } from './orm.config';
import { LaptopsModule } from './laptops/laptops.module';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';


@Module({
  imports: [TypeOrmModule.forRoot(config), GraphQLModule.forRoot({
    autoSchemaFile: join(process.cwd(), 'src/schema.gql')
  }), LaptopsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }

// imports: [LaptopsModule, MongooseModule.forRoot(`mongodb+srv://spanki22052:hacker22052@cluster0.djejy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`)],