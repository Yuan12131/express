const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// 라우터 파일 가져와서 사용
const router = require('./route/route.js'); // 라우터 파일 위치에 따라 경로를 조정해야 할 수 있음
app.use('/', router);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
