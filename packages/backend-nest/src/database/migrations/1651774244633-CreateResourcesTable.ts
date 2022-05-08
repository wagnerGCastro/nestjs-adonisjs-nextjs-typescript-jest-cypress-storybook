import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateResourcesTable1651774244633 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: 'resources',
      columns: [
        {
          name: 'id',
          type: 'smallint',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        { name: 'id_top_menu', type: 'smallint' },
        { name: 'name', type: 'varchar', isNullable: false, isUnique: true },
        { name: 'description', type: 'varchar', isNullable: false },
        { name: 'status', type: 'char', length: '1', default: 0 },
        { name: 'created_at', type: 'timestamp', default: 'NOW()' },
        { name: 'updated_at', type: 'timestamp', default: 'NOW()' },
      ],
    });

    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('resources');
  }
}
