const { MongoClient, serverApi } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URL);

const mongoconfig = async (req, res, next) => {
  try {
    await client.connect();
    console.log(`connected the mongodb client`);

    next();
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = { mongoconfig, client };
