import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsersTable1650379787745 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: 'users',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        { name: 'fullname', type: 'varchar' },
        { name: 'email', type: 'varchar' },
        { name: 'password', type: 'varchar' },
        { name: 'status', type: 'char', length: '1' },
        { name: 'created_at', type: 'timestamp', isNullable: true },
        { name: 'updated_at', type: 'timestamp', isNullable: true },
      ],
    });

    await queryRunner.createTable(table);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
