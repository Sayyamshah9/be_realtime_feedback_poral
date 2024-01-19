const { insertOne, find } = require("../database-layer/db-config");

const updateData = async (_data) => {
  let respData = [];
  let filterQry = {};
  respData = await insertOne(_data);
  if (respData.insertedId) {
    console.log("Data Inserted Successfully");
  } else {
    console.log("Fail to Update DB");
  }

  //   return respData;
};

module.exports = updateData;
