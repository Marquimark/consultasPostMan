
import{ buscarHeroeAsync, buscarHeroe } from './promesas'

const heroesId = ['capi', 'iron', 'spider'];
// const heroesPromesas = heroesId.map( id => buscarHeroe(id) );
const heroesPromesas = heroesId.map( buscarHeroe );

export const obtenerHeroresArr = async () => {

    const heroesArr = [];

    for( const id of heroesId ){
        const heroe = await buscarHeroeAsync( id )//.then( heroe => heroesArr.push( heroe ) );
        heroesArr.push( heroe );
    }
    
    // setTimeout(() => {
    //     console.log('Obtener Heroes');
    //     console.table( heroesArr );        
    // }, 1000);

    return heroesArr;
};


export const heroesCiclo = async () => {

    console.time( 'HeroesCiclo' );

    // const heroes =  await Promise.all( heroesPromesas );
    // heroes.forEach( heroe => console.log(heroe) );

    // for await

    for await (const heroe of heroesPromesas ){
        console.log( heroe );
    }


    // console.log( heroes );
    console.timeEnd( 'HeroesCiclo' );
}

//if await
export const heroeIfAwait = async( id ) => {

    if ( ( await buscarHeroeAsync( id ) ).nombre === 'Ironman') {
        console.log( 'Es el mejor de todos' );    
    } else {
        console.log('Naaaa');
    }

}