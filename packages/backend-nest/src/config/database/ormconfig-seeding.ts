import { ConnectionOptions } from 'typeorm';
import {
  DB_CONNECTION,
  DB_DATABASE,
  DB_HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
} from 'src/config/constants';

const ormconfig = {
  type: DB_CONNECTION,
  host: DB_HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  entities: ['dist/app/**/*.entity.{js,ts}'],
  migrations: ['dist/database/seeding/*.{js,ts}'],
  factories: ['dist/database/factories/*.js'],
  seeds: ['dist/database/seeding/*.js'],
  cli: {
    entitiesDir: 'src/app',
    migrationsDir: 'src/database/seeding',
  },
} as ConnectionOptions;

export default ormconfig;
