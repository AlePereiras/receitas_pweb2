import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReceitasService } from './receitas/receitas.service';
import { ReceitasController } from './receitas/receitas.controller';
import { ReceitasModule } from './receitas/receitas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

@Module({
  imports: [ReceitasModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
  ],
  controllers: [AppController, ReceitasController],
  providers: [AppService, ReceitasService],
})
export class AppModule {
  constructor(private dataSource: DataSource){}
}