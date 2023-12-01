import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Usuario } from './usuario.entity';
import { Repository } from 'typeorm';
import { CreateOrUpdateUsuariosDto } from '../dto/create.usuarios.dto';

@Injectable()
export class UsuariosService {
    constructor(
        @InjectRepository(Usuario)
        private usuariosRepository: Repository<Usuario>
    ) { }

    // Retorna todas as receitas do usuário
    findAll(): Promise<Usuario[]> {
        return this.usuariosRepository.find();
    }

    // Criando uma receita 
    save(usuario: CreateOrUpdateUsuariosDto): Promise<Usuario> {
        return this.usuariosRepository.save(usuario);
    }

    async update(id: number, usuario: CreateOrUpdateUsuariosDto): Promise<void> {
        await this.usuariosRepository.update(id, usuario);
    }

    // Retorna várias receitas a partir do ingrediente
    findById(id: number): Promise<Usuario | null> {
        return this.usuariosRepository.findOneBy({ id });
    }

    // Removendo uma receita
    async remove(id: number): Promise<void> {
        await this.usuariosRepository.delete(id);
    }

}
