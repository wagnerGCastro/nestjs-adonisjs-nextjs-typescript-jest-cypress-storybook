import { ConnectionOptions } from 'typeorm';

const ormconfig: ConnectionOptions = {
  type: 'postgres',
  host: 'postgres',
  port: 5432,
  username: 'admin',
  password: 'admin',
  database: 'postgres',
  // synchronize: true,
  entities: [__dirname + '/../../api/**/*.entity.{js,ts}'],
  migrations: ['src/database/migrations/**/*.ts'],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};

export default ormconfig;
