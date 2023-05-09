const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const pokeTypes = require('./Types.js');
const Pokelist = require('./Pokemons');

router.use('/pokemon', Pokelist);
router.use('/type', pokeTypes);


module.exports = router;
