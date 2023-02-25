const express = require('express')
const User = require('./router/user')
const PORT = process.env.PORT || 3000

const app = express()
app.use(express.json())
app.use(User)


app.listen(PORT, () => {
    console.log('Server is up on port ' + PORT)
})
