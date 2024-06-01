const { client } = require("../config/mongoconfig");

require("dotenv").config();

const login = async (req, res) => {
  const { user, pass } = req.body;
  const col = client.db("rentify").collection("users");
  try {
    const udata = await col.findOne({ UserName: user });
    if (udata) {
      const check = udata.Password === pass;

      if (check && udata.type === "Seller") {
        const propids = udata.propid;
        const propcol = client.db("rentify").collection("prop");
        const propdata = await propcol
          .find({ _id: { $in: propids } })
          .toArray();
        udata.propdata = propdata;
        res.status(200).json({ message: "Authorized", data: udata });
      } else if (check && udata.type === "Buyer") {
        res.status(200).json({ message: "Authorized", data: udata });
      } else {
        res.status(401).json({ message: "Invalid Password" });
      }
    } else {
      res.status(404).json({ message: "user not found" });
    }
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ message: "Server Error" });
  }
};
module.exports = login;
