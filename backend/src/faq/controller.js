//CRUD - Create Read Update Delete

const faqModel = require("./model");

const faqController = {
  get: async function (req, res) {
    function buildQueryObject(query) {
      let result = {};
      if (query.question)
        result.question = {
          $regex: query.question,
          $options: 'i'
        };
      return result;
    }
    let faqs = await faqModel.find(buildQueryObject(req.query));
    res.send(faqs);
  },
  getById: async (req, res) => {
    let faq = await faqModel.findById(req.params.id);
    if (faq) {
      faq.count++;
      await faq.save();
      res.send(faq);
    } else res.status(404).send("Not found");
  },
  post: async (req, res) => {
    try {
      const newFaq = new faqModel(req.body);
      const faq = await newFaq.save();
      res.send(faq);
    } catch (err) {
      res.status(403).send(err);
    }
  },
  put: async (req, res) => {
    let modifiedFaq = await faqModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        returnOriginal: false,
      }
    );
    if (modifiedFaq) res.send(modifiedFaq);
    else res.status(404).send("Not found");
  },
  delete: async (req, res) => {
    const deletedFaq = await faqModel.findByIdAndDelete(req.params.id);
    if (deletedFaq) res.send(deletedFaq);
    else res.status(404).send("Not found");
  },
};

module.exports = faqController;
