const http = require('http')
 const fs = require('fs')
const server = http.createServer((req, res) => {
    console.log(req.url, req.headers)
    
    if (req.url === "/" && req.method === "GET") {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Welcome Everest</title></head>')
        res.write('<body>')
        res.write('<h1>This is my first node server</h1>')
        res.write('<form action="/submit" method="POST">')
        res.write('<label for="name">Name:</label><br>')
        res.write('<input type="text" id="name" name="name" required><br>')
        res.write('<label for="email">Email:</label><br>')
        res.write('<input type="text" id="email" name="email" required><br><br>')
        res.write('<input type="submit" value="Submit">')
        res.write('</form>')
        res.write('</body>')
        res.write('</html>')
        return res.end()
    }
    
    if (req.url === "/contact" && req.method === "GET") {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>Contact</title></head>')
        res.write('<body><h1>This is my first node server and this is the contact page</h1></body>')
        res.write('</html>')
        return res.end()
    }
    
    if (req.url === "/about" && req.method === "GET") {
        res.setHeader('Content-Type', 'text/html')
        res.write('<html>')
        res.write('<head><title>About</title></head>')
        res.write('<body><h1>This is the about page</h1></body>')
        res.write('</html>')
        return res.end()
    }
    
    if (req.url === "/submit" && req.method === "POST") {

fs.writeFileSync('user.txt','Everest Paudel')
res.statusCode =302;



        let body = ''
        req.on('data', chunk => {
            body += chunk.toString()
        })
        req.on('end', () => {
            const params = new URLSearchParams(body)
            const name = params.get('name')
            const email = params.get('email')
            
            res.setHeader('Content-Type', 'text/html')
            res.write('<html>')
            res.write('<head><title>Form Submission</title></head>')
            res.write('<body>')
            res.write('<h1>Form Submission Received</h1>')
            res.write(`<p>Name: ${name || 'Not provided'}</p>`)
            res.write(`<p>Email: ${email || 'Not provided'}</p>`)
            res.write('<a href="/">Back to Home</a>')
            res.write('</body>')
            res.write('</html>')
            res.end()
        })
        return
    }
    
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>404 Not Found</title></head>')
    res.write('<body><h1>404 Page Not Found</h1></body>')
    res.write('</html>')
    res.end()
})

const PORT = 3000

server.listen(PORT, () => {
    console.log("Server is listening on port", PORT)
})