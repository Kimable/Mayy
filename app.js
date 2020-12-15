const express = require("express");
const bodyParser = require("body-parser");
const mailRoute = require("./router/mail");
const subRoute = require("./router/subscribe");

const app = express();

const port = 3000;

app.set("view engine", "ejs");
app.set("views", "views");

//Static Files and Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//Body parser
app.use(bodyParser.json());

// Display Web app Routes
app.get("/", (req, res) => {
  res.render("index", {
    title: "A-Levels & IGCSE Homeschooling and Tutoring",
    description: "This is home",
    activeClass: "active",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
    description: "About Mayy Elites",
    activeClass: "active",
  });
});

app.get("/services", (req, res) => {
  res.render("services", {
    title: "Services",
    description: "What we do best",
    activeClass: "active",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", { title: "Contact", description: "Contact Us" });
});

app.get("/pricing", (req, res) => {
  res.render("pricing", {
    title: "Pricing",
    description: "Pricing",
    activeClass: "active",
  });
});

app.get("/homeschooling", (req, res) => {
  res.render("homeschooling", {
    title: "Homeschooling",
    description: "Homeschooling like no other",
    activeClass: "active",
  });
});

app.get("/tuition", (req, res) => {
  res.render("tuition", {
    title: "Holiday Tuition",
    description: "The very best tuition teachers",
    activeClass: "active",
  });
});

app.get("/programming", (req, res) => {
  res.render("programming", {
    title: "Programming and Graphic Design",
    description:
      "Learn the most relevant programming languages as well as best graphic design practices",
    activeClass: "active",
  });
});

app.get("/revision-notes", (req, res) => {
  res.render("revision-notes", {
    title: "Revision Notes",
    description: "Best Revision Notes For IGCSE",
    activeClass: "active",
  });
});

app.get("/thanks", (req, res) => {
  res.render("thanks", {
    title: "Thank You",
    description: "Thank you",
    activeClass: "active",
  });
});

//Mail route middleware
app.use(mailRoute);
app.use(subRoute);

// 404 route

app.use((req, res) => {
  res.status(404).render("404", {
    title: "Not Found",
    description: "This page is not available, mmmh! Sorry!",
  });
});

app.listen(port);
