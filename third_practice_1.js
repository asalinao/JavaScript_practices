class MathError extends Error{
    constructor(message){
        super(message)
        this.name = 'MathError'
    }
}

function sumOperation(...args){
    try{
        if (args.length == 0) {
            throw new MathError("No arguments provided for the operation.");
        }
        
        args.forEach(arg => {
            if (typeof(arg) != 'number'){
                throw new MathError(`Invalid argument: '${arg}' is not a number.`)
            }
        })

        return args.reduce((a, b) => Number(a) + Number(b))
    }
    catch(error){
        return error
    }
}

console.log(sumOperation(1,2,'a'))