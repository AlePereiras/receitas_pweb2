import { Controller, Get, Delete, Post, Put, Body, HttpStatus, Param, ParseIntPipe, Res } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { Response } from 'express';
import { Usuario } from './usuario.entity';
import { CreateOrUpdateUsuariosDto } from '../dto/create.usuarios.dto';

@Controller('usuarios')
export class UsuariosController {
    
    constructor(private usuariosService: UsuariosService) { }

    @Get()
    findAll(): Promise<Usuario[]> {
        return this.usuariosService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
    
        const acharUsuario = await this.usuariosService.findById(id);
        console.log(acharUsuario)
        if (acharUsuario) {
            res.status(HttpStatus.OK).json(acharUsuario);
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Delete(':id')
    async remove(@Param('id', ParseIntPipe) id: number, @Res() res: Response) {
        const indexacharUsuario = await this.usuariosService.findById(id);
        if (indexacharUsuario) {
            await this.usuariosService.remove(id);
            res.status(HttpStatus.NO_CONTENT).send();
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }

    @Post()
    async create(@Body() createOrUpdateUsuariosDto: CreateOrUpdateUsuariosDto, @Res() res: Response) {
        const usuario = await this.usuariosService.save(createOrUpdateUsuariosDto);
        res.status(HttpStatus.CREATED).json(usuario);
    }

    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() createOrUpdateUsuariosDto: CreateOrUpdateUsuariosDto, @Res() res: Response) {
        const indexacharUsuario = this.usuariosService.findById(id);
        if (indexacharUsuario) {
            this.usuariosService.update(id, createOrUpdateUsuariosDto);
            res.status(HttpStatus.NO_CONTENT).send();
        } else {
            res.status(HttpStatus.NOT_FOUND).send();
        }
    }
}
