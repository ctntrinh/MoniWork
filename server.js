const http = require('http');
const app = require('./app/app');
const serverApi = http.createServer(app);
serverApi.listen(3000, () =>{
    console.log("server running");
});