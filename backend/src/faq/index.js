//Vue - api endpints

const Router = require("express").Router;
const faqController = require("./controller");
const faqRouter = new Router();

faqRouter.get("/:id", faqController.getById);
faqRouter.get("/", faqController.get);
faqRouter.post("/", faqController.post);
faqRouter.put("/:id", faqController.put);
faqRouter.delete("/:id", faqController.delete);

module.exports = faqRouter;