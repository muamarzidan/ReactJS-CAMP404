const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('./config/db');


const app = express();
const port = 3000;

app.use(morgan('tiny'));
app.use(cors());
app.use(express.json());

app.listen(port, () => {
    console.log(`Server berjalan pada port ${port}`);
});