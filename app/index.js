'use strict';

const express = require('express')
const { name, version } = require('../package.json');
const app = express()

app.get('/',
  (req, res) => res.json({ status: 'operational' })
);

app.get('/version',
  (req, res) => res.json({ name, version })
);

app.get('/random',
  (req, res) => res.json({ number: Math.round(Math.random() * 1000) })
);

module.exports = app;
