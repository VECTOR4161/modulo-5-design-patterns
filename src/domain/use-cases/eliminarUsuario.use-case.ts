import { UsuarioRepository } from "../repositories";

interface EliminarUsuarioUseCase{
    execute(idUsuario: number): Promise<boolean>
}

export class EliminarUsuario implements EliminarUsuarioUseCase{
    constructor(
        private readonly usuarioRepository: UsuarioRepository
    ){}

    async execute(idUsuario: number): Promise<boolean> {
        return await this.usuarioRepository.eliminarUsuario(idUsuario)
    }
}