import { Column, CreateDateColumn, Entity, PrimaryColumn, ManyToOne, JoinColumn } from 'typeorm'

import { Patrimonio } from '../models/Patrimonio';

import { v4 } from 'uuid'

@Entity('reports')
class Report {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    description: string;

    @Column()
    outcome: string;

    @Column()
    opened: boolean;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Patrimonio, patrimonio => patrimonio.reports)
    patrimonio: Patrimonio

    constructor() {
        if (!this.id) {
            this.id = v4();
        }   
    }
}

export { Report }