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


// let tasks = []

/*app.get('/hi', async (req, res) => {
    let a =  await db.one('select * from todos.task')
     res.json(a)
 })*/

app.post('/tasks', async (req, res) => {
    // tasks.push(req.body)
    const b = await db.one('insert into todos.task (title, user_id) values (${title}, ${user_id}) returning *', {
        title: req.body.title,
        user_id: 1
    })
    res.json({
        title: b.title,
        done: false,
        id: b.user_id
    })
})

app.post('/users', async (req, res) => {
    let r = await db.one('insert into todos.person ("userName", pass) values (${name}, ${password}) returning *',{
        name : req.body.name,
        password :req.body.password 
})
    res.json('ok')
})



app.post('/login', async (req, res) => {
    let r = await db.one(`select * from todos.person where "userName" = 'martin' and pass = 'passw0rd'`,)
        res.json(r)
})

app.get('/login', async (req, res) => {
    let r = await db.one(`select * from todos.person where "userName" = 'martin' and pass = 'passw0rd'`,)
        res.json(r)
})

app.get('/users', async (req, res) => {
    let a = await db.any('select * from todos.person')
    res.json(a)
})

app.get('/tasks', async (req, res) => {
    let a = await db.any('select * from todos.task where deleted_at is null')
    res.json(a.map(task => ({ id: task.id, title: task.title, done: task.status !== 'active' })))
})

app.patch('/tasks/:id', async (req, res) => {
    // let task = tasks.find((task) => task.id.toString() === req.body.id)
    await db.any("update todos.task SET status = 'done' where id = ${id}", {
        id: req.params.id
    })
    //task.done = true;
    res.json()
})

app.delete('/tasks/:id', async (req, res) => {
    await db.any("update todos.task SET deleted_at = now() where id = ${id}", {
        id: req.params.id
    })
    res.json()
})

app.listen('3000', () => {
    console.log('the server is now running on port 3000')
})


