const { client } = require("../config/mongoconfig");

const getuser = async (req, res) => {
  const ucol = client.db("rentify").collection("users");
  const { user } = req.body;
  try {
    const dd = await ucol.findOne({ UserName: user });
    // console.log(dd);
    res.status(200).json({ data: dd });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = getuser;
