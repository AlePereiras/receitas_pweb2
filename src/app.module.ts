import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReceitasService } from './receitas/receitas.service';
import { ReceitasController } from './receitas/receitas.controller';
import { ReceitasModule } from './receitas/receitas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Receita } from './receitas/receita.entity';

@Module({
  imports: [ReceitasModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'dpg-ckar75kiibqc73af10t0-a.oregon-postgres.render.com',
      port: 5432,
      username: 'receitas_pweb2_user',
      password: 'AyzhFdm2Zne1g1YEP1Qyqy6YtUbixoPq',
      database: 'receitas_pweb2',
      entities: [Receita],
      synchronize: true,
      ssl: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) { }
}