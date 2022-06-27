//CRUD - Create Read Update Delete

const faqModel = require("./model");

const faqController = {
  get: async (req, res) => {
    let faqs = await faqModel.find({});
    res.send(faqs);
  },
  getById: async (req, res) => {
    let faq = await faqModel.findById(req.params.id);
    if (faq) res.send(faq);
    else res.status(404).send("Not found");
  },
  post: async (req, res) => {
    const newFaq = new faqModel(req.body);
    const faq = await newFaq.save();
    res.send(faq);
  },
  put: (req, res) => {
    const id = parseInt(req.params.id);
    let modifiedFaq = faqModel.update(req.body, id);
    if (modifiedFaq) res.send(modifiedFaq);
    else res.status(404).send("Not found");
  },
  delete: (req, res) => {
    const id = parseInt(req.params.id);
    const deletedFaq = faqModel.delete(id);
    if (deletedFaq) res.send(deletedFaq);
    else res.status(404).send("Not found");
  },
};

module.exports = faqController;
