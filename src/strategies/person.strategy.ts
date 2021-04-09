import {AuthenticationStrategy} from '@loopback/authentication';
import {service} from '@loopback/core';
import {HttpErrors, Request} from '@loopback/rest';
import {UserProfile} from '@loopback/security';
import {request} from 'http';
import parseBearerToken from 'parse-bearer-token';
import {SesionService} from '../services';
//import jwt from '@loopback/authentication-jwt'

export class PersonStrategy implements AuthenticationStrategy {

  name: string = 'person';

  constructor(@service(SesionService)
  public servicioSesion: SesionService){

  }

  async authenticate(request: Request): Promise<UserProfile | undefined>{
    const token = parseBearerToken(request);
    if(!token) {
      throw new HttpErrors[401]("No tiene autorizacion");
    }
    let datos = this.servicioSesion.VerificarTokenJWT(token);
    if(datos){
      if(datos.data.role == "605c0035dd97d7f22bde74fa"){
      let perfil: UserProfile = Object.assign({
        nombre_usuario: datos.data.username,
        rol: datos.data.role
      });
      return perfil;
      }else{
        throw new HttpErrors[401]("Usted no tiene el rol para ejecutar esta accion");
      }
    }else {
      throw new HttpErrors[401]("usted no tiene un token valido");
    }
  }



}
