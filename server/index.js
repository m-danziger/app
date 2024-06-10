import express from 'express';
import cors from 'cors';
import pgPromise from 'pg-promise';

const app = express()
app.use(cors())


app.listen(3000, () => {
    console.log(`the server is running on port 3000`)
})

app.get('/api', (req, res) => {
    res.send('hi from api')
})


app.get('/tasks', (req, res) => {

    const tasks = [{
        title: "newTaskValue1",
        done: false
    }, {
        title: "newTaskValue2",
        done: false
    }]

    res.json(tasks)
})


