import { Usuario } from "./usuario";

export interface UsuarioFactory{
    crearUsuario(): Usuario
}