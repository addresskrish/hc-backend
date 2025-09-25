class ApiError extends Error {
    constructor(
        statusCode,
        meassage= "Somthing went wrong",
        errors = [],
        stack = ""
    ){
        super(meassage)
        this.statusCode = statusCode
        this.data = null
        this.errors = errors
        this.message = meassage
        this.success = false

        if (stack) {
            this.stack = stack
        } else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

export { ApiError }