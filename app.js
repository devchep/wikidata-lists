const path = require('path')
const express = require('express')
var compression = require('compression');

const app = express()
const DIST_DIR = path.join(__dirname, 'build')

app.use(express.static(DIST_DIR))
app.use(express.static(path.join(__dirname, 'public')))
app.use(compression());

const PORT = process.env.PORT || 80

app.get('*', (req, res) => {
    res.sendFile(path.join(DIST_DIR, 'index.html'))
})

app.listen(PORT, () => console.log('started the app on port: ' + PORT))
