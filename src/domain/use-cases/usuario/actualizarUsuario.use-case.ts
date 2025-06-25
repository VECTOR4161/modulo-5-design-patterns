import { ActualizarUsuarioDto } from "../../dtos"
import { Usuario } from "../../entities"
import { UsuarioRepository } from "../../repositories"


interface ActualizarUsuarioUseCase{
    execute(idUsuario: number, actualizarUsuarioDto: ActualizarUsuarioDto): Promise<Usuario>
}

export class ActualizarUsuario implements ActualizarUsuarioUseCase{
    constructor(
        private readonly usuarioRepository: UsuarioRepository
    ){}

    async execute(idUsuario: number, actualizarUsuarioDto: ActualizarUsuarioDto): Promise<Usuario> {
        return await this.usuarioRepository.actualizarUsuario(idUsuario, actualizarUsuarioDto)
    }
}