const http = require('http')
 

const server  = http.createServer((req ,res)=>{
console.log(req.url ,req.)
process.exit()
})

const PORT =3000

server.listen(PORT ,()=>{
    console.log("Server is listing on port",PORT)
})