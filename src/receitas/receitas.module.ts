import { Module } from '@nestjs/common';
import { ReceitasController } from './receitas.controller';
import { ReceitasService } from './receitas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receita } from './receita.entity';
// import { FavoritosController } from './favoritos/favoritos.controller';
// import { FavoritosService } from './favoritos/favoritos.service';
// import { FavoritosModule } from './favoritos/favoritos.module';
// import { Favorito } from './favoritos/favorito.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Receita])],
    controllers: [ReceitasController],
    providers: [ReceitasService]
})
export class ReceitasModule { }