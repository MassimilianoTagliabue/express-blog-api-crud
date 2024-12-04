const express = require("express");
const app = express();
const port = 3001;
const postRouter = require("./routers/posts")


app.use("/posts", postRouter);

app.use(express.static(`public`));


app.get("/" , (req,res) => {

    res.send("server on");
});


app.listen(port, () =>{

    console.log("server partito");
    
})

