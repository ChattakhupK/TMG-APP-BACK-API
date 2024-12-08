const express = require("express");
const router = express.Router();

//import controller
const { list, create, update, remove } = require("../controllers/product");

router.get("/resources", list);
router.post("/resources", create);
router.put("/resources/:id", update);
router.delete("/resources/:id", remove);
module.exports = router;
