const express = require('express');
const countryRouter = require('./country');
const cors = require('cors')


const app = express();
app.use(cors())
app.use(express.json());
app.use('/country', countryRouter);

const port = 5000;

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});