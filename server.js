const express = require(`express`)
const bodyParser = require('body-parser')

const app = express()

const PORT = 5000

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

const cors = require(`cors`)

app.use(cors())

const userRoute = require(`./routes/user.route`)
app.use(`/user`, userRoute)

const adminRoute = require(`./routes/admin.route`)
app.use(`/admin`, adminRoute)

const bukuRoute = require(`./routes/buku.route`)
app.use(`/buku`, bukuRoute)
/** route to access uploaded file */
app.use(express.static(__dirname))

app.listen(PORT, () => {
    console.log(`Server of tokobuku runs on port ${PORT}`)
})
