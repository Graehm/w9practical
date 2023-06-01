const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.send('<h1>Hello Stranger</h1>')
})
app.get('/greeting/:name', (req, res) => {
    res.send(req.name); 
    res.send(`Hello there, ${'name'}`);
})
app.get('/tip', (req, res) =>{
    res.send(total, tipPercentage)
})

app.get('/magic', (req, res) => {
    const arr =["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely","You may rely on it", "As I see it yes", "Most likely", "Outlook good","Yes", "Signs point to yes", "Reply hazy try again", "Ask again later","Better not tell you now", "Cannot predict now", "Concentrate and ask again","Don't count on it", "My reply is no", "My sources say no","Outlook not so good", "Very doubtful"]
    res.send('')
})

app.get('/fibonacci', (req, res) => {

})


app.listen(3000, () =>{
    console.log('Yes, I am listening on port 3000')
})

