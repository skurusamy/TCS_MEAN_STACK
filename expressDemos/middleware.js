module.exports= {
    logger:function(req,res,next){
        console.log('Middleware is called')
        next();
    },
    logger1: function(req,res,next){
        console.log(' This Middleware is called privately')
        next();
    }
}
