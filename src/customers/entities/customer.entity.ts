export class Customer {

    //constructor:
    //metodo(funcion) que se 
    //ejecuta automaticamente al crear un 
    //objeto de esta clase 
    //Sirve para:
    //dar valor inicial a 
    //atributos.
    constructor(id: number, 
                nombre: string,
                apellido: string,
        

    ){
        this.id = id; 
        this.firstName = nombre;
        this.lastName = apellido; 
        //inicializacion
        //por defecto:
        //no necesariamente un atributo
        //se inicializa con un parametro
        //no siempre es necesario que un atributo se inicalice con un parametro
        this.birthDate = new Date(); 
        this.isActive = true;


    }

    id: number; 
    firstName: string;
    lastName: string;
    birthDate: Date;
    isActive: boolean


}
