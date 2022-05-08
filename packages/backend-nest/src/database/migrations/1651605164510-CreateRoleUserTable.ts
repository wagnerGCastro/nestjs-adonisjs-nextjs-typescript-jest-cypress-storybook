import { MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex } from 'typeorm';

export class CreateRoleUserTable1651605164510 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: 'role_user',
      columns: [
        { name: 'role_id', type: 'smallint', isPrimary: true },
        { name: 'user_id', type: 'int', isPrimary: true },
        { name: 'status', type: 'char', length: '1', default: 0 },
        { name: 'created_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
        { name: 'updated_at', type: 'timestamp', default: 'CURRENT_TIMESTAMP' },
      ],
    });

    await queryRunner.createTable(table);

    await queryRunner.createIndex(
      'role_user',
      new TableIndex({
        name: 'IDX_ROLES_ROLE_ID',
        columnNames: ['role_id'],
      }),
    );

    await queryRunner.createIndex(
      'role_user',
      new TableIndex({
        name: 'IDX_ROLES_USER_ID',
        columnNames: ['user_id'],
      }),
    );

    await queryRunner.createForeignKey(
      'role_user',
      new TableForeignKey({
        columnNames: ['role_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'roles',
        // onDelete: 'CASCADE',
      }),
    );

    await queryRunner.createForeignKey(
      'role_user',
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        // onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    const tableRoles = await queryRunner.getTable('roles');
    const tableUsers = await queryRunner.getTable('users');

    const foreignKeyRole = tableRoles.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('role_id') !== -1,
    );

    const foreignKeyUser = tableUsers.foreignKeys.find(
      (fk) => fk.columnNames.indexOf('user_id') !== -1,
    );

    await queryRunner.dropForeignKey('role_id', foreignKeyRole);
    await queryRunner.dropForeignKey('user_id', foreignKeyUser);

    await queryRunner.dropTable('role_user');
  }
}
