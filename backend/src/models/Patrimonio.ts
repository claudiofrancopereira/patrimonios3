import { Column, CreateDateColumn, Entity, PrimaryColumn, OneToMany, JoinColumn } from 'typeorm'
import { Report } from '../models/Report';

import { v4 } from 'uuid'

@Entity('patrimonios')
class Patrimonio {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    nome: string;

    @Column()
    endereco: string;

    @Column()
    latitude: number;

    @Column()
    longitude: number;

    @Column()
    notes: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    @OneToMany(() => Report, report => report.patrimonio)
    reports: Report[]

    constructor() {
        if (!this.id) {
            this.id = v4();
        }   
    }
}

export { Patrimonio }