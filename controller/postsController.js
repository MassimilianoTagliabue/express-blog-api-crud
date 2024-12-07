const postList = require("../data/posts");

//index
const index = (req, res) => {

    const query = req.query.tags;

    console.log(query);

    if( query === undefined){

        res.sendStatus(404);
    }else{

        const filterTags = postList.filter(curItem => {
            
            if(curItem.tags.includes(query)){

                return true;
            }else{

                return false;
            }
            });

        res.json({
        data: filterTags,
        total: filterTags.length
        
    });
    }

    
};

//show
const show = (req, res) => {

    const postid = parseInt(req.params.id);

    // res.json("leggiamo l'elemento con id " +postid );
    const result = postList.find(curItem => curItem.id === postid);

    console.log(result);


        res.json(result);
    


};

//create
const create = (req, res) => {

    const newPost = req.body;
    
    newPost.id = postList[postList.length - 1].id + 1; //prossimo ID

    postList.push(newPost);    
    
    console.log(newPost);

    res.sendStatus(201);
};

//update
const update = (req, res) => {

    const postid = parseInt(req.params.id);
    const updatePost = req.body;
    const findPost = postList.findIndex(curItem => curItem.id === postid);
    
    

    updatePost.id = postid;
    postList[findPost] = updatePost;

    
    console.log(postList);
    
    res.json("modifico i dati dell'elemento con id " + postid);
};

//modify
const modify = (req, res) => {

    const postid = req.params.id;
    res.json("modifichiamo gli specifici dati dell'elemento con id " + postid);
};

//destroy
const destroy = (req, res) => {

    const postid = parseInt(req.params.id);

    const cancel = postList.findIndex((curItem) => curItem.id === postid);

    
        postList.splice(cancel, 1)
        res.sendStatus(204);
    


    console.log(postList);


};


module.exports = {

    index,
    show,
    create,
    update,
    modify,
    destroy
}