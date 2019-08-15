const router = require('express').Router();
const { Trainer, Pokemon } = require('../db/index');

router.get('/all', async (req, res, next) => {
  try {
    const allTrainers = await Trainer.findAll();
    res.send(allTrainers);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const trainer = await Trainer.findOne({
      where: {
        id: req.params.id
      },
      include: [{ model: Pokemon }]
    });
    res.send(trainer);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    //Second argument can be destructured, or we can get it below
    //using trainer[0] in the res.json()
    const [numberOfRowsUpdated, [trainer]] = await Trainer.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true
    });
    res.json(trainer);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
