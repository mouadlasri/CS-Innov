const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const path = require('path');
const port = process.env.PORT || 5000;
const app = express();


// Bodyparser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
// enable cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'csinnov.contact@gmail.com',
        pass: 'csiaui123'
    }
});

// server static files from the react app
app.use(express.static(__dirname + '/client/build'));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build/index.html'));
});

app.post('/joinForm', (req, res) => {
    var id = req.body.id;
    var name = req.body.name;
    var description = req.body.description;
    var subject = 'A new member wants to join the club!';
    var content = '<p> ' + name + ', with id ' + id + ' wants to join the club. <br />' + description + '</p>';

    const mailOptions = {
        from: 'csinnov.contact@gmail.com',
        to: 'csinnov.contact@gmail.com',
        subject: subject,
        html: content
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) console.log(err);
        else console.log(info);
    });
    
    console.log('Sending an email');
    res.redirect("/joinus");
});

app.listen(port, () => {
    console.log('Listening to port ', port);
});