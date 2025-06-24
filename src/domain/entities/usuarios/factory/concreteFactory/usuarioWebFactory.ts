import { Usuario } from "../usuario";
import { UsuarioFactory } from "../usuarioFactory";

export class UsuarioWebFactory implements UsuarioFactory{
    crearUsuario(): Usuario {
        throw new Error("Method not implemented.");
    }
}