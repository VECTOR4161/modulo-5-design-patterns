import { PrismaAdapter } from "../../../config";
import { ActualizarUsuarioDto, RegistrarUsuarioDto, Usuario, UsuarioDatasource, UsuarioWebFactory } from "../../../domain";
import { ListaOrdenada } from "../../../shared";

interface UsuarioDB {
    id: number;
    nombre: string;
    apellidos: string;
    id_rol: number;
    activo: boolean;
}

export class UsuarioDatasourceImplPrisma implements UsuarioDatasource{

    usuarioDBToUsuarioEntity(usuarioDB: UsuarioDB){
        switch (usuarioDB.id_rol){
            case 1: 
                const factory = new UsuarioWebFactory().crearUsuario()
        }
    }


    async insertarUsuario(registrarUsuarioDto: RegistrarUsuarioDto): Promise<Usuario> {
        try {
            const prisma = PrismaAdapter.crearConexion()
            const usuarioDB = await prisma.usuario.create({
                data: {
                    nombre: registrarUsuarioDto.nombre,
                    apellidos: registrarUsuarioDto.apellidos,
                    id_rol: registrarUsuarioDto.idRol,
                    activo: registrarUsuarioDto.activo
                }
            })
        } catch (error) {
            
        }
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