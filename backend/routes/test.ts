const router = require('express').Router();
const user = require("../logica/usuario");
const prop = require("../logica/propiedades");

router.get("/", function (req: any, res: any) {
    const usuario = new prop;
    usuario.setTipoDePropiedad("Amarillo");
    res.json(usuario);
});

module.exports = router;