const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// 기본 라우트
app.get('/', (req, res) => {
  res.send('서버가 정상적으로 실행중입니다.');
});

app.listen(port, () => {
  console.log(`서버가 포트 ${port}에서 실행중입니다.`);
}); 