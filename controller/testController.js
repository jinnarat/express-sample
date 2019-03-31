import express from "express";
const router = express.Router();
/*
Request
* */
let responseObject = {
    msg: "",
    result: ""
}

// router.get("/getData", (req, res) => {
//     let result = req.query.key1 * req.query.key2;
//     res.send({ result: result })
// });


router.get("/getBMI", (req, res) => {
    let height = req.query.height / 100
    let weight = req.query.weight
    let result = weight / (height * height);
    let msg = "";
    if (result > 25) {
        msg = "Fat"
    } else if (result == 25) {
        msg = "Normal"
    } else if (result < 25) {
        msg = "Thin"
    }

    result = Namber(result.toFixed(2));
    res.send({ bmi: result, msg: msg })

})
/*
Request
* */
router.post("/postData", async (req, res) => {
    if (!req.body.key5) {
        responseObject.msg = "Bad request";
    } else {
        responseObject.msg = "success";
        responseObject.result = req.body.key5 * 5;
    }

    res.send(responseObject);
});

module.exports = router;
