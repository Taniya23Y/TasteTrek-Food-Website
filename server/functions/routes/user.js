const router = require("express").Router();
router.get("/", (req, res) => {
  return res.send("Inside the user router");
});

router.get("/jwtVerification", async (req, res) => {
  //   res.send("Jwt verifications");
  if (!req.headers.authorization) {
    return res.status(500).send({ msg: "Token not found" });
  }
  const token = req.headers.authorization.split(" ")[1];
  return res.status(200).send({token: token});
});
module.exports = router;
