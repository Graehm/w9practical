const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('Hello Stranger')
})

app.listen(3000, () =>{
    console.log('Yes, I am listening on port 3000')
})

