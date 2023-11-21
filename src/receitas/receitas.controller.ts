import { Controller, Get, Delete, Post, Put, Body, HttpStatus, Param, ParseIntPipe, Res, } from '@nestjs/common';
import { ReceitasService } from './receitas.service';
//import { Receita } from './interfaces/receita.interface';
import { Response } from 'express';
import { Receita } from './receita.entity';
import { CreateOrUpdateReceitasDto } from './dto/create.receitas.dto';

@Controller('receitas')
export class ReceitasController {

    constructor(private receitasService: ReceitasService) { }

    @Get()
    findAll(): Promise<Receita[]> {
        return this.receitasService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    
        const acharReceita = await this.receitasService.findById(id);
        console.log(acharReceita)
        if (acharReceita) {
            res.status(HttpStatus.OK).json(acharReceita);
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
        const indexacharReceita = await this.receitasService.findById(id);
        if (indexacharReceita) {
            await this.receitasService.remove(id);
            res.status(HttpStatus.NO_CONTENT).send();
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Post()
    async create(@Body() createOrUpdateReceitasDto: CreateOrUpdateReceitasDto, @Res() res: Response) {
        const receita = await this.receitasService.save(createOrUpdateReceitasDto);
        res.status(HttpStatus.CREATED).json(receita);
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() createOrUpdateReceitasDto: CreateOrUpdateReceitasDto, @Res() res: Response) {
        const indexacharReceita = this.receitasService.findById(id);
        if (indexacharReceita) {
            this.receitasService.update(id, createOrUpdateReceitasDto);
            res.status(HttpStatus.NO_CONTENT).send();
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }
}