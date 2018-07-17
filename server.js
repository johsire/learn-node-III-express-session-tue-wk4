const express = require( 'express');
const bodyParser = require('body-parser');

const app = express();

let employees = ['jim', 'pam', 'tim', 'ryan','creed'];

app.get('/api/employees',
//request level middleware
 (req, res, next) => {
    if (req.query.username === 'mscott') {
        next();
    } else {
        res.status(403).send('nope')
    }
},
(req,res) => {
    res.status(200).send(employees)
});
app.use(bodyParser.json())

app.get('/api/employees', (req, res) => {
    res.status(200).send('employees');
});

app.get('/api/test', (req, res) => {
    res.status(200).send('secret data');
});


const port = 3030;
app.listen(port, () => {
    console.log(`Cool stuff happening in port: $(port)`);
})
