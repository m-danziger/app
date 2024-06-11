import express from 'express'
import cors from 'cors';	


const app = express()	
app.use(cors())	
app.use(express.json())	

let tasks = []	

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