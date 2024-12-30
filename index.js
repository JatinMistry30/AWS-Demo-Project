import express from 'express'
import ip from 'ip'

const app = express()

app.get('/ping',(req,res)=>{
    return res.json({
        message: 'pong',
        serverAddress: ip.address()
    })
})

app.listen(5000,()=>{
    console.log('Server is Running')
})