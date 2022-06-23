//CRUD - Create Read Update Delete

const faqModel = require("./model");

const faqController = {
    get: (req, res) => {
        let faqs = faqModel.read();
        if (req.query) {
            if (req.query.question) {
                faqs = faqs.filter(faq => faq.question.includes(req.query.question));
            }
        }
        res.send(faqs);
    },
    getById: (req, res) => {
        const id = parseInt(req.params.id);
        let faq = faqModel.read().find(el => el.id == id);
        if (faq) {
            faq.count++;
            res.send(faq);
        }
        else res.status(404).send("Not found");
    },
    post: (req, res) => {
        let newFaq = req.body;
        console.log(req.body);
        let result = faqModel.create(newFaq);
        res.send(result);
    },
    put: (req, res) => {
        const id = parseInt(req.params.id);
        let modifiedFaq = faqModel.update(req.body, id);
        if (modifiedFaq)
            res.send(modifiedFaq);
        else res.status(404).send("Not found");
    },
    delete: (req, res) => {
        const id = parseInt(req.params.id);
        const deletedFaq = faqModel.delete(id);
        if (deletedFaq)
            res.send(deletedFaq);
        else res.status(404).send("Not found");
    }
}

module.exports = faqController;