const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();


let employees = ['Jim', 'Pam', 'Dwight', 'Rayan', 'Creed', 'Angela'];

app.get(
  'api/employees', 
  (req, res, next) => {
  if(req.query.username === 'mscott') {
    next();
  } else {
    res.status(403).send('nope')
  }
  },
  (req, res) => {
    res.status(200).send(employees);
  }
};

const port = 3030;
app.listen(port, () => {
  console.log('Cool stuff happening on port: ' + port);
});