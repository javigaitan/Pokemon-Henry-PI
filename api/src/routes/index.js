const { Router } = require('express');
const typesRoute = require('./Types')         
const pokemonsRoute = require('./pokemons'); 

const router = Router();

router.use("/pokemons", pokemonsRoute);   
router.use("/Types", typesRoute);    



module.exports = router;
