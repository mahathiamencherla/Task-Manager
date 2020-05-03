const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')


const app = express()
const port = process.env.PORT || 3001


// app.use((req, res, next) => {
//     if (req.method == 'GET' ) {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//         res.status(503).send('Site under maintenance! Check back later.')
// })

app.use(express.json())

app.use(userRouter)
app.use(taskRouter)

app.listen(port, () => {
    console.log("Server is on port: " + port)
})

const Task = require('./models/task')
const User = require('./models/user')

const main = async () => {
    
}

main()