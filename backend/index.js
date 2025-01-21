const express = require('express');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const secretKey = 'your_secret_key'; // 비밀키는 외부에 노출되지 않도록 관리해야 합니다.
const app = express();
const port = 3000;
const cors = require('cors');
app.use(cors());

// MySQL 데이터베이스 연결 설정
const db = mysql.createConnection({
    host: 'localhost', // MySQL 서버 주소
    user: 'root',      // MySQL 사용자 이름
    password: 'root',      // MySQL 사용자 비밀번호
    database: 'Homezy' // 사용할 데이터베이스 이름
});

app.use(express.json());

// MySQL 연결
db.connect((err) => {
    if (err) {
        console.error('Server error');
    } else {
        console.log('Server on');
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});