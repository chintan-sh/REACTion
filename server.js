/**
 * Created by chintan on 5/30/17.
 */
var express = require('express');

// Create our app
 var app = express();

app.use(express.static('./'));

app.listen(3000,function(){
    console.log('Server is up and running on :3000')
});