// http module 
//creating a server 

const http = require('http')

const server = http.createServer((req,res)=>{
   
    const {url}  = req
 if(url === '/'){
    res.statusCode(200)
    res.end('homepage')
 } else if(url === '/about'){
    res.end('about page')
 }
})

server.listen(3000, ()=>{
    console.log('server is running')
})