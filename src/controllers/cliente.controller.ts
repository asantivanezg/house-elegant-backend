import {Request, Response} from 'express'
import {DatabaseConnect, sqlConfig} from "../database";
import {Cliente} from "../models/cliente";
import sql from 'mssql'
import {Somee} from "../models/somee";

// const sql = require('mssql')

export async function ClienteInsert(req: Request, res: Response) {
    try {
        const cliente: Cliente = req.body;

        let poolConnect = await new sql.ConnectionPool(sqlConfig).connect()

        const result = await poolConnect.request()
            .input('id', sql.VarChar(64), cliente.id)
            .input('nombre', sql.VarChar(20), cliente.nombre)
            .input('telefono', sql.VarChar(20), cliente.telefono)
            .input('direccion', sql.VarChar(40), cliente.direccion)
            .input('dni', sql.VarChar(15), cliente.dni)
            .execute('ClienteInsert')

        console.dir(result);

        res.json({
            ok: true
        })

    } catch (error) {
        console.log(error);
        res.json({
            ok: false
        })
    }
}

export async function ClienteAll(req: Request, res: Response) {
    try {
        let poolConnect = await new sql.ConnectionPool(sqlConfig).connect()

        const result: Somee = await poolConnect.request().execute('ClienteAll')

        console.dir(result);

        res.json({
            data: result.recordset,
            ok: true
        })

    } catch (error) {
        console.log(error);
        res.json({
            ok: false
        })
    }
}