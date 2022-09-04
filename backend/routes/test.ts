const router = require('express').Router();
const user = require("../logica/usuario");
const prop = require("../logica/propiedades");
const funcionalidades = require("../logica/funcionalidades");

router.get("/", function (req: any, res: any) {
    const usuario = new prop;
    res.json(usuario.getPrecioHotel());
});

module.exports = router;