const express = require('express')
const app = express()
const PORT = 3000
const customers = [
    {   "name": "Rachel",
        "industry":"web development"
    },
    {
        "name":"Sarah",
        "industry":"game designer"
    },
    {
        "name":"Caleb",
        "industry":"music"
    }
    
]

app.get('/', (req,res)=>{
    res.send({"customers":customers})
})
app.listen(PORT, ()=> {
    console.log('app listening on port')
})