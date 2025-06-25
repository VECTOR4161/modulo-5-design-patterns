import { Proveedor } from "../concreteProducts/proveedor";
import { Usuario } from "../usuario";
import { UsuarioFactory } from "../usuarioFactory";

export class ProveedorFactory implements UsuarioFactory {
    crearUsuario(usuario: {
        id: number,
        nombre: string,
        apellidos: string,
        activo: boolean
    }): Usuario {
        return new Proveedor(
            usuario.id,
            usuario.nombre,
            usuario.apellidos,
            usuario.activo
        )
    }

}