export class ActualizarUsuarioDto{
    private constructor(
        public nombre?: string,
        public apellidos?: string,
        public idRol?: number,
        public activo?: boolean
    ){}

    static create( object: {[key: string]: any}): [string?, ActualizarUsuarioDto?]{
        let {
            nombre,
            apellidos,
            idRol,
            activo
        } = object

        if( nombre && typeof nombre !== 'string') return ['El nombre tiene el formato incorrecto', undefined]
        if( apellidos && typeof apellidos !== 'string') return ['Los apellidos tienen el formato incorrecto', undefined]
        if( idRol && typeof idRol !== 'number') return ['El identificador del rol tiene un formato equivocado', undefined]
        if( activo != null && typeof activo === 'boolean' ) return ['formato incorrecto de estado', undefined]
        
        return [undefined, new ActualizarUsuarioDto(
            nombre,
            apellidos,
            idRol,
            activo
        )]
    }
}