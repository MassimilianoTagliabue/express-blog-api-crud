const express = require("express");
const router = express.Router();
const postsController = require("../controller/postsController")
const checkExist = require("../middlewares/checkExist");


//index
router.get("/", postsController.index)

//show
router.get("/:id", checkExist, postsController.show);

//create
router.post("/" , postsController.create)

//update
router.put("/:id" , checkExist, postsController.update);

//modify
router.patch("/:id" ,checkExist, postsController.modify);


//destroy
router.delete("/:id",checkExist, postsController.destroy);


module.exports = router;