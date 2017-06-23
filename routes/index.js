const express = require('express');
const router = express.Router();
const faker = require('faker');
const { chain, random } = require('lodash');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/api/users', function(req, res, next) {
  const users = chain(random(1, 10))
    .range()
    .map(() => ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    }))
    .value();

  res.json(users);
});

router.get('/api/users/lastnames/:lastName/firstnames/:firstName', function(req, res, next) {
  const { lastName, firstName } = req.params;

  res.json({
    firstName,
    lastName,
    title: faker.name.title(),
    jobTitle: faker.name.jobTitle(),
    avatar: faker.image.abstract(),
    age: random(18, 70)
  });
});

module.exports = router;
