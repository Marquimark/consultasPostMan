import{ buscarHeroe } from './js/callBacks'
import './styles.css';

const heroeId1 = 'capi';
const heroeId2 = 'iron';

buscarHeroe( heroeId, ( err, heroe ) => {

    if( err ) { return console.error( err ); }

    buscarHeroe( heroeId2 , ( err, heroe2) ) => {

        if( err ) { return console.error( err ); }

        console.log(`Enviando a ${ heroe1.nombre } y ${ heroe2.nombre } a la mision `);

    }
    
});


// call back hell, es el infierno de callback, es cuando se anidan callbacks,\
// un callback se ejecuta y otro espera las respuesta de el utlimo para ejecutarse
// y asi sucesivamente.

