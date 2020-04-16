const express = require("express");
const app = express();
const db = require("./database");
const PORT = 5010;

app.use(express.json());
app.use(express.urlencoded({extended:false}));

const bookmarkRotes = require("./Routes/bookmark");
const tagRoutes = require("./Routes/tag.js");

app.use("/bookmark", bookmarkRotes);
app.use("/tag", tagRoutes);

app.listen(PORT, () =>{
  console.log("The sever has been running on port number", PORT);
})