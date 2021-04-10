export namespace Keys {
  export const origenCorreoElectronico = 'maria.1701614679@ucaldas.edu.co'
  export const asuntoNuevoUsuario = '[Nuevo usuario creado, Mensaje de bienvenida]';
  export const tiempoVencimientoJWT = Math.floor(Date.now()/1000) +(60*60*8);
  export const claveSecretaJWT = 'jwt@Prog3';
  export const twilioPhone = '+13235082989'
  export const carpetaImagenPersonas = '../../archivos/personas';
  export const nombreCampoImagenPersona = 'file';
  export const extensionesPermitidasIMG: string[] = ['.PNG','.JPG','.JPEG','.SVG'];
  export const tamMaxImagenPersona = 1024*1024;
  export const carpetaDocumentoPersona = '../../archivos/documentos';
  export const nombreCampoDocumentoPersona = 'file';
  export const extensionesPermitidasDOC: string[] = ['.PDF','.DOC','.DOCX','.XLS'];
}
