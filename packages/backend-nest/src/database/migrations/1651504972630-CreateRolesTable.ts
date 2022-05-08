import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateRolesTable1651504972630 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: 'roles',
      columns: [
        {
          name: 'id',
          type: 'smallint',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        { name: 'name', type: 'varchar' },
        { name: 'description', type: 'varchar' },
        { name: 'status', type: 'char', length: '1', default: 0 },
        { name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
        { name: 'updated_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
      ],
    });

    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('roles');
  }
}
