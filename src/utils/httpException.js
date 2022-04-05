module.exports = class HttpException extends Error {
	constructor(status, code, data, message) {
		super(message)
		this.status = status
		this.code = code
		this.data = data || null
		this.message = message
	}
}
