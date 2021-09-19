import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createPatrimonios1631491400848 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable( new Table({
      name: 'patrimonios',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true
        },
        {
          name: 'nome',
          type: 'varchar'
        },
        {
          name: 'endereco',
          type: 'varchar'
        },
        {
          name: 'latitude',
          type: 'decimal',
          scale: 10,
          precision: 2
        },
        {
          name: 'longitude',
          type: 'decimal',
          scale: 10,
          precision: 2
        },
        {
          name: 'notes',
          type: 'text'
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()'
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()'
        }

      ]
    }))
  

  }


  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('patrimonios')
  }

}
