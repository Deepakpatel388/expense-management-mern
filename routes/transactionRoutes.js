const express = require("express");
const {
  addTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction
} = require("../controllers/transactionCtrl");

//router object

const router = express.Router();

//routes
//add transaction post method
router.post("/add-transaction", addTransaction);

//Edit transaction post method
router.post("/edit-transaction", editTransaction);

//delete transaction post method
router.post("/delete-transaction", deleteTransaction);

//get transaction
router.post("/get-transaction", getAllTransaction);

//export

module.exports = router;
