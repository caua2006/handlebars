const express = require('express')
const exphbs = require('express-handlebars')
const app = express()


app.engine('handlebars',exphbs.engine())
app.set('view engine','handlebars')

app.use(express.static('public'))
app.listen(3000,()=>{
    console.log('Server running in port 3000, http://localhost:3000')
})


app.get('/',(req,res)=>{
    res.render('home')
})