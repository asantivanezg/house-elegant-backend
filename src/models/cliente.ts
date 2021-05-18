export class Cliente {
    id: number;
    nombre: string;
    telefono: string;
    direccion: string

    constructor(id: number, nombre: string, telefono: string, direccion: string) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
    }
}