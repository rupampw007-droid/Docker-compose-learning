import express, { json } from 'express'

const app = express();


app.get('/', (req,res) => {
    res.json({
        "message" : "get endpoint"
    })
})

app.post('/', (req,res) => {
    res.json({
        "message" : "post endpoint"
    })
})

app.listen(3000)
