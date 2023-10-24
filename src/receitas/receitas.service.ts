import { Injectable } from '@nestjs/common';
//import { Receita } from './interfaces/receita.interface';
import { InjectRepository } from '@nestjs/typeorm';
import { Receita } from './receita.entity';
import { Repository } from 'typeorm';
import { CreateOrUpdateReceitasDto } from './dto/create.receitas.dto';

@Injectable()
export class ReceitasService {

    constructor(
        @InjectRepository(Receita)
        private receitasRepository: Repository<Receita>
    ) { }

    // Retorna todas as receitas do usuário
    findAll(): Promise<Receita[]> {
        return this.receitasRepository.find();
    }

    // Criando uma receita 
    save(receita: CreateOrUpdateReceitasDto): Promise<Receita> {
        return this.receitasRepository.save(receita);
    }

    async update(id: number, receita: CreateOrUpdateReceitasDto): Promise<void> {
        await this.receitasRepository.update(id, receita);
    }

    // Retorna várias receitas a partir do ingrediente
    findById(id: number): Promise<Receita | null> {
        return this.receitasRepository.findOneBy({ id });
    }

    // Removendo uma receita
    async remove(id: number): Promise<void> {
        await this.receitasRepository.delete(id);
    }

}