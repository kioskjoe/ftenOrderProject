const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require("mysql");


const bcrypt = require("bcrypt");
const saltRounds = 10;

const jwt = require('jsonwebtoken')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(
  session({
    key: "userId",
    secret: "subscribe",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expres: 60 * 60 * 24,
    },
  })
)

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});

connection.connect();

const multer = require('multer');
const { config } = require('process');
const { default: id } = require('date-fns/locale/id');
const upload = multer({ dest: './upload' })


const verifyJWT = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    res.send("토큰이 업데요");
  } else {
    jwt.verify(token, "jwtScret", (err, decoded) => {
      if (err) {
        res.json({ auth: false, sessage: "진짜 없는겨 토큰" });
      } else {
        req.id = decoded.id;
        next();
      }
    });
  }
};

app.get("/isUserAuth", verifyJWT, (req, res) => {
  res.send("된겨 좋치")
});

app.get('/api/customer', (req, res) => {
  connection.query(
    "SELECT * FROM CUSTOMER WHERE isDeleted =0",
    (err, row, fields) => {
      res.send(row);
    }
  );
});

app.get('/api/mainmenutable', (req, res) => {
  connection.query(
    "SELECT * FROM MENUTABLE WHERE isDeleted =0",
    (err, row, fields) => {
      res.send(row);
      // console.log(row) 되는겨~~
    }
  );
});

app.get('/api/menusortfirstre', (req, res) => {
  connection.query(
    "SELECT * FROM MENUSORTFIRST",
    (err, row, fields) => {
      // console.log(row);
      res.send(row);
    }
  );
});

app.get('/api/clientlist', (req, res) => {
  connection.query(
    "SELECT * FROM CLIENTADD WHERE isDeleted =0",
    (err, row, fields) => {
      res.send(row);
    }
  );
});

app.post('/api/menucatgo', (req, res) => { // 이건 되는거야//

  let sql = "INSERT INTO MENUSORTFIRST VALUES (null,?,now())";
  let sortfirst = req.body.sortfirst;
  console.log(sortfirst);
  console.log("sortfirst");
  console.log(sql);
  // let params = [sortfirst];// 둘다 된다. 
  let params = sortfirst; // 둘다 된다. 
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
      // console.log(rows)
    }
  )
});

app.post('/api/login', (req, res) => {

  const comname = req.body.name;
  const pw = req.body.pw;

  console.log(comname, pw);

  connection.query(
    "SELECT * FROM CLIENTADD WHERE comname = ?;",
    comname,
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        bcrypt.compare(pw, result[0].pw, (error, response) => {
          if (response) {
            const id = result[0].id;
            const token = jwt.sign({ id }, "jwSecret", {
              expiresIn: 300
            });
            req.session.user = result;
            res.json({ auth: true, token: token, result: result });

          } else {
            res.json({
              auth: false,
              message: "다시 해라 어게인",
            });
          }
        });
      } else {
        res.json({ auth: false, message: "ttollllele joe" });
      }
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
      // console.log(rows)
    }
  )
});

app.post('/api/addmenumain', upload.single('image'), (req, res) => {

  let sql = 'INSERT INTO MENUTABLE VALUES (null, ?, ?, ?, ?, ?, ?, now(), 0)';
  let menuimage = '/image/' + req.file.filename;
  let menuname = req.body.menuname;
  let menuprice = req.body.menuprice;
  let menudesc = req.body.menudesc;
  let menublank = req.body.menublank;
  let menusortfirst = req.body.menusortfirst;

  let params = [menuimage, menuname, menuprice, menudesc, menublank, menusortfirst];
  connection.query(sql, params,
    (err, rows, fields) => {
      // console.log(rows)
      res.send(rows);
    }
  )
});


// 이건 되는 거야 OK
// app.post('/api/addoptionmenu', upload.single('image'), (req, res) => {
//   let optiontytle2 = req.body.optiontytle;
//   console.log(optiontytle2)
//   let sql = `ALTER TABLE OPTIONMENU ADD ${optiontytle2} VARCHAR(64)`;
//   connection.query(sql, 
//     (err, rows, fields) => {
//       // console.log(rows)
//       res.send(rows);
//     }
//   )
// });


app.post('/api/addoptionmenu', upload.single('image'), (req, res) => {
  let optiontytle2 = req.body.optiontytle;
  console.log(optiontytle2)
  let sql = `ALTER TABLE OPTIONMENU ADD ${optiontytle2} VARCHAR(64)`;
  // let optiontytle3 = optiontytle2;
  // let optiontytle4 = req.body.menuname;
  // let params = [optiontytle3, optiontytle4];
  console.log("222222222222222222222222222222222222222222222222")
  connection.query(sql,
    (err, rows, fields) => {
      console.log(rows)
      res.send(rows);
    }
  )

  // let sql2 =
  // `UPDATE MENUTABLE SET 
  // ${optiontytle2} = '${req.body.optionprice}',
  // WHERE id = 5`;
  //   console.log(sql2)
  //   connection.query(sql2, (err, result) => {
  //   if (err) throw err;
  //   console.log(result);
  //   res.send("UPDATE COMPLETED JORe");
  // })



  // let optionprice = req.body.optionprice;
  // console.log(optionprice)
  // let sql2 = `INSERT INTO OPTIONMENU( ${optiontytle2} ) VALUES ( ${optionprice} )`;
  // let params = optionprice;
  // console.log(params)
  // console.log(sql2)
  // connection.query(sql2, params,
  //   (err, rows, fields) => {
  //     // console.log(rows)
  //     res.send(rows);
  //   }
  // )

});


app.post('/api/changemenumain/:id', upload.single('image'), (req, res) => {
  let sql =
    `UPDATE MENUTABLE SET 
  menuname = '${req.body.menuname}',
  menuprice='${req.body.menuprice}', 
  menudesc='${req.body.menudesc}', 
  menublank='${req.body.menublank}',
  menusortfirst = '${req.body.menusortfirst}'
  WHERE id = ${req.params.id}`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("UPDATE COMPLETED JORe");
  })
});


app.post('/api/changeclientinfo/:id', upload.single('image'), (req, res) => {
  let sql =
    `UPDATE CLIENTADD SET 
    comname = '${req.body.comname}',
    comno = '${req.body.comno}',
    ownername = '${req.body.ownername}',
    address = '${req.body.address}',
    idregi = '${req.body.idregi}',
    pw = '${req.body.pw}',
    email = '${req.body.email}',
    tellno = '${req.body.tellno}',
    faxno = '${req.body.faxno}',
    regidate = '${req.body.regidate}'

    WHERE id = ${req.params.id}`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("UPDATE COMPLETED JORe");
  })
});

app.post('/api/changemenumainphoto/:id', upload.single('image'), (req, res) => {
  console.log("gggggggggggggggggggggggggggggggg9")
  console.log(req.file.filename)

  let sql =
    `UPDATE MENUTABLE SET 
  image = '/image/${req.file.filename}'
  WHERE id = ${req.params.id}`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    console.log("ttttttttttttttttttttttt8")
    res.send("야");
  })
});


app.post('/api/changeclientphoto/:id', upload.single('image'), (req, res) => {
  console.log(req.file.filename)

  let sql =
    `UPDATE CLIENTADD SET 
  image = '/image/${req.file.filename}'
  WHERE id = ${req.params.id}`;
  connection.query(sql, (err, result) => {
    if (err) throw err;
    console.log(result);
    res.send("야야야야양야야야야야야야야야야야야ㅑㅇ야");
  })
});



app.post('/api/clientadd', upload.single('image'), (req, res) => {
  let sql = 'INSERT INTO CLIENTADD VALUES (null, ?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,now(),0,?,?,?,?)';
  let image = '/image/' + req.file.filename;
  let comname = req.body.comname;
  let comno = req.body.comno;
  let ownername = req.body.ownername;
  let address = req.body.address;
  let idregi = req.body.idregi;
  let pw = req.body.pw;
  let email = req.body.email;
  let tellno = req.body.tellno;
  let faxno = req.body.faxno;
  let regidate = req.body.regidate;
  let kqty = req.body.kqty;
  let blankOne = req.body.blankOne;
  let blankTwo = req.body.blankTwo;
  let blankThree = req.body.blankThree;
  let busikind = req.body.busikind;
  let agreeone = req.body.agreeone;
  let agreetwo = req.body.agreetwo;
  let agreethree = req.body.agreethree;
  // let params = [image, comname, comno, ownername, address, idregi, hash, email, tellno, faxno, regidate, kqty, blankOne, blankTwo, blankThree, busikind, agreeone, agreetwo, agreethree];

  bcrypt.hash(pw, saltRounds, (err, hash) => {
    if (err) {
      console.log(err);
    }

    connection.query(sql, [image, comname, comno, ownername, address, idregi, hash, email, tellno, faxno, regidate, kqty, blankOne, blankTwo, blankThree, busikind, agreeone, agreetwo, agreethree],
      // (err, result) =>{
      //   console.log(err);
      // }

      (err, rows, fields) => {
        res.send(rows);
        // console.log(rows);
        console.log(err);
      }
    );
  })
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

app.delete('/api/mainmenu/:id', (req, res) => {

  let sql = 'UPDATE MENUTABLE SET isDeleted =1 WHERE id = ?';
  let params = [req.params.id];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    }
  )
});

app.delete('/api/clientdelate/:id', (req, res) => {
  console.log("kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk")
  let sql = 'UPDATE CLIENTADD SET isDeleted =1 WHERE id = ?';
  let params = [req.params.id];
  connection.query(sql, params,
    (err, rows, fields) => {
      res.send(rows);
    }
  )
});

app.get('/api/changemainmenufun/:id', (req, res) => {
  // console.log(req.params.id)
  let sql = "SELECT * FROM MENUTABLE WHERE id = ?";
  let params = req.params.id;
  connection.query(sql, params,
    (err, row, fields) => {
      res.send(row);
      console.log(row)
    }
  );
});

app.get('/api/changeclientinfo/:id', (req, res) => {
  // console.log(req.params.id)
  let sql = "SELECT * FROM CLIENTADD WHERE id = ?";
  let params = req.params.id;
  connection.query(sql, params,
    (err, row, fields) => {
      res.send(row);
      console.log(row)
    }
  );
});

app.listen(port, () => console.log(`Listening on port ${port}`));