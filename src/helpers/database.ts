import knex from 'knex';
import env from '../../config/environment';

const database = knex({
    client: env.database.type,
    connection: {
        host: env.database.host,
        user: env.database.user,
        password: env.database.pass,
        port: parseInt(env.database.port),
        database: env.database.name,
        connectionTimeout: 15000,
        requestTimeout: 60000,
        options: {
            encrypt: true
        }
    }
});

export default database;
