export class RegistrarUsuarioDto{
    private constructor(
        public nombre: string,
        public apellidos: string,
        public idRol: number,
        public activo: boolean
    ){}

    static create( object: {[key: string]: any}): [string?, RegistrarUsuarioDto?]{
        let {
            nombre,
            apellidos,
            idRol
        } = object

        if( !nombre ) return ['El nombre es requerido', undefined] 
        if( !apellidos ) return ['Los apellidos son necesarios', undefined] 
        if( idRol ) return ['El rol para este usuario es requerido', undefined]
        
        return [undefined, new RegistrarUsuarioDto(
            nombre,
            apellidos,
            idRol,
            true
        )]
    }
}