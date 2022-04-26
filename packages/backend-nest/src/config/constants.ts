import * as dotenv from 'dotenv';
import { TypeConnection } from 'src/types/index';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

export const DB_CONNECTION = process.env.DB_POSTGRES_CONNECTION as TypeConnection;
export const DB_HOST = process.env.DB_POSTGRES_HOST;
export const DB_PORT = Number(process.env.DB_POSTGRES_PORT);
export const DB_DATABASE = process.env.DB_POSTGRES_DATABASE;
export const DB_USERNAME = process.env.DB_POSTGRES_USERNAME;
export const DB_PASSWORD = process.env.DB_POSTGRES_PASSWORD;

export const API_JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
export const API_JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;
