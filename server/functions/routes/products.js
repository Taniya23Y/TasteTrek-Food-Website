const router = require("express").Router();
const admin = require("firebase-admin");
const db = admin.firestore();

router.post("/create", async (req, res) => {
  try {
    const id = Date.now();
    const data = {
      product_name: req.body.itemName,
      product_category: req.body.category,
      product_price: req.body.price,
      imageURL: req.body.imageDownloadURL,
    };

    // collect all the data
    const response = await db.collection("products").doc(`/${id}/`).set(data);
    console.log(response);
    return res.status(200).send({ success: true, data: response });
  } catch (err) {
    return res.send({ success: false, msg: `Error :${err}` });
  }
});

module.exports = router;
