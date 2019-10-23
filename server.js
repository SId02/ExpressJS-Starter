const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello To World Of ExpressJS!'));

app.get('/about', (req, res) => res.send('About ExpressJS '));

app.get('/contact', (req, res) => res.send('Contact US '));


//app.get('/calculator', (req, res) => res.sendFile('Contact US '));

app.get('/calculator', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


app.post("/calculator", ({ body }, res) => {
    // res.send("Thank For Submitting");
    console.log(body);
    let no1 = Number(body.value1);
    let no2 = Number(body.value2);
    let sum = no1 + no2;
    res.send(`The Sum of Two Numbers : ${sum}`);
});
// app.post("/calculator", function (req, res) {
//     console.log(req.body);
//     let no1 = Number(req.body.value1);
//     let no2 = Number(req.body.value2);
//     let sum = no1 + no2;
//     res.send(`The Sum of Two Numbers : ${sum}`);
// });


app.listen(3000, function (req, res) {

    console.log('Server is Running');

});