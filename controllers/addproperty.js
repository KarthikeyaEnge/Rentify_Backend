const { client } = require("../config/mongoconfig");

const addproperty = async (req, res) => {
  const data = req.body;
  const pcol = client.db("rentify").collection("prop");
  const ucol = client.db("rentify").collection("users");

  try {
    const dd = await pcol.insertOne({
      UserName: data.user,
      Title: data.title,
      Place: data.place,
      Area: data.area,
      Nobed: data.nobed,
      Nobath: data.nobath,
      Lmark: data.lmark,
    });

    const filter = { UserName: data.user }; // The filter to match the document
    const update = {
      $push: { propid: dd.insertedId }, // The update operation to apply
    };

    const result = await ucol.updateOne(filter, update);
    res
      .status(200)
      .json({ message: `inserted sucessfully with id ${dd.insertedId}` });
  } catch (err) {
    console.log(err.message);
  }
};

module.exports = addproperty;
