const { response } = require('express');

const usuariosDelete = (req, res = response) => {

    res.status(403).json({ok:true,msg:'DELETE API - Controller'})

}

const usuariosGet = (req = request, res = response) => {
    const {query} = req.query;
    res.status(403).json({
        nombre:query,
        ok:true,
        msg:'GET API - Controller'})

}

const usuariosPut = (req, res = response) => {
    const {id} = req.params.id;

    res.status(403).json({
        id,
        ok:true,msg:'PUT  API - Controller'
    })

}

const usuariosPost = (req, res = response) => {
    const {nombre,edad} = req.body;

    res.json({
        nombre,
        edad,
        ok:true,
        msg:'POST API - Controller'
    });

}

module.exports = {
    usuariosGet,
    usuariosDelete,
    usuariosPost,
    usuariosPut
}