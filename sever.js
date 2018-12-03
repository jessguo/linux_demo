var express = require('express')

var app = new express()

app.get('/',function(req,res){
    res.send('hello word')
})
app.listen(3000,function(error){
    if(error){
        console.log(error)
    }
    console.log('sucess')
})