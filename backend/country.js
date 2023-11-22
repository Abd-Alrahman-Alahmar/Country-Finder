const express = require('express');
const axios = require('axios');

const router = express.Router();

router.post('/', async (req, res) => {

  try {
    const country = req.body.country;
    const response = await axios.get(`https://restcountries.com/v3.1/name/${country}`);
    res.json(response.data);


  } catch (error) {

    res.status(500).json({ message: error });
  }
});

module.exports = router;