import { Sequelize } from 'sequelize';

// Load environment variables
import dotenv from 'dotenv';
dotenv.config();

console.log("DB_USER:", process.env.DB_USER);
console.log("DB_PASSWORD exists:", typeof process.env.DB_PASSWORD === 'string');
console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_NAME:", process.env.DB_NAME);
//


const sequelize = new Sequelize(process.env.DB_NAME!, process.env.DB_USER!, process.env.DB_PASSWORD!, {
    host: 'localhost',
    dialect: 'postgres',
});

export default sequelize;
