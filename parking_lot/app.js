const exprress=require('express');
const app=exprress();
const cors=require('cors');
const router=require('./routes/routing');
const dbsetup=require('./model/dbsetup');
const errorLogger=require('./utilities/errorLogger');
const requestLogger=require('./utilities/requestLogger');
const bodyParser=require('body-parser');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

//to setup the initial database
app.get('/setupdb',(req,res,next)=>{
    dbsetup.setupDb().then((data)=>{
        res.send(data);
    }).catch((err)=> {
        next(err);
    })
})

app.use(requestLogger);
app.use('/user',router);
app.use(errorLogger);

app.listen(2000);
console.log("Server started at 2000");

module.exports=app;
