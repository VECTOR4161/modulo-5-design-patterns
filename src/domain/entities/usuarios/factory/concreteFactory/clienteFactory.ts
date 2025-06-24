import { Usuario } from "../usuario";
import { UsuarioFactory } from "../usuarioFactory";

export class ClienteFactory implements UsuarioFactory{
    crearUsuario(): Usuario {
        throw new Error("Method not implemented.");
    }

}