import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Ingrediente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    ingrediente: string;
}