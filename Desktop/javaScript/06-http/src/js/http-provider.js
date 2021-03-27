
const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';

// definir Url y Preset de claudinay

const cloudUrl = "https://api.cloudinary.com/v1_1/dnpyidlph/upload";
const cloudPreset = "ktsv6mis";


const obtenerChiste = async () => {

    try{

        const resp = await fetch( jokeUrl );

        if( !resp.ok ) throw 'No se pudo realizar la peticion';
    
        // const chiste = await resp.json();

        const { icon_url, id, value } =  await resp.json();
        
        return { icon_url, id, value };
        
        // return chiste;
    

    } catch( err ){

            throw err;

    }

};

const obtenerUsuarios = async () => {

    const resp = await fetch( urlUsuarios );
    const { data: usuarios } = await resp.json();

    // console.log( data );
    return usuarios;
}


//archivo subir :: file 

const subirImagen = async ( archivoSubir ) => {

    const formData = new FormData();
    formData.append('upload_preset', cloudPreset );
    formData.append('file', archivoSubir );

    try{
        const resp = await fetch( cloudUrl, { 
            method: 'POST',
            body  : formData
        });

        if( resp.ok ){
            const cloudResp = await resp.json();
            console.log( cloudResp );
            return cloudResp.secure_url;
            // console.log( cloudResp.secure_url );
        }else{
            throw await resp.Json ;
        };

    }catch( e ){
        console.log( e );
    };    

}

export{
    obtenerChiste,
    obtenerUsuarios,
    subirImagen
} 