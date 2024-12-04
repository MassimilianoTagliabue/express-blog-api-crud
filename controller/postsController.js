const postList = require("../data/posts");

const index = (req, res) => {

    res.json({
        data: postList,
        total: postList.length
    });
};

const show = (req, res) => {

    const postid = parseInt(req.params.id);

    // res.json("leggiamo l'elemento con id " +postid );
    const result = postList.find(curItem => curItem.id === postid);

    console.log(result);

    if (result === undefined) {

        res.sendStatus(404);
    } else {

        res.json(result);
    }


};

const create = (req, res) => {

    res.json("aggiungo un nuovo elemento");
};

const update = (req, res) => {

    const postid = req.params.id;
    res.json("modifico i dati dell'elemento con id " + postid);

};

const modify = (req, res) => {

    const postid = req.params.id;
    res.json("modifichiamo gli specifici dati dell'elemento con id " + postid);
};

const destroy = (req, res) => {

    const postid = parseInt(req.params.id);

    const cancel = postList.findIndex((curItem) => curItem.id === postid);

    if (cancel === -1) {
        res.sendStatus(404);
        
    } else {
        postList.splice(cancel, 1)
        res.sendStatus(204);
    }


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