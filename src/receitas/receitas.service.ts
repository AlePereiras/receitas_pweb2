import { Injectable } from '@nestjs/common';
import { Receita } from './interfaces/receita.interface';

@Injectable()
export class ReceitasService {

    private readonly receitas:  Receita[] = [];

    findAll(): Receita[] {
        return this.receitas;
    }

    create(receita: Receita): void{
        this.receitas.push(receita);
    }

    findById(id: number): Receita {
        return this.receitas.find(receita => receita.id === id);
    }

    findIndexById(id: number): number { 
        return this.receitas.findIndex(receita => receita.id === id);
    }

    deleteByIndex(index: number): void {
        this.receitas.splice(index, 1);
    }

    update(index:number, receita: Receita): void{
        this.receitas.splice(index, 1, receita);
    }
}