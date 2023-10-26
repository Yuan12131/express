const express = require('express');
const app = express();
const port = 3000;

// 정적 파일 서비스를 위한 미들웨어 설정
app.use(express.static('public'));

// POST 요청 데이터를 파싱하기 위한 미들웨어 설정
app.use(express.urlencoded({ extended: false }));

// GET 요청 처리: index.html을 클라이언트에 전달
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// POST 요청 처리: 받은 데이터를 터미널에 출력
app.post('/submit', (req, res) => {
  const inputData = req.body.inputData; // input 요소의 name 속성을 사용
  console.log('Received data:', inputData);
  res.send('Data received successfully.');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
