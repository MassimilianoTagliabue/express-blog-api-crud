const express = require("express");
const app = express();
const port = 3001;
const postRouter = require("./routers/posts");
const handleError = require("./middlewares/handleError");

app.use(express.json());
app.use("/posts", postRouter);

app.use(express.static(`public`));


app.get("/" , (req,res) => {

    res.send("server on");
});

app.use(handleError);

app.listen(port, () =>{

    console.log("server partito");
    
})

