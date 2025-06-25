import { ActualizarUsuarioDto, RegistrarUsuarioDto, Usuario, UsuarioDatasource } from "../../../domain";
import { ListaOrdenada } from "../../../shared";

export class UsuarioDatasourceImplPrisma implements UsuarioDatasource{
    insertarUsuario(registrarUsuarioDto: RegistrarUsuarioDto): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }
    obtenerUsuarios(inicio: number, filas: number): Promise<ListaOrdenada<Usuario>> {
        throw new Error("Method not implemented.");
    }
    obtenerUsuario(idUsuario: number): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }
    actualizarUsuario(idUsuario: number, actualizarUsuarioDto: ActualizarUsuarioDto): Promise<Usuario> {
        throw new Error("Method not implemented.");
    }
    eliminarUsuario(idUsuario: number): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}