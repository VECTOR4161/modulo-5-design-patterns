import { UsuarioWeb } from "../concreteProducts/usuarioWeb";
import { Usuario } from "../usuario";
import { UsuarioFactory } from "../usuarioFactory";

export class UsuarioWebFactory implements UsuarioFactory {
    crearUsuario(usuario: {
        id: number,
        nombre: string,
        apellidos: string,
        activo: boolean
    }): Usuario {
        return new UsuarioWeb(
            usuario.id,
            usuario.nombre,
            usuario.apellidos,
            usuario.activo
        )
    }
}