const express = require('express');
const path = require('path');

const port = process.env.PORT || 3000 ; 

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req, res) => {
    // res.send('/index.html')
});

app.listen(port, () => {
    console.log(`App up and running on port ${port}`)
});