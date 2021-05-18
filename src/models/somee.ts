export class Somee {
    recordsets: Array<any>;
    recordset: Array<any>;
    output: any;
    rowsAffected: Array<number>;
    returnValue: number

    constructor(recordsets: Array<any>, recordset: Array<any>, output: any, rowsAffected: Array<number>, returnValue: number) {
        this.recordsets = recordsets;
        this.recordset = recordset;
        this.output = output;
        this.rowsAffected = rowsAffected;
        this.returnValue = returnValue;
    }

}