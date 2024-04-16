const express = require('express')
const app =express()

app.get('/',(req,res)=>{
    res.send('this is get a index page')
})
app.post('/',(req,res)=>{
    res.send('this is post method')
})

app.listen(3000,()=>{
    console.log('server is running on 3000')
})