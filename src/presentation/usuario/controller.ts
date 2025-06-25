import { Request, Response } from "express"
import { ActualizarUsuario, ActualizarUsuarioDto, CrearUsuario, EliminarUsuario, ObtenerUsuario, ObtenerUsuarios, RegistrarUsuarioDto, UsuarioRepository } from "../../domain";
import { CustomError } from "../../config";

export class UsuarioController {
    constructor(
        private readonly usuarioRepository: UsuarioRepository
    ){}

    private handleError = ( error: unknown, res: Response ) => {
        if ( error instanceof CustomError ) {
          return res.status(error.statusCode).json({ error: error.message });
        }
    }

    registrarUsuario = async (req: Request, res: Response) => {
        const [error, registrarUsuarioDto] = RegistrarUsuarioDto.create(req.body)
        if( error ) {
            res.json( error )
            return
        }

        new CrearUsuario(this.usuarioRepository)
            .execute(registrarUsuarioDto!)
            .then(data => res.json( data ))
            .catch( error => this.handleError(error, res))
    }

    actualizarUsuario = async (req: Request, res: Response) => {
        const [error, actualizarUsuarioDto] = ActualizarUsuarioDto.create(req.body)
        if( error ) {
            res.json( error )
            return
        }

        new ActualizarUsuario(this.usuarioRepository)
            .execute(Number(req.params.id), actualizarUsuarioDto!)
            .then(data => res.json(data))
            .catch(error => this.handleError(error, res))
    }

    eliminarUsuario = async (req: Request, res: Response) => {
        new EliminarUsuario(this.usuarioRepository)
            .execute(Number(req.params.id))
            .then(data => res.json(data))
            .catch(error => this.handleError(error, res))
    }

    obtenerUsuario = async (req: Request, res: Response) => {
        new ObtenerUsuario(this.usuarioRepository)
            .execute(Number(req.params.id))
            .then(data => res.json(data))
            .catch(error => this.handleError(error, res))
    }
    obtenerUsuarios = async (req: Request, res: Response) => {
        new ObtenerUsuarios(this.usuarioRepository)
            .execute(Number(req.params.inicio), Number(req.params.filas))
            .then(data => res.json(data))
            .catch(error => this.handleError(error, res))
    }
}