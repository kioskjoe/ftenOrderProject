const express = require('express');
const bodyParser = require('body-parser');
const app = express ();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customer', (req, res) => {
  res.send([
    {
    'id': 1,
    'img': 'https;//placeimg.com/64/64/1',
    'name': '김도동',
    'birthday': '398nbnbnbv8',
    'gender': '남자',
    'job': '대학생',
  },
  {
    'id': 2,
    'img': 'https;//placeimg.com/64/64/2',
    'name': '홍길동',
    'birthday': '398nbnbnbv8',
    'gender': '남자',
    'job': '강사',
  },
  {
    'id': 3,
    'img': 'https;//placeimg.com/64/64/3',
    'name': '철민이',
    'birthday': '398nbnbnbv8',
    'gender': '남자',
    'job': '디자이너',
  },
  {
    'id': 3,
    'img': 'https;//placeimg.com/64/64/3',
    'name': '철민이',
    'birthday': '398nbnbnbv8',
    'gender': '남자',
    'job': '디자이너',
  },
  ]);
});

app.listen(port, ()=> console.log('Listening on port ${port}'));