import jwt from 'jsonwebtoken'

export class JwtAdapter{

    static async generateToken(
        payload: Object,
        duration: string = '12h')
        : Promise<string | null>{

        return await new Promise( ( resolve ) => {
            jwt.sign(payload, 'SEED', { expiresIn: '12h'}, (err, token) => {
              if(err) return resolve(null)
              resolve(token!)
            })
        })
    }

    static validateToken( token: string ): Promise<true | null> {

        return new Promise( (resolve) => {
    
          jwt.verify( token, 'SEED', (err, decoded) => {
    
            if ( err ) return resolve(null);
    
            resolve(true);
          });
        });
      }
}