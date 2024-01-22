const { response } = require('express')

const usuariosGet = (req = request, res = response) => {

    const query = req.query;

    res.json({
        ok : res.statusCode,
        message : 'get API - controlador',
        query
    })
}

const usuariosPost = (req, res = response) => {

    const { nombre, edad }= req.body


    res.json({
        ok:res.statusCode,
        message : ' post API - controlador',
        nombre,
        edad
    })
}
const usuariosPut = (req, res = response) => {

    const {id} = req.params;

    res.json({
        ok:res.statusCode,
        message : ' put API - controlador',
        id
    })
}
const usuariosPatch = (req, res = response) => {
    res.json({
        ok:res.statusCode,
        message : ' patch API - controlador'
    })
}
const usuariosDelete = (req, res = response) => {
    res.json({
        ok:res.statusCode,
        message :' delete API - controlador'
    })
}


module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete
}




