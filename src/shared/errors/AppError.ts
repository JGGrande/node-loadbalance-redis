class AppError  {
    public readonly message: string;

    public readonly statusCode: number; //401,402,403,404

    constructor(message: string, statusCode = 400) {
        this.message = message;
        this.statusCode = statusCode;
    }
}



export default AppError;