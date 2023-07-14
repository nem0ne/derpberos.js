const http      = require('http')
const path      = require('path')
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

app.use(express.static(__dirname + '/public'));



app.get('/', (req, res) => {
    if (role === 'CLIENT')
        res.sendFile('public/html/client.html', { root: __dirname })
    else if (role === 'TARGET')
        res.sendFile('public/html/target.html', { root: __dirname })
    else if (role === 'DC')
        res.sendFile('public/html/dc.html', { root: __dirname })
})

app.listen(port, () => {
    console.log(`Initializing ${role}.`)
    console.log(`Listening on port ${port}.`)
})