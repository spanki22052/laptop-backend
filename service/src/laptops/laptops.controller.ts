import { LaptopsGuard } from '../laptops.guard';
import { Controller, Get, Post, Param, Body, Delete, ParseIntPipe, HttpStatus, UseGuards, SetMetadata, UseInterceptors, HttpException, UnauthorizedException } from '@nestjs/common';
import { LaptopsService } from '@laptops/laptops.service';
import { Roles } from '@app/roles.decorator';
import { Role } from './enums/role.enum';
import { GuardsContextCreator } from '@nestjs/core/guards/guards-context-creator';


@Controller('laptops')
@UseGuards(LaptopsGuard)
export class LaptopsController {

    constructor(private readonly laptopsService: LaptopsService) { }

    @Get(":id")
    findById(@Param("id", new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: string) {
        this.laptopsService.findById(id)
    }

    @Get()
    getAll() {
        // if (user.roles.includes(requiredRoles)) {
        return this.laptopsService.findAll()
        // }


        // throw new UnauthorizedException("User not admin")
    }

    @Post()
    @Roles(Role.User)
    @UseGuards(GuardsContextCreator)
    create(@Body() body: any) {
        return this.laptopsService.createLaptop(body)

    }

    @Delete(":id")
    delete(@Param("id") id: string) {
        return this.laptopsService.removeLaptop(id)
    }


    // @Post()
    // create(@Body() createProductDto: CreateProductDto) {
    //     return this.laptopsService.createLaptop(createProductDto)
    // }

    // @Delete(":id")
    // remove(@Param("id") id : string) {
    //      return this.laptopsService.remove(id)
    // }

}
