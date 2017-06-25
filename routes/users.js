const express = require('express');
const { name, image, random: { uuid } } = require('faker');
const { chain, random } = require('lodash');

const router = express.Router();


router.get('/', function(req, res, next) {
  const users = chain(random(1, 10))
    .range()
    .map(() => ({
      firstName: name.firstName(),
      lastName: name.lastName(),
      userId: uuid()
    }))
    .value();

  res.json(users);
});

router.get('/:userId', function(req, res, next) {
  const { userId } = req.params;

  res.json({
    age: random(18, 70),
    avatar: image.abstract(),
    firstName: name.firstName(),
    jobTitle: name.jobTitle(),
    lastName: name.lastName(),
    title: name.title(),
    userId
  });
});

module.exports = router;
