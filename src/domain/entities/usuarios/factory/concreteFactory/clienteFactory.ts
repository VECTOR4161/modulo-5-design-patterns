import { Cliente } from "../concreteProducts/cliente";
import { Usuario } from "../usuario";
import { UsuarioFactory } from "../usuarioFactory";

export class ClienteFactory implements UsuarioFactory{
    crearUsuario(usuario: {
        id: number, 
        nombre: string,
        apellidos: string,
        activo: boolean
    }): Usuario {
        return new Cliente(
            usuario.id, 
            usuario.nombre, 
            usuario.apellidos, 
            usuario.activo
        )
    }
}