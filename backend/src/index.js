const express = require("express");
const faqRouter = require("./faq");

const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());


//FAQ

//MVC - Model Vue Controller

app.use("/faq", faqRouter);
app.get("*", (req, res) => {
  res.send("Hello");
});

app.listen(3000, () => {
  console.log("Server started on http://localhost:3000");
});
