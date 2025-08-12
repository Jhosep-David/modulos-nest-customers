
export class Categoria {

    //constructor:
    //metodo(funcion) que se 
    //ejecuta automaticamente al crear un 
    //objeto de esta clase 
    //Sirve para:
    //dar valor inicial a 
    //atributos.
    constructor( id: number, 
        usuarioId: number,
        nombre: string,
        esPredeterminada: boolean,
        tipoPredeterminada: string,
        

    ){
        this.id= id;
        this.usuarioId = usuarioId;
        this.nombre = nombre;
        this.esPredeterminada = esPredeterminada;
        this.tipoPredeterminada= tipoPredeterminada;
        //inicializacion
        //por defecto:
        //no necesariamente un atributo
        //se inicializa con un parametro
        //no siempre es necesario que un atributo se inicalice con un parametro
        this.fechaCreacion = new Date(); 
        this.activo = true;


    }

    id: number; 
    usuarioId: number;
    nombre: string;
    esPredeterminada: boolean;
    tipoPredeterminada: string;
    fechaCreacion: Date;
    activo: boolean


}
