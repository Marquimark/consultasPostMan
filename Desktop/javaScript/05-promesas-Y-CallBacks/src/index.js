
import{ obtenerHeroresArr, heroesCiclo, heroeIfAwait } from './js/await'


// import { promesaLenta, promesaMedia, promesaRapida } from './js/promesas';
// import { buscarHeroe, buscarHeroeAsync } from './js/promesas';

// promesaLenta.then( console.log );
// promesaMedia.then( console.log );
// promesaRapida.then( console.log);

// Promise.race([ promesaLenta, promesaMedia, promesaRapida])
        // .then( mensaje => console.log(mensaje)); //mismo codigo de abajo
//         .then( console.log );

// buscarHeroe( 'capi2' )
//         .then( heroe => console.log(heroe) )
//         .catch( console.warn);
// buscarHeroeAsync( 'iron2' )
//         .then( heroe => console.log(heroe) )
//         .catch( console.warn);


// const heroes = obtenerHeroresArr();
// obtenerHeroresArr().then( console.table );

// console.log( heroes );

heroesCiclo();
heroeIfAwait('iron');