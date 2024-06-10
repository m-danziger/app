import express from 'express';
import cors from 'cors';
import pgPromise from 'pg-promise';

const app = express()

function handler(req, res){
    res.send('hi from the server')
}

app.get('/api',handler)

app.listen(3000, ()=>{
    console.log(`the server is running on port 3000`)
})
