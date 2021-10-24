
const { response, query } = require('express');

//aunque es algo redundante lo de response, no está de mal ponerlo.
const usuariosGet = (req, res = response) => {

    //extraer los params cuando mandamos querys que son opcionales-> usuarios?nombre=Angel
    //se puede desestructurar con los datos que queremos o sabemos que puede o no venir
    // si solo queremos nombre, id y key {nombre, id, key} y si no viene el nombre podemos ponerlo nosotros {nombre='no name', id, key}
    const query = req.query;
    res.json({
        msg: 'get API',
        query: query
    });
}

const usuariosPost = (req, res = response) => {

    //Extraer datos del body:
    const body = req.body; //req-> request
    res.json({
        msg: 'post API',
        body: body
    });
}

const usuariosPut = (req, res = response) => {

    //si tuvieramos mas parametros por recibir pondriamos {id, nombre, etc} = req.params
    const id = req.params.id;//asignamos de la request-> req,  parametros-> params, nombre que dimos en la ruta :id-> id

    res.json({
        msg: 'put API',
        id: id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API'
    });
}

//mandamos un objeto, por que tendrémos muchos metodos que mandar.
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}