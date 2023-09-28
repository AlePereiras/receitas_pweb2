import { Module } from '@nestjs/common';
import { ReceitasService } from './receitas.service';

@Module({
  providers: [ReceitasService]
})
export class ReceitasModule {}
