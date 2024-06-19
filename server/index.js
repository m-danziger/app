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
    try {
        // tasks.push(req.body)
        const userId = req.query.userIdLogin;
        const b = await db.one('insert into todos.task (title, user_id) values (${title}, ${user_id}) returning *', {
            title: req.body.title,
            user_id: userId
        })
        res.json({
            title: b.title,
            done: false,
            id: b.user_id
        })
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'tasks post failed' })
    }
})

app.get('/tasks', async (req, res) => {
    try {
        const userId = req.query.userIdLogin;
        let a = await db.any('select * from todos.task where user_id = ${idUser} AND deleted_at is null', {
            "idUser": userId
        })
        res.json(a.map(task => ({ id: task.id, title: task.title, done: task.status !== 'active' })))
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'tasks get failed' })
    }
})

app.post('/users', async (req, res) => {
    let r = await db.one('insert into todos.person ("userName", pass) values (${name}, ${password}) returning *', {
        name: req.body.name,
        password: req.body.password
    })
    res.json('ok')
})



/*app.post('/login', async (req, res) => {
    let r = await db.one(`select * from todos.person where "userName" = 'martin' and pass = 'passw0rd'`,)
        res.json(r)
})*/

app.post('/login', async (req, res) => {
    try {
        let r = await db.one('select * from todos.person where "userName" = ${name} AND pass = ${password}', {
            "name": req.body.name,
            "password": req.body.password
        })
        res.json(r)

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Login failed' });
    }
})

app.get('/login', async (req, res) => {
    try {
        let r = await db.one(`select * from todos.person where "userName" = 'martin' and pass = 'passw0rd'`,)
        res.json(r)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'get Login failed' })
    }
})

app.get('/users', async (req, res) => {
    try {
        let a = await db.any('select * from todos.person')
        res.json(a)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'users get failed' })
    }
})


app.patch('/tasks/:id', async (req, res) => {
    try {


        // let task = tasks.find((task) => task.id.toString() === req.body.id)
        await db.any("update todos.task SET status = 'done' where id = ${id}", {
            id: req.params.id
        })
        //task.done = true;
        res.json()
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'tasks patch failed' })
    }
})

app.delete('/tasks/:id', async (req, res) => {
    try {
        await db.any("update todos.task SET deleted_at = now() where id = ${id}", {
            id: req.params.id
        })
        res.json()
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'tasks delete failed' })
    }
})

app.listen('3000', () => {
    console.log('the server is now running on port 3000')
})


