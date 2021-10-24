
const { Router } = require('express');
const { 
    usuariosGet, 
    usuariosPost, 
    usuariosPut, 
    usuariosDelete, 
    usuariosPatch 
} = require('../controllers/usuarios');

//llamamos al método de router que tiene express.
const router = Router();

router.get('/', usuariosGet);

router.post('/', usuariosPost);

//para recoger parámetros lo ponemos con dos puntos y el nombre que queremos poner
router.put('/:id', usuariosPut);

router.patch('/', usuariosPatch);

router.delete('/', usuariosDelete);

module.exports = router;