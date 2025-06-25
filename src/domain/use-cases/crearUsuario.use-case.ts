
import { RegistrarUsuarioDto } from "../dtos";
import { Usuario } from "../entities";
import { UsuarioRepository } from "../repositories";

interface CrearUsuarioUseCase{
    execute(registrarUsuarioDto: RegistrarUsuarioDto): Promise<Usuario>
}

export class CrearUsuario implements CrearUsuarioUseCase{
    constructor(
        private readonly usuarioRepository: UsuarioRepository
    ){}

    async execute(registrarUsuarioDto: RegistrarUsuarioDto): Promise<Usuario> {
        return await this.usuarioRepository.insertarUsuario(registrarUsuarioDto)
    }
}