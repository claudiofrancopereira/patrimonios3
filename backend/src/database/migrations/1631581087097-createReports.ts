import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class createReports1631581087097 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable( new Table({
      name: 'reports',
      columns: [
        {
          name: 'id',
          type: 'uuid',
          isPrimary: true
        },
        {
          name: 'description',
          type: 'text',
        },
        {
          name: 'outcome',
          type: 'text',
        },
        {
          name: 'patrimonioId',
          type: 'uuid',
        },
        {
          name: 'opened',
          type: 'boolean',
          default: true,
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
          name: 'ReportPatrimonio',
          columnNames: ['patrimonioId'],
          referencedTableName: 'patrimonios',
          referencedColumnNames: ['id'],
          onUpdate: 'CASCADE',
          onDelete: 'CASCADE',
        }
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('reports');

  }

}
