import express from 'express'
import cors from 'cors';
import pgpromise from 'pg-promise'

const app = express()
app.use(cors())
app.use(express.json())

const pgp = pgpromise()
const db = pgp({
    host: 'ep-twilight-poetry-a6na3ibj.us-west-2.retooldb.com',
    port: 5432,
    database: 'retool',
    user: 'retool',
    password: 'fG0kYUux7WPm',
    ssl: true
});


let tasks = []

/*app.get('/hi', async (req, res) => {
    let a =  await db.one('select * from todos.task')
     res.json(a)
 })*/

app.post('/tasks', (req, res) => {
    tasks.push(req.body)
    console.log(req)
    res.json(req.body)
})

app.get('/tasks', (req, res) => {
    res.json(tasks)
})

app.patch('/tasks/:id', (req, res) => {
    let task = tasks.find((task) => task.id.toString() === req.params.id)
    task.done = true;
    res.json(tasks)
})

app.listen('3000', () => {
    console.log('the server is now running on port 3000')
})