const express = require("express");
const faqRouter = require("./faq");
const cors = require("cors");
const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://student:i295Anz59j94lTIE@cluster0.n9t74.gcp.mongodb.net/faqDB?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Connected to database");
    
    const app = express();

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(cors({}));

    app.use("/faq", faqRouter);
    app.get("*", (req, res) => {
      res.status(404).send("Wrong request");
    });

    app.listen(3000, () => {
      console.log("Server started on http://localhost:3000");
    });
  });
