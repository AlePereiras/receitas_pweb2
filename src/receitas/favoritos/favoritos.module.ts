import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FavoritosController } from './favoritos.controller';
import { FavoritosService } from './favoritos.service';
import { Favorito } from './favorito.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Favorito])],
    controllers: [FavoritosController],
    providers: [FavoritosService]
})
export class FavoritosModule {}
