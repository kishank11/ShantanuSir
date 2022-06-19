const express = require("express");
const {createCLient,getAllClients,getClientById} = require("../controllers/index");
const app = express();
const router = express.Router();


router.route("/addClient").post(createCLient);
router.route("/getAllClients").get(getAllClients);
router.route("/getClientById/:id").get(getClientById);

module.exports = router;
