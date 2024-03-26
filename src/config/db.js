const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://samson:Qw60$gofsam24@cluster0.5wxoyow.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  )
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error:", err);
  });
