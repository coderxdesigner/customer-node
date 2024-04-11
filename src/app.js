const express = require('express')
const app = express()
const PORT = 3000;
app.use(express.json());
app.use(express.urlencoded({extended: true}));

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

app.post('/api/customers', (req,res)=> {
    console.log(req.body);
    res.send(req.body);
})