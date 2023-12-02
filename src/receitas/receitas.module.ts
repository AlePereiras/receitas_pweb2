import { Module } from '@nestjs/common';
import { ReceitasController } from './receitas.controller';
import { ReceitasService } from './receitas.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Receita } from './receita.entity';
// import { FavoritosController } from './favoritos/favoritos.controller';
// import { FavoritosService } from './favoritos/favoritos.service';
// import { FavoritosModule } from './favoritos/favoritos.module';
// import { Favorito } from './favoritos/favorito.entity';
// import { UsuariosController } from './usuarios/usuarios.controller';
// import { UsuariosService } from './usuarios/usuarios.service';
// import { UsuariosModule } from './usuarios/usuarios.module';
// import { IngredientesController } from './ingredientes/ingredientes.controller';
// import { IngredientesService } from './ingredientes/ingredientes.service';
// import { IngredientesModule } from './ingredientes/ingredientes.module';

@Module({
    imports: [TypeOrmModule.forFeature([Receita])],
    controllers: [ReceitasController],
    providers: [ReceitasService]
})
export class ReceitasModule { }