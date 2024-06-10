import express from 'express';
import cors from 'cors';
import pgPromise from 'pg-promise';

const app = express()



app.get('/api', (req,res) => {
     (res.send('hi from api'))
})


app.get('/ap', (req,res) => {
     (res.send('hi from ap'))
})

app.listen(3000, () => {
    console.log(`the server is running on port 3000`)
})

