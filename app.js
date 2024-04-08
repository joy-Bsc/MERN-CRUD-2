const express = require('express');
const router = require('./src/route/api')
const app = new express();
const bodyParser = require('body-parser');
const path = require('path');


//security middleware
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const hpp = require('hpp');
const cors = require('cors');

//Database
const mongoose = require('mongoose');

//security middleware implement
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());

//body parser
app.use(bodyParser.json())

//rate limiter
const limiter =rateLimit({windowMs:15*60*100,max:3000})

//database connection

async function main(){
    let URI="mongodb+srv://<username>:<password>@cluster0.thgjuqm.mongodb.net/CRUD?retryWrites=true&w=majority&appName=Cluster0"
    let OPTION={user:"joy",pass:"gvVDrmKNiKSF3XQt",autoIndex:true}
    await mongoose.connect(URI,OPTION);{
     console.log("connection success");
    }
    
}
main().catch(e=>console.log(e))




//frontend tagging
// Serve static files from the 'client-side/build' directory
// app.use(express.static('client-side/build'));

// // For any route that doesn't match a defined route, send the index.html file
// app.get("*", function(req, res) {
//     res.sendFile(path.resolve(__dirname, 'client-side', 'build', 'index.html'));
// });


//managing backend routing
app.use("/api/v1",router)

module.exports=app;