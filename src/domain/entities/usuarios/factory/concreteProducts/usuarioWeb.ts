import { Usuario } from "../usuario";

export class UsuarioWeb implements Usuario{
    id: number;
    nombre: string;
    apellidos: string;
    idRol: number;
    activo: boolean;

    constructor(id: number, nombre: string, apellidos: string, activo: boolean){
        this.id = id
        this.nombre = nombre
        this.apellidos = apellidos
        this.idRol = 1
        this.activo = activo
    }
}