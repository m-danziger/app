import express from 'express';
import cors from 'cors';
import pgPromise from 'pg-promise';

const app = express()
app.use(cors())


app.listen(3000, () => {
    console.log(`the server is running on port 3000`)
})

app.get('/api', (req, res, next) => {
    console.log("hi 1")
    next()
 }, (a, b) => {
        b.send('hi from api')
    })

app.post('/tasks', (req, res) => {
    req.send()
})

app.get('/tasks', (req, res) => {

    const tasks1 = [{
        title: "newTaskValue1",
        done: false
    }, {
        title: "newTaskValue2",
        done: false
    }]

    res.json(tasks1)
})


