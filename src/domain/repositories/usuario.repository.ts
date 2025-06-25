import { ListaOrdenada } from "../../shared";
import { ActualizarUsuarioDto, RegistrarUsuarioDto } from "../dtos";
import { Usuario } from "../entities";

export abstract class UsuarioRepository{
    
    abstract insertarUsuario(registrarUsuarioDto: RegistrarUsuarioDto): Promise<Usuario>

    abstract obtenerUsuarios(inicio: number, filas: number): Promise<ListaOrdenada<Usuario>>

    abstract obtenerUsuario(id: number): Promise<Usuario> 

    abstract actualizarUsuario(id: number, actualizarUsuarioDto: ActualizarUsuarioDto): Promise<Usuario>

    abstract eliminarUsuario(id: number): Promise<boolean>
}