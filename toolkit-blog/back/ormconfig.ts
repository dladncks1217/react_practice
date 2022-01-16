import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/entities/user';
import * as dotenv from 'dotenv';

dotenv.config();
const config: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [User],
  synchronize: false,
  // 한번 만들고나면 false로 해두자! (안하면 실제데이터 날려먹을수있음)
  migrations: [__dirname + '/src/migrations/*ts'],
  cli: { migrationsDir: 'src/migrations' },
  autoLoadEntities: true,
  charset: 'utf8mb4',
  logging: true,
  keepConnectionAlive: true,
};

export = config;
