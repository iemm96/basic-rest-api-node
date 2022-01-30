const { response } = require('express');

const usersDelete = (req, res = response) => {

    res.status(403).json({ok:true,msg:'DELETE API - Controller'})

}

const usersGet = (req = request, res = response) => {
    const {query} = req.query;
    res.status(403).json({
        nombre:query,
        ok:true,
        msg:'GET API - Controller'})

}

const usersPut = (req, res = response) => {
    const {id} = req.params.id;

    res.status(403).json({
        id,
        ok:true,msg:'PUT  API - Controller'
    })

}

const usersPost = (req, res = response) => {
    const {nombre,edad} = req.body;

    res.json({
        nombre,
        edad,
        ok:true,
        msg:'POST API - Controller'
    });

}

module.exports = {
    usersGet,
    usersDelete,
    usersPost,
    usersPut
}