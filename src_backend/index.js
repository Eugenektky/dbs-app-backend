const express = require('express')
const userRouter = require('./router/user')
const PORT = 3001

const app = express()

app.use(express.json())
app.use(userRouter)

const claimsRouter = require('./router/claims')
app.use(claimsRouter)

app.listen(PORT, () => {
    console.log('Server is up on port ' + PORT)
})