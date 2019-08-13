const router = require('express').Router();
const { Pokemon } = require('../db/index');

router.get('/all', async (req, res, next) => {
  try {
    const allPokemon = await Pokemon.findAll();
    res.send(allPokemon);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const poke = await Pokemon.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.send(poke);
  } catch (err) {
    next(err);
  }
});

router.post('/', async (req, res, next) => {
  try {
    const { name, pokedexNum, element, description } = req.body;
    const newPoke = await Pokemon.create({
      name,
      pokedexNum,
      element,
      description,
    });
    res.send(newPoke);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const deleted = await Pokemon.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.json(deleted);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
