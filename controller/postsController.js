const postList = require("../data/posts");

const index = (req,res) => {

    res.json({
        data : postList,
        total : postList.length
    });
};

const show = (req,res) =>{

    const postid = parseInt(req.params.id);

   // res.json("leggiamo l'elemento con id " +postid );
   const result = postList.find( curItem =>  curItem.id=== postid );

   res.send(result);

   if(result === undefined){
    res.json("hai la 104");
    res.statusCode = 404;
   }

   res.json(postList[0]);
};

const create = (req,res) => {

    res.json("aggiungo un nuovo elemento");
};

const update = (req,res) =>{

    const postid = req.params.id;
    res.json("modifico i dati dell'elemento con id " +postid);

};

const modify = (req,res) => {

    const postid = req.params.id;
    res.json("modifichiamo gli specifici dati dell'elemento con id " +postid);
};

const destroy = (req,res) => {

    const postid = req.params.id;
    res.json("elimino l'elemento con id " +postid);
};


module.exports = {

    index,
    show,
    create,
    update,
    modify,
    destroy
}