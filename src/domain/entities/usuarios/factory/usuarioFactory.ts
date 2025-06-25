import { Usuario } from "./usuario";

export interface UsuarioFactory{
    crearUsuario(usuario: {
        id: number, 
        nombre: string,
        apellidos: string,
        activo: boolean
    }): Usuario
}