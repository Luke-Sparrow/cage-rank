const express = require('express');
const cors = require('cors')


const app = express();

app.use(express.json());
app.use(cors())

app.get('/', (req,res) => {
    res.json({
        message: 'API for Nic Cage Ranking app'
    })
})



const port = process.env.PORT || 1337;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})