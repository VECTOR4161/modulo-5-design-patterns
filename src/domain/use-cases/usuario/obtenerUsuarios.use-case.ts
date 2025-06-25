import { ListaOrdenada } from "../../../shared"
import { Usuario } from "../../entities"
import { UsuarioRepository } from "../../repositories"



interface ObtenerUsuariosUseCase{
    execute(inicio: number, filas: number): Promise<ListaOrdenada<Usuario>>
}

export class ObtenerUsuarios implements ObtenerUsuariosUseCase{
    constructor(
        private readonly usuarioRepository: UsuarioRepository
    ){}

    async execute(inicio: number, filas: number): Promise<ListaOrdenada<Usuario>> {
        return await this.usuarioRepository.obtenerUsuarios(inicio, filas)
    }
}