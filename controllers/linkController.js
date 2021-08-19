const Link = require("../models/Link");

const redirect = async (req, res) => {
    let title = req.params.title;

    try {
        let doc = await Link.findOne({ title });
        console.log(doc);
        res.redirect(doc.url);
    } catch (err) {
        res.send("Houve um erro");
    }
};

module.exports = { redirect };
