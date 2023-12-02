import { Body, Controller, Delete, Get, HttpStatus, Param, ParseIntPipe, Post, Put, Res } from '@nestjs/common';
import { IngredientesService } from './ingredientes.service';
import { Response } from 'express';
import { Ingrediente } from './ingrediente.entity';
import { CreateOrUpdateIngredientesDto } from '../dto/create.ingredientes.dto';

@Controller('ingredientes')
export class IngredientesController {

    constructor(private ingredientesService: IngredientesService) { }

    @Get()
    findAll(): Promise<Ingrediente[]> {
        return this.ingredientesService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    
        const acharIngrediente = await this.ingredientesService.findById(id);
        console.log(acharIngrediente)
        if (acharIngrediente) {
            res.status(HttpStatus.OK).json(acharIngrediente);
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
        const indexacharIngrediente = await this.ingredientesService.findById(id);
        if (indexacharIngrediente) {
            await this.ingredientesService.remove(id);
            res.status(HttpStatus.NO_CONTENT).send();
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Post()
    async create(@Body() createOrUpdateIngredientesDto: CreateOrUpdateIngredientesDto, @Res() res: Response) {
        const receita = await this.ingredientesService.save(createOrUpdateIngredientesDto);
        res.status(HttpStatus.CREATED).json(receita);
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() createOrUpdateIngredientesDto: CreateOrUpdateIngredientesDto, @Res() res: Response) {
        const indexacharIngrediente = this.ingredientesService.findById(id);
        if (indexacharIngrediente) {
            this.ingredientesService.update(id, createOrUpdateIngredientesDto);
            res.status(HttpStatus.NO_CONTENT).send();
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }
}
