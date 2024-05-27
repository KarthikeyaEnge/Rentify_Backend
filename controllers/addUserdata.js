const { client } = require("../config/mongoconfig");

const addUserdata = async (req, res) => {
  const data = req.body;
  const col = await client.db("rentify").collection("users");
  try {
    //const user = await col.findOne({ UserName: data.user });
    user = null;
    if (user === null) {
      const dd = await col.insertOne({
        UserName: data.user,
        Password: data.pass,
        FirstName: data.fname,
        LastName: data.lname,
        Email: data.email,
        Phone: data.phone,
        Type: data.type,
      });

      res
        .status(200)
        .json({ message: `inserted sucessfully with id ${dd.insertedId}` });
    } else {
      res.status(409).json({ message: "User already exist" });
    }
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = addUserdata;
