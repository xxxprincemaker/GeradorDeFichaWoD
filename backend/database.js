import db from 'pg';
import config from '../backend/src/app/config/database-config.js';

const {Pool} = db;
const pool = new Pool(config.db);

/**
 * Query the database using the pool
 * @param {*} query
 * @param {*} params
 *
 * @see https://node-postgres.com/features/pooling#single-query
 */
async function query(query, params) {
    const {rows, fields} = await pool.query(query, params);

    return rows;
}

export default {
    query
}
