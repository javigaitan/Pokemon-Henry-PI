const { Router } = require('express');
const typesRoute = require('../routes/types');         
const pokemonsRoute = require('../routes/pokemons'); 

const router = Router();

router.use("/pokemons", pokemonsRoute);   
router.use("/types", typesRoute);    



module.exports = router;
