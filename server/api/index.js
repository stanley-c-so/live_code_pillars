const express = require('express');
const morgan = require('morgan');
const path = require('path');
const port = 8000;

const app = express();

//logging middleware
app.use(morgan('dev'));

//body-parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//serving up static files
app.use(express.static(path.resolve(__dirname, '../public')));

//send poke routes to pokemon file
app.use('/api/pokemon', require('./pokemon'));

//send trainer routes to trainer file
app.use('/api/trainers', require('./trainer'));

// error handling middleware comes last
// Express identifies this as error handling middleware
// because it has 4 parameters, the first of which is an 'err'
// provided from some error throwing middleware as a call like 'next(err)'
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message);
});

app.listen(port, () => {
  console.log('listening!');
});

module.exports = app;
