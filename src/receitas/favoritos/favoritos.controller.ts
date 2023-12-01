import { Controller, Get, Delete, Post, Put, Body, HttpStatus, Param, ParseIntPipe, Res } from '@nestjs/common';
import { FavoritosService } from './favoritos.service';
import { Response } from 'express';
import { Favorito } from './favorito.entity';
import { CreateOrUpdateFavoritosDto } from '../dto/create.favoritos.dto';

@Controller('favoritos')
export class FavoritosController {

    constructor(private favoritosService: FavoritosService) {}

    @Get()
    findAll(): Promise<Favorito[]> {
        return this.favoritosService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
        const acharFavorito = await this.favoritosService.findById(id);
        console.log(acharFavorito)
        if (acharFavorito) {
            res.status(HttpStatus.OK).json(acharFavorito);
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
        const indexacharFavorito = await this.favoritosService.findById(id);
        if (indexacharFavorito) {
            await this.favoritosService.remove(id);
            res.status(HttpStatus.NO_CONTENT).send();
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Post()
    async create(@Body() createOrUpdateFavoritosDto: CreateOrUpdateFavoritosDto, @Res() res: Response) {
        const favorito = await this.favoritosService.save(createOrUpdateFavoritosDto);
        res.status(HttpStatus.CREATED).json(favorito);
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() createOrUpdateFavoritosDto: CreateOrUpdateFavoritosDto, @Res() res: Response) {
        const indexacharFavorito = this.favoritosService.findById(id);
        if (indexacharFavorito) {
            this.favoritosService.update(id, createOrUpdateFavoritosDto);
            res.status(HttpStatus.NO_CONTENT).send();
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }
}
