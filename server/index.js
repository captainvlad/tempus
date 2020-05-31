const app = require("express")();
const {Pool} = require("pg");
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers');
  next();
});

const pool = new Pool({
    "host": "localhost",
    "port": 5432,
    "user":"postgres",
    "password" : "postgres",
    "database" : "bank",
    "max": 20,
    "connectionTimeoutMillis" : 0,
    "idleTimeoutMillis": 0
})

app.get("/all", async (req, res) => {
    const fromDate = new Date();

    const results = await pool.query("select * from users")
    res.send({"rows": results.rows})
})

app.post('/users', (req, res) => {
  createMerchant(req.body)
  .then(response => {
    res.status(200).send(response);
  })
  .catch(error => {

    res.status(500).send(error);
  })
})

const createMerchant = (body) => {
  return new Promise(function(resolve, reject) {
    const { name, surname, email } = body
    
    pool.query(`INSERT INTO bank_account (name, surname) VALUES ('${name}', '${surname}', '${email}') RETURNING *`, (error, results) => {
      if (error) {
        reject(error)
      } 
      resolve(`A new item has been added\n`)
    })
  })
}



app.listen(9000, () => console.log("Listening on port 9000"))