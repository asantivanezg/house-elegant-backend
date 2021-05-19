export class Cliente {
    id: string;
    nombre: string;
    telefono: string;
    direccion: string
    dni: string

    constructor(id: string, nombre: string, telefono: string, direccion: string, dni: string) {
        this.id = id;
        this.nombre = nombre;
        this.telefono = telefono;
        this.direccion = direccion;
        this.dni = dni;
    }
}