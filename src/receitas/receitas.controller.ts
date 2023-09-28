import { Controller, Get, Delete, Post, Put, Body, HttpStatus, Param, ParseIntPipe, Res, } from '@nestjs/common';
import { ReceitasService } from './receitas.service';
import { Receita } from './interfaces/receita.interface';
import { Response } from 'express';

@Controller('receitas')
export class ReceitasController {
    constructor(private receitasService: ReceitasService) {}

    @Get()
    findAll(): Receita[] {
        return this.receitasService.findAll();
    } 

    @Get(':id')
    findOne(@Param('id', ParseIntPipe) id: number, @Res() res: Response){
        const acharReceita = this.receitasService.findById(id);
        if(acharReceita){
            res.status(HttpStatus.OK).json(acharReceita);
        }else{
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
         const indexacharReceita = this.receitasService.findIndexById(id);
         if(indexacharReceita >= 0){
            this.receitasService.deleteByIndex(indexacharReceita);
            res.status(HttpStatus.NO_CONTENT).send();
         }else {
            res.status(HttpStatus.NOT_FOUND).send();
         }
    }

    @Post()
    create(@Body() receita: Receita, @Res() res: Response){
        this.receitasService.create(receita);
        res.status(HttpStatus.CREATED).json(receita);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() receita: Receita, @Res() res: Response){
        const indexacharReceita = this.receitasService.findIndexById(id);
        if(indexacharReceita >= 0){
            this.receitasService.update(indexacharReceita, receita);
            res.status(HttpStatus.NO_CONTENT).send();
        }else{
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }
}