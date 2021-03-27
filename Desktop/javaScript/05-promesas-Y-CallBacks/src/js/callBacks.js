import { call } from "file-loader";


export const heroes = {
    capi: { 
        nombre: 'Capitan America',
        poder : 'Aguantar Inyecciones sin morir'
    },
    iron: {
        nombre: 'Ironman',
        poder : 'Absurda cantidad de dinero'
    },
    spider: {
        nombre: 'Spiderman',
        poder : 'La mejor reaccion alergica a la picadura de arana'
    },
}


//el callback retorna el heroe

export const buscarHeroe = ( id , callback ) => {
    
    const heroe = heroes[id];

    if ( heroe ){
        callback( null, heroe );
    } else {
        //un error
        callback(`No existe un heroe llamado ${ id }`);
    }

    // callback( heroe );

}

