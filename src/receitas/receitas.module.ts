import { Module } from '@nestjs/common';
import { ReceitasController } from './receitas.controller';
import { ReceitasService } from './receitas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receita } from './receita.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Receita])],
    controllers: [ReceitasController],
    providers: [ReceitasService]
})
export class ReceitasModule { }