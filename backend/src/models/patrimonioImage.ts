import { Column, CreateDateColumn, Entity, PrimaryColumn, JoinColumn, ManyToOne } from 'typeorm'

import { Patrimonio } from './Patrimonio';

import { v4 } from 'uuid'

@Entity('patrimonioImages')
class PatrimonioImage {
    @PrimaryColumn()
    readonly id: string;

    @Column()
    path: string;

    @CreateDateColumn()
    created_at: Date;

    @CreateDateColumn()
    updated_at: Date;

    @ManyToOne(() => Patrimonio, patrimonio => patrimonio.images)
    @JoinColumn({ name: 'patrimonio_id' })
    patrimonio: Patrimonio

    constructor() {
        if (!this.id) {
            this.id = v4();
        }   
    }
}

export { PatrimonioImage }