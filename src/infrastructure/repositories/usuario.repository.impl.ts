import { 
    ActualizarUsuarioDto, 
    RegistrarUsuarioDto, 
    Usuario, 
    UsuarioDatasource, 
    UsuarioRepository 
} from "../../domain";
import { ListaOrdenada } from "../../shared";

export class UsuarioRepositoryImpl implements UsuarioRepository{

    constructor(
        private readonly usuarioDatasource: UsuarioDatasource
    ){}

    insertarUsuario(registrarUsuarioDto: RegistrarUsuarioDto): Promise<Usuario> {
        return this.usuarioDatasource.insertarUsuario(registrarUsuarioDto)
    }
    obtenerUsuarios(inicio: number, filas: number): Promise<ListaOrdenada<Usuario>> {
        return this.usuarioDatasource.obtenerUsuarios(inicio, filas)
    }
    obtenerUsuario(idUsuario: number): Promise<Usuario> {
        return this.usuarioDatasource.obtenerUsuario(idUsuario)
    }
    actualizarUsuario(idUsuario: number, actualizarUsuarioDto: ActualizarUsuarioDto): Promise<Usuario> {
        return this.usuarioDatasource.actualizarUsuario(idUsuario, actualizarUsuarioDto)
    }
    eliminarUsuario(idUsuario: number): Promise<boolean> {
        return this.usuarioDatasource.eliminarUsuario(idUsuario)
    }

}