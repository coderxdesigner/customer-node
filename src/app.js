const express = require('express')
const app = express()
const PORT = 3000


app.get('/', (req,res)=>{
    res.send('<h1>Rachel H</h1>')
})
app.listen(PORT, ()=> {
    console.log('app listening on port')
})