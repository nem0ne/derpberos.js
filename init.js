// const http = require('http')

// const hostname = 'localhost'
// const port = 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/plain')
//   res.end('Hello World<br>'+process.argv)
// })

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`)
// })

const http      = require('http')
const express   = require('express')
const app       = express()
const roles     = ['CLIENT', 'TARGET', 'DC']
const role      = (() => {
    if (process.argv.length >= 3) {
        let index = roles.indexOf(process.argv[2].toUpperCase())
        if (index > -1) return roles[index]
    }

    return 'CLIENT'
})()
const port      = 3000+roles.indexOf(role)

app.get('/', (req, res) => {
    res.send('Hello world, this is Express!')
})

app.listen(port, () => {
    console.log(`Initializing ${role}.`)
    console.log(`Listening on port ${port}.`)
})