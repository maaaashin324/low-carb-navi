const express = require('express');

const router = express.Router();

module.exports = (services) => {
  router.post('', (req, res) => {
    const { name, lng, lat } = req.body;
    services.db.restaurants.createRestaurant(name, lng, lat)
      .then(successRes => res.status(201).json(successRes))
      .catch(err => res.status(400).send(err.message));
  });

  router.get('', (req, res) => services.db.restaurants.listRestaurant()
    .then(successRes => res.status(200).json(successRes))
    .catch(err => res.status(400).send(err.message)));
};