import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Favorito } from './favorito.entity';
import { Repository } from 'typeorm';
import { CreateOrUpdateFavoritosDto } from '../dto/create.favoritos.dto';

@Injectable()
export class FavoritosService {

    constructor(
        @InjectRepository(Favorito)
        private favoritosRepository: Repository<Favorito>
    ){}

    findAll(): Promise<Favorito[]> {
        return this.favoritosRepository.find();
    }

    save(favorito: CreateOrUpdateFavoritosDto): Promise<Favorito>{
        return this.favoritosRepository.save(favorito);
    }

    async update(id: number, favorito: CreateOrUpdateFavoritosDto): Promise<void>{
        await this.favoritosRepository.update(id, favorito);
    }

    findById(id: number): Promise<Favorito | null> {
        return this.favoritosRepository.findOneBy({ id });
    }

    async remove(id: number): Promise<void> {
        await this.favoritosRepository.delete(id);
    }
}
