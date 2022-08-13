const router = require('express').Router();
const user = require("../logica/usuario");

router.get("/", function (req: any, res: any) {
    const usuario = new user;
    res.json(usuario.getEstado());
});

module.exports = router;