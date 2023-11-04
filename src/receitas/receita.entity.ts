import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Receita {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    imagem: string;

    @Column()
    nomeReceita: string;

    @Column()
    descricao: string;

    @Column()
    ingredientes: string;

    @Column()
    modoFazer: string;
}