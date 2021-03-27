import { buscarHeroe as buscarHeroeCallback } from './js/callBacks'
import { buscarHeroe } from './js/promesas';

import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'spider';

 
// buscarHeroe( heroeId, ( err, heroe ) => {

//     if( err ) {
//         console.error( err );
//     }else {
//         console.info( heroe );
//     }

// });

// buscarHeroe( heroeId1 ).then( heroe => {
//         console.log(`Eviando al espacio ${ heroe.nombre } a la mision`);
//         buscarHeroe( heroeId2 ).then( heroe2 =>{
//             console.log(`Eviando al ${ heroe.nombre } y  ${ heroe2.nombre } a la mision`);
//         });
// })

// Promise.all( [ buscarHeroe(heroeId1), buscarHeroe(heroeId2)]).then( heroes => {  
Promise.all( [ buscarHeroe(heroeId1), buscarHeroe(heroeId2)]) //desestructurando arreglos que son enviados como argumentos.
    .then( ([heroes1, heroes2]) => {

    // console.log('Promise.all ', heroes );
    // console.log(`Eviando al ${ heroes[0].nombre } y  ${ heroes[1].nombre } a la mision`);
    console.log(`Eviando al ${ heroes1.nombre } y  ${ heroes2.nombre } a la mision`);

}).catch(err => {
    alert( err );
}).finally ( ()=> {
    console.log('Finalizo la promise.all');
});

console.log('Fin del programa');

