import { Usuario } from "../entities";
import { UsuarioRepository } from "../repositories";

interface ObtenerUsuarioUseCase{
    execute(idUsuario: number): Promise<Usuario>
}

export class ObtenerUsuario implements ObtenerUsuarioUseCase{
    constructor(
        private readonly usuarioRepository: UsuarioRepository
    ){}

    async execute(idUsuario: number): Promise<Usuario> {
        return await this.usuarioRepository.obtenerUsuario(idUsuario)
    }
}