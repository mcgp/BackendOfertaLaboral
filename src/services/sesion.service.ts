import {injectable, /* inject, */ BindingScope} from '@loopback/core';
import {Usuario} from '../models';
import {  Keys as llaves} from '../config/keys';
const jwt = require('jsonwebtoken');
@injectable({scope: BindingScope.TRANSIENT})
export class SesionService {
  constructor(/* Add @inject to inject parameters */) {}

  /*
   * Funcion que genera un tolen
   */
  GenerarToken(usuario:Usuario): string{
    let tk = jwt.sign({
      exp: llaves.tiempoVencimientoJWT,
      data: {
        username: usuario.nombre_usuario,
        role: usuario.tipoUsuarioId
      }
    }, llaves.claveSecretaJWT);
    return tk;
  }

  /**
   * Veirficar la validez de un token JWT
   */
   VerificarTokenJWT(token:string){
     try {
      let decoded = jwt.verify(token, llaves.claveSecretaJWT);
      return decoded;
     } catch {
       return null;
     }
  }


}
