import { ListaOrdenada } from "../../shared";
import { ActualizarUsuarioDto, RegistrarUsuarioDto } from "../dtos";
import { Usuario } from "../entities";

export abstract class UsuarioRepository{
    
    abstract insertarUsuario(registrarUsuarioDto: RegistrarUsuarioDto): Promise<Usuario>

    abstract obtenerUsuarios(): Promise<ListaOrdenada<Usuario>>

    abstract obtenerUsuario(id: string): Promise<Usuario> 

    abstract actualizarUsuario(id: string, actualizarUsuarioDto: ActualizarUsuarioDto): Promise<Usuario>

    abstract eliminarUsuario(id: string): Promise<boolean>
}