
const urlCRUD = 'https://reqres.in/api/users';
// cloudinary

const  cloudPreset = 'ktsv6mis';
const  cloudUrl    = 'https://api.cloudinary.com/v1_1/dnpyidlph/upload';

const getUsuario  = async ( id ) => {

    const resp = await fetch(`${ urlCRUD } /${ id }`);
    const { data } = await resp.json();

    return data;

}


const crearUsuarios = async ( usuario ) => {

    const resp = await fetch( urlCRUD, {
        method: 'POST',
        body  : JSON.stringify( usuario ),
        headers: { 
            'Content-Type': 'application/json'
        }
    });

    // console.log( await resp.json() );
    return  await resp.json();

}

const actualizarUsuarios = async ( id, usuario ) => {

    const resp = await fetch( `${urlCRUD}/${id}`, {
        method: 'PUT',
        body  : JSON.stringify( usuario ),
        headers: { 
            'Content-Type': 'application/json'
        }
    });

    // console.log( await resp.json() );
    return  await resp.json();

}

const borrarUsuarios = async ( id ) => {

    const resp = await fetch(`${urlCRUD}/$${id}`,{
        method: 'DELETE'
    });

    return ( resp.ok ) ? 'Borrado' : 'No se pudo elimiar';

}



export {
    getUsuario,
    crearUsuarios,
    actualizarUsuarios,
    borrarUsuarios
}