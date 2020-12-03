var express = require('express');
var fs = require('fs');
var app = express();

// set the port of our application
// process.env.PORT lets the port be set by Heroku
var port = process.env.PORT || 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');

// make express look in the public directory for assets (css/js/img)
app.use(express.static(__dirname + '/public'));

// set the home page route
app.get('/', function(req, res) {

    // ejs render automatically looks in the views folder
    res.render('index');
});

app.get('/name', function(req, res){
    fs.readFile("public/blogs/name.json", function(err, data){
        if(err)     throw err;
        else{
            const users = JSON.parse(data);
            res.status('200').send(users);
        }
    })
});

app.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});
