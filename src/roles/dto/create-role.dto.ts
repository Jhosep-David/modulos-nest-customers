//DTO:
//Data Transfer Object:
//es u objeto que permite
//establecer una estructura
//para enviar objetos de un componente a otro .
//utilizacion en REST
//DTO se utiliza como estructura
//de una request para que pueda ser utilizada
//en un service
//Un DTO sirve para 
//validar el play load de entrada 
import { IsNotEmpty, MinLength } from "class-validator";

export class CreateRoleDto {
    @IsNotEmpty({message : "Debe de estar presente el nombre del rol"})
    @MinLength(7, 
                {message : "rol debe tener minimo de 7 caracteres"})
    nombre: string;
}
