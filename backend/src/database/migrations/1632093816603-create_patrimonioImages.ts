import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createPatrimonioImages1632093816603 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable( new Table({
      name: 'patrimonioImages',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true
        },
        {
          name: 'path',
          type: 'varchar',
        },
        {
          name: 'patrimonio_id',
          type: 'uuid',
        },
        {
          name: 'created_at',
          type: 'timestamp',
          default: 'now()',
        },
        {
          name: 'updated_at',
          type: 'timestamp',
          default: 'now()',
        }
      ],
      foreignKeys: [
        {
          name: 'ImagePatrimonio',
          columnNames: ['patrimonio_id'],
          referencedTableName: 'patrimonios',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('patrimonioImages');
  }

}
