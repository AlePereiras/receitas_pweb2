import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Usuario {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nomeUsuario: string;

    @Column()
    email: string;

    @Column()
    senha: string;

    @Column()
    fotoUsuario: string;
}