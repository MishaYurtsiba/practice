//CRUD - Create Read Update Delete

const faqModel = require("./model");

const faqController = {
    get: (req, res) => {
        res.send(faqModel.read());
    },
    getById: (req, res) => {
        const id = parseInt(req.params.id);
        let faq = faqModel.read().find(el => el.id == id);
        if (faq){
            faq.count++;
            res.send(faq);
        }
        else res.status(404).send("Not found");
    },
    post: (req, res) => {
        let newFaq = req.body;
        let result = faqModel.create(newFaq);
        res.send(result);
    }
}

module.exports = faqController;