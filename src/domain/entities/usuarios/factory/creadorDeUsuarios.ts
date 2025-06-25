import { CustomError } from "../../../../config";
import { ClienteFactory } from "./concreteFactory/clienteFactory";
import { ProveedorFactory } from "./concreteFactory/proveedorFactory";
import { UsuarioWebFactory } from "./concreteFactory/usuarioWebFactory";
import { Usuario } from "./usuario";
import { UsuarioFactory } from "./usuarioFactory";

export class CreadorDeUsuarios implements UsuarioFactory {
    crearUsuario(usuario: { id: number; nombre: string; apellidos: string; activo: boolean; idRol: number; }): Usuario {
        switch (usuario.idRol) {
            case 1:
                return new UsuarioWebFactory().crearUsuario({
                    id: usuario.id,
                    nombre: usuario.nombre,
                    apellidos: usuario.apellidos,
                    activo: usuario.activo
                })
            case 2:
                return new ClienteFactory().crearUsuario({
                    id: usuario.id,
                    nombre: usuario.nombre,
                    apellidos: usuario.apellidos,
                    activo: usuario.activo
                })
            case 3:
                return new ProveedorFactory().crearUsuario({
                    id: usuario.id,
                    nombre: usuario.nombre,
                    apellidos: usuario.apellidos,
                    activo: usuario.activo
                })
            default: throw CustomError.internalServer('Error en el servidor')
        }
    }
}