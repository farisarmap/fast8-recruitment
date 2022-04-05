require("dotenv").config()

const express = require("express")
const helmet = require("helmet")
const cors = require("cors")
const morgan = require("morgan")

const winston = require("./src/logger")
const errorHandler = require("./src/middlewares/errorHandler")
const HttpException = require("./src/utils/httpException")
const routes = require("./src/routes")

const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(helmet())
app.use(morgan("tiny", { stream: winston.stream }))
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use(routes)
// 404 error for endpoint
app.get("*", (req, res, next) => {
	const err = new HttpException(404, "Endpoint Not Found")
	next(err)
})
app.post("*", (req, res, next) => {
	const err = new HttpException(404, "Endpoint Not Found")
	next(err)
})
app.put("*", (req, res, next) => {
	const err = new HttpException(404, "Endpoint Not Found")
	next(err)
})
app.delete("*", (req, res, next) => {
	const err = new HttpException(404, "Endpoint Not Found")
	next(err)
})

// Error handler
app.use(errorHandler)

app.listen(PORT, () => {
	winston.info(`Server listing at http://localhost:${PORT}`)
})
