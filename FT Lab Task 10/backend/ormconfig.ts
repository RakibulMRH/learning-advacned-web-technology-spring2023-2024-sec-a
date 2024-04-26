import { EmployerEntity } from './src/entities/employer.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions'; // Import the PostgresConnectionOptions type

const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'mrh',
  entities: [EmployerEntity],
  synchronize: true,
};

export default config;