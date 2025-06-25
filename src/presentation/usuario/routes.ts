import { Router } from "express"
import { UsuarioDatasourceImplPrisma, UsuarioRepositoryImpl } from "../../infrastructure"
import { UsuarioController } from "./controller"


export class UsuarioRoutes{
    static get routes(): Router{

        const router = Router()

        const usuarioDatasource = new UsuarioDatasourceImplPrisma()
        const usuarioRepository = new UsuarioRepositoryImpl(usuarioDatasource)
        const usuarioControlador = new UsuarioController(usuarioRepository)


        router.post('/', usuarioControlador.registrarUsuario)
        router.get('/:inicio/:filas', usuarioControlador.obtenerUsuarios)
        router.get('/:id', usuarioControlador.obtenerUsuario)
        router.put('/:id', usuarioControlador.actualizarUsuario)
        router.delete('/:id', usuarioControlador.eliminarUsuario)


        return router
    }
}