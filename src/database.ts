const sql = require('mssql')
import dotenv from 'dotenv'

dotenv.config()

export async function DatabaseConnect() {
    const sqlConfig = {
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_NAME,
        server: 'houseelegantdb.mssql.somee.com',
        pool: {
            max: 10,
            min: 0,
            idleTimeoutMillis: 30000
        },
        options: {
            encrypt: false, // for azure
            trustServerCertificate: false // change to true for local dev / self-signed certs
        }
    }
    return await sql.connect(sqlConfig)
}

export const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: 'houseelegantdb.mssql.somee.com',
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
    options: {
        encrypt: false, // for azure
        trustServerCertificate: false // change to true for local dev / self-signed certs
    }
}