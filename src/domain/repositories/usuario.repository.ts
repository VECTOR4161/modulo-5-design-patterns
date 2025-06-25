import { ListaOrdenada } from "../../shared";
import { ActualizarUsuarioDto, RegistrarUsuarioDto } from "../dtos";
import { Usuario } from "../entities";

export abstract class UsuarioRepository{
    
    abstract insertarUsuario(registrarUsuarioDto: RegistrarUsuarioDto): Promise<Usuario>

    abstract obtenerUsuarios(inicio: number, filas: number): Promise<ListaOrdenada<Usuario>>

    abstract obtenerUsuario(idUsuario: number): Promise<Usuario> 

    abstract actualizarUsuario(idUsuario: number, actualizarUsuarioDto: ActualizarUsuarioDto): Promise<Usuario>

    abstract eliminarUsuario(idUsuario: number): Promise<boolean>
}