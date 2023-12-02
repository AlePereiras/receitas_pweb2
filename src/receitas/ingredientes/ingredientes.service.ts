import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Ingrediente } from './ingrediente.entity';
import { Repository } from 'typeorm';
import { CreateOrUpdateIngredientesDto } from '../dto/create.ingredientes.dto';

@Injectable()
export class IngredientesService {
    constructor(
        @InjectRepository(Ingrediente)
        private ingredientesRepository: Repository<Ingrediente>
    ) { }

    
    findAll(): Promise<Ingrediente[]> {
        return this.ingredientesRepository.find();
    }

     
    save(ingrediente: CreateOrUpdateIngredientesDto): Promise<Ingrediente> {
        return this.ingredientesRepository.save(ingrediente);
    }

    async update(id: number, ingrediente: CreateOrUpdateIngredientesDto): Promise<void> {
        await this.ingredientesRepository.update(id, ingrediente);
    }

    
    findById(id: number): Promise<Ingrediente | null> {
        return this.ingredientesRepository.findOneBy({ id });
    }

    
    async remove(id: number): Promise<void> {
        await this.ingredientesRepository.delete(id);
    }

}
