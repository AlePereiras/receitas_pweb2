
import {  Column, Entity, PrimaryGeneratedColumn, } from "typeorm";

@Entity()
export class Favoritos {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    idProduto: number
}