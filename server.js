// import fs from 'fs'
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
const multer = require('multer');
const upload = multer({ dest: 'uploads/' })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const data = fs.readFileSync('./database.json');
// const conf = JSON.parse(data);
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "database-kiosk.coteit2t3akh.ap-northeast-2.rds.amazonaws.com",
  user: "admin",
  password: "4ten03013346*",
  port: "3306",
  database: "kiosk"
});

connection.connect();

// const multer = require('multer');
// const upload = multer({ dest: './upload' })
// module.exports = db;

app.get('/api/customer', (req, res) => {
  connection.query(
    "SELECT * FROM CUSTOMER WHERE isDeleted =0",
    (err, row, fields) => {
      res.send(row);
    }
  );
});

app.use('/image', express.static('./upload'));

app.post('/api/customers', upload.single('image'), (req, res) => {
  let sql = 'INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?,now(), 0)';
  let image = '/image/' + req.file.filename;
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  let params = [image, name, birthday, gender, job];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    }
  )
});

app.delete('/api/customers/:id', (req, res) => {
  let sql = 'UPDATE CUSTOMER SET isDeleted =1 WHERE id = ?';
  let params = [req.params.id];
  connection.query(sql, params, 
    (err, rows, fields) => {
    res.send(rows);
  }
)  
});

app.listen(port, () => console.log('Listening on port ${port}'));