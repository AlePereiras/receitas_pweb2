import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReceitasService } from './receitas/receitas.service';
import { ReceitasController } from './receitas/receitas.controller';
import { ReceitasModule } from './receitas/receitas.module';

@Module({
  imports: [ReceitasModule],
  controllers: [AppController, ReceitasController],
  providers: [AppService, ReceitasService],
})
export class AppModule {}