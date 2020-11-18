const express = require("express");
const router = express.Router();
const controller = require("../controller/colaboradorasController");

router.get("/", controller.getAll);
router.get("/colaboradoras", controller.getAll);
router.get("/:id", controller.getById);
router.get("/idade/:id", controller.getIdadeById);
router.post("/", controller.postColaboradora);
router.delete("/:id", controller.deleteColaboradora);

module.exports = router;