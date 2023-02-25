var express = require('express')
const PORT = 3000

var app = module.exports = express()
app.use(express.json())

const user = require('./router/user')
app.use('/user', user)

app.listen(PORT, () => {
    console.log('Server is up on port ' + PORT)
})