const { find } = require("../database-layer/db-config");

const router = require("express").Router();

router.get("/", async (req, res) => {
  let retObj = null;
  try {
    retObj = await find({});
    res.json(retObj);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
