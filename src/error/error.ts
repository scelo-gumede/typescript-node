

export class CustomError extends Error{
    statusCode:number

    constructor(message,statusCode:number){
        super(message)
        this.statusCode=statusCode
        Object.setPrototypeOf(this,CustomError.prototype)
    }
}

export const createCustomError = (msg,status)=>{
    return new CustomError(msg,status)
}