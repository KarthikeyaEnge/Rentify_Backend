const { client } = require("../config/mongoconfig");

const getproperty = async (req, res) => {
  const pcol = client.db("rentify").collection("prop");

  try {
    const dd = await pcol.find({}).toArray();
    res.status(200).json({ data: dd });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = getproperty;
