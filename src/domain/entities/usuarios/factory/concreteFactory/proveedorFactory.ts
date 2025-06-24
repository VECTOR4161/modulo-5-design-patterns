import { Usuario } from "../usuario";
import { UsuarioFactory } from "../usuarioFactory";

export class ProveedorFactory implements UsuarioFactory{
    crearUsuario(): Usuario {
        throw new Error("Method not implemented.");
    }

}