const path = require("path");
const express = require("express");
const router = require("express").Router();

const app = express();

const PORT = 4000

app.use(express.static("public"));

router.get("/", (request, response) => {
    console.log("GET request on /home route");
    return response.sendFile(path.join(__dirname, "/views/home.html"));
  });


router.get("/about", (request, response) => {
  console.log("GET request on /about route");
  
  return response.sendFile(path.join(__dirname, "/views/about.html"));
});

router.get("/works", (request, response) => {
  console.log("GET request on /works route");
  return response.sendFile(path.join(__dirname, "/views/works.html"));
});

router.get("/photos", (request, response) => {
    console.log("GET request on /photos route");
    return response.sendFile(path.join(__dirname, "/views/photos.html"));
  });

app.use("/", router);


app.listen(PORT, () => console.log(`Server up and running at port ${PORT}`));