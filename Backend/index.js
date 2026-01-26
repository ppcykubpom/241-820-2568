//ทำการ import http

const http = require('http');
const host = 'localhost';
const port = 8000;

//กำหนดค่าเริ่มต้นของ server เมื่อเปิดใช้งาน เว็บผ่านบราวเซอร์ ที่ localhost:8000

const requestListener = function(req,res) {
    res.writeHead(200);
    res.end('My First Server');
}
//ทำการรัน server
const server = http.createServer(requestListener);

server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});