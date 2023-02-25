const express = require('express')
const userRouter = require('./router/user')
const PORT = 3000

const app = express()

app.use(express.json())
app.use(userRouter)

console.log('hello from index.js')

app.listen(PORT, () => {
    console.log('Server is up on port ' + PORT)
})
