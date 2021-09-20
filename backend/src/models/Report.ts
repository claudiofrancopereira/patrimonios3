import { Column, CreateDateColumn, Entity, PrimaryColumn, ManyToOne, JoinColumn, OneToMany } from 'typeorm'

import { Patrimonio } from '../models/Patrimonio';
import { ReportImage } from './reportImage';

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
    @JoinColumn({ name: 'patrimonio_id' })
    patrimonio: Patrimonio

    @OneToMany(() => ReportImage, image => image.report, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'report_id' })
    images: ReportImage[];

    constructor() {
        if (!this.id) {
            this.id = v4();
        }   
    }
}

export { Report }