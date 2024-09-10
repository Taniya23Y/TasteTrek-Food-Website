/* eslint-disable linebreak-style */
/* eslint-disable prefer-const */
/* eslint-disable new-cap */
/* eslint-disable object-curly-spacing */
/* eslint-disable indent */

const router = require("express").Router();
const admin = require("firebase-admin");

let data = [];

router.get("/", (req, res) => {
  return res.send("Inside the user router");
});

router.get("/jwtVerification", async (req, res) => {
  // res.send("Jwt verifications");
  if (!req.headers.authorization) {
    return res.status(500).send({ msg: "Token Not Found" });
  }

  const token = req.headers.authorization.split(" ")[1];
  // return res.status(200).send({ token: token });

  // we need to validate
  try {
    const decodedValue = await admin.auth().verifyIdToken(token);
    if (!decodedValue) {
      return res
        .status(500)
        .json({ success: false, msg: "Unauthorized access" });
    }
    return res.status(200).json({ success: true, data: decodedValue });
  } catch (err) {
    return res.send({
      success: false,
      msg: `Error in extracting the token :  ${err}`,
    });
  }
});

const listALlUsers = async (nextpagetoken) => {
  admin
    .auth()
    .listUsers(1000, nextpagetoken)
    .then((listuserresult) => {
      listuserresult.users.forEach((rec) => {
        data.push(rec.toJSON());
      });
      if (listuserresult.pageToken) {
        listALlUsers(listuserresult.pageToken);
      }
    })
    .catch((err) => console.log(err));
};

listALlUsers();

router.get("/all", async (req, res) => {
  listALlUsers();
  try {
    return res
      .status(200)
      .send({ success: true, data: data, dataCount: data.length });
  } catch (err) {
    return res.send({
      success: false,
      msg: `Error in listing users :,${err}`,
    });
  }
});

module.exports = router;
