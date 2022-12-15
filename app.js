const express = require("express");
const app = express();

const PORT = 3000;

/** Archivos Estaticos */
app.use(express.static("public"));

/** Vien Engine */
app.set("view engine", "ejs");
app.set("views", __dirname + "/src/views");

/* Routes: */
app.get("/", (req, res) => {
  res.render("home", {
    title:"HOME"
  });
});

app.get("/contacto", (req, res) => {
  res.render("contacto", {
    title:"CONTACTO"
  });
});
app.get("/login", (req, res) => {
  res.render("login", {
    title:"LOGIN"
  });
});
app.get("/blog", (req, res) => {
  res.render("blog", {
    title:"BLOG"
  });
});



app.listen(PORT, () => console.log(`Servidor corriendo en puerto: ${PORT}`));
