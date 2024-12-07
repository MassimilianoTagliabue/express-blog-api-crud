const postList = require("../data/posts")

const checkExist = (req,res,next) =>{

    const postid = parseInt(req.params.id);

    const post = postList.find(curItem => curItem.id === postid);


    if(post !== undefined){

        next();

    }else{

        res.statusCode = 404;
        res.json({
            error:true,
            message:"post inesistente"
        });
    }


}


module.exports = checkExist;