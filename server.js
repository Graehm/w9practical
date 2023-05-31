const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Hello Stranger</h1>')
})
app.get('/greeting/:name', (req, res) => {
    res.send(req.params); 
    res.send(`Hello there, ${name}`);
})
app.listen(3000, () =>{
    console.log('Yes, I am listening on port 3000')
})

