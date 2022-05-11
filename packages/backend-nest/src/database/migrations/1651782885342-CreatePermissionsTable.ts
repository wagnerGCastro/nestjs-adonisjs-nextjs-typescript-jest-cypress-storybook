import { MigrationInterface, QueryRunner, Table, TableForeignKey, TableIndex } from 'typeorm';

export class CreatePermissionsTable1651782885342 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    const table = new Table({
      name: 'permissions',
      columns: [
        {
          name: 'id',
          type: 'smallint',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        },
        { name: 'resource_id', type: 'smallint' },
        { name: 'name', type: 'varchar', isNullable: false, isUnique: true },
        { name: 'description', type: 'varchar', isNullable: false },
        { name: 'status', type: 'char', length: '1', default: 0 },
        { name: 'created_at', type: 'timestamp', default: 'NOW()' },
        { name: 'updated_at', type: 'timestamp', default: 'NOW()' },
      ],
    });

    await queryRunner.createTable(table);

    await queryRunner.createIndex(
      'permissions',
      new TableIndex({
        name: 'IDX_PERMISSIONS_RESOURCE_ID',
        columnNames: ['resource_id'],
      }),
    );

    await queryRunner.createForeignKey(
      'permissions',
      new TableForeignKey({
        columnNames: ['resource_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'resources',
        // onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    // const tablePermissions = await queryRunner.getTable('permissions');

    // const foreignKeyResource = tablePermissions.foreignKeys.find(
    //   (fk) => fk.columnNames.indexOf('resource_id') !== -1,
    // );

    // await queryRunner.dropForeignKey('resource_id', foreignKeyResource);

    await queryRunner.dropTable('permissions');
  }
}
