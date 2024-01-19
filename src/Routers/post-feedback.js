const { insertOne } = require("../database-layer/db-config");

const router = require("express").Router();

router.post("/", async (req, res) => {
  let retObj = null;
  let _payload = req?.body || {};
  try {
    retObj = await insertOne(_payload);
    res.json(retObj);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
