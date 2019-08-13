const { db, Trainer, Pokemon } = require('./server/db/index');
const { green, red } = require('chalk');

const seed = async () => {
  try {
    await db.sync({ force: true });

    const ash = await Trainer.create({
      name: 'Ash Ketchem',
      badges: ['Boulder Badge', 'Cascade Badge', 'Thunder Badge'],
    });

    const misty = await Trainer.create({
      name: 'Misty Yawa',
      badges: ['Rainbow Badge', 'Soul Badge'],
    });

    const pikachu = await Pokemon.create({
      name: 'Pikachu',
      pokedexNum: 25,
      element: 'electric',
      description: 'Pikachu is an electric mouse pokemon',
    });

    const onix = await Pokemon.create({
      name: 'Onix',
      pokedexNum: 95,
      element: 'Rock',
      description: 'Rock snake pokemon',
    });

    const psyduck = await Pokemon.create({
      name: 'Psyduck',
      pokedexNum: 54,
      element: 'Water',
      description: 'A duck pokemon',
    });

    const topegi = await Pokemon.create({
      name: 'Togepi',
      pokedexNum: 175,
      element: 'Fairy',
      description: 'A spikeball pokemon',
    });

    await pikachu.setTrainer(ash);
    await onix.setTrainer(ash);
    await psyduck.setTrainer(misty);
    await topegi.setTrainer(misty);

    console.log(green('Seeding success!'));
    db.close();
  } catch (err) {
    console.error(red('Oh noes! Something went wrong!'));
    console.error(err);
    db.close();
  }
};

seed();
