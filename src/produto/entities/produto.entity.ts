import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { IsNotEmpty, IsNumber } from "class-validator";
import { Categoria } from "../../categoria/entities/categoria.entity";

@Entity({ name: 'tb_produtos' })
export class Produto {
    @PrimaryGeneratedColumn()
    id!: number;

    @IsNotEmpty()
    @Column({ length: 100, nullable: false })
    nome!: string;

    @IsNotEmpty()
    @Column({ length: 255, nullable: false })
    descricao!: string;

    @IsNumber()
    @Column('decimal', { precision: 10, scale: 2, nullable: false })
    preco!: number;

    @IsNumber()
    @Column({ nullable: false })
    quantidade!: number;

    @IsNotEmpty()
    @Column({ length: 100, nullable: false})
    console!: string;

    @ManyToOne(() => Categoria, (categoria) => categoria.produtos, {
        onDelete: 'CASCADE',
    })
    
    @JoinColumn({ name: 'categoria_id' })
    categoria!: Categoria;

}