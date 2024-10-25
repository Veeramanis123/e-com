

const notFound = (req,res,next) => {

    console.log(req);
    const error = new Error(`Product Not Found - ${req.originalURL}`)

    next(error)
}

const errorHandler = (err,req,res,next) => {

    // let statusCode = res.statusCode ===  500 ? res.statusCode : null ;
    let statusCode = res.statusCode === 200 ? 500 : res.statusCode ;
    let message = err.message ;

    // Check for mangoos bad objectId

    if(res.name = `CastError`){
        message = `Resource Not Found`
        statusCode = 404
    }

    res.status(statusCode).json({
        message
    });
}

export{notFound , errorHandler}
