import { Column, CreateDateColumn, Entity, PrimaryColumn, OneToMany, JoinColumn } from 'typeorm'

import { Report } from '../models/Report';
import { PatrimonioImage } from './patrimonioImage'
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

    @OneToMany(() => Report, report => report.patrimonio, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'patrimonio_id' })
    reports: Report[]

    @OneToMany(() => PatrimonioImage, image => image.patrimonio, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({ name: 'patrimonio_id' })
    images: PatrimonioImage[];

    constructor() {
        if (!this.id) {
            this.id = v4();
        }   
    }
}

export { Patrimonio }