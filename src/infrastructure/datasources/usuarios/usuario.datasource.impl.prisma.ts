import { CustomError, filtradorDeObjetos, PrismaAdapter } from "../../../config";
import { ActualizarUsuarioDto, CreadorDeUsuarios, RegistrarUsuarioDto, Usuario, UsuarioDatasource } from "../../../domain";
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
        return new CreadorDeUsuarios().crearUsuario({
            id: usuarioDB.id,
            nombre: usuarioDB.nombre,
            apellidos: usuarioDB.apellidos,
            activo: usuarioDB.activo,
            idRol: usuarioDB.id_rol
        })
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
            return this.usuarioDBToUsuarioEntity(usuarioDB)
        } catch (error) {
           throw CustomError.internalServer('Error al crear al usuario') 
        }
    }

    async obtenerUsuarios(inicio: number, filas: number): Promise<ListaOrdenada<Usuario>> {
        try {
            const prisma = PrismaAdapter.crearConexion()
            const usuariosDB = await prisma.usuario.findMany({
                skip: inicio,
                take: filas
            })
            return {
                lista: usuariosDB.map(usuarioDB => this.usuarioDBToUsuarioEntity(usuarioDB)),
                cantidad: await prisma.usuario.count()
            }
        } catch (error) {
            throw CustomError.internalServer('Error al obtener a los usuarios') 
        }
    }

    async obtenerUsuario(idUsuario: number): Promise<Usuario> {
        try {
            const prisma = PrismaAdapter.crearConexion()
            const usuarioDB = await prisma.usuario.findFirst({
                where: {
                    id: idUsuario
                }
            })
            if( !usuarioDB ) throw CustomError.notFound("No existe el usuario")
            return this.usuarioDBToUsuarioEntity(usuarioDB)
        } catch (error) {
            throw CustomError.internalServer('Error al obtener al usuario')
        }
    }

    async actualizarUsuario(idUsuario: number, actualizarUsuarioDto: ActualizarUsuarioDto): Promise<Usuario> {
        try {
            this.obtenerUsuario(idUsuario)
            const prisma = PrismaAdapter.crearConexion()
            const usuarioFiltrado = filtradorDeObjetos.filtrarDto(actualizarUsuarioDto)
            const usuarioDB = await prisma.usuario.update({
                data: usuarioFiltrado,
                where: {
                    id: idUsuario
                }
            })
            return this.usuarioDBToUsuarioEntity(usuarioDB)
        } catch (error) {
            throw CustomError.internalServer('Error al actualizar al usuario')
        }
        
    }

    async eliminarUsuario(idUsuario: number): Promise<boolean> {
        try {
            this.obtenerUsuario(idUsuario)
            const prisma = PrismaAdapter.crearConexion()
            await prisma.usuario.update({
                data: {
                    activo: false
                },
                where: {
                    id: idUsuario
                }
            })
            return true
        } catch (error) {
            throw CustomError.internalServer('Error al desactivar al usuario')
        }
    }

}