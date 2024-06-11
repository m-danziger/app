import express from 'express';
import cors from 'cors';
import pgPromise from 'pg-promise';

const app = express()
app.use(cors())
//app.use(express.json())

const tasks = []

app.post('/tasks', (req, res) => {
    console.log('body', req.body)
    tasks.push(req.body)
    res.json(req.body)
})

app.get('/tasks', (req, res) => {

    const tasks1 = [{
        title: "newTaskValue1",
        done: false
    }, {
        title: "newTaskValue2",
        done: true
    }]

    res.json(tasks1)
})

app.listen(3000, () => {
    console.log(`the server is running on port 3000`)
})
