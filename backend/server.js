const express = require('express');
const cors = require('cors');
// const { MongoClient } = require("mongodb");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());

// const uri = "mongodb+srv://thomasgreat0_db_user:<db_password>@cluster0.fkb9ekq.mongodb.net/"

// const client = new MongoClient(uri);

const data = {
  professionalName: "Moses Thomas",
  base64Image: "iVBORw0KGgoAAAANSUhEUgAA...", // paste your base64 string here (no data:image/png;base64, prefix)
  nameLink: {
    firstName: "Moses",
    url: "https://yourportfolio.com"
  },
  primaryDescription: "I am a software developer passionate about building clean and efficient web applications.",
  workDescription1: "Currently studying Computer Science at BYUI, focusing on backend development and APIs.",
  workDescription2: "I enjoy solving real-world problems through technology and continuous learning.",
  linkTitleText: "Find me on the web:",
  linkedInLink: {
    text: "LinkedIn Profile",
    link: "https://linkedin.com/in/mosesthomas"
  },
  githubLink: {
    text: "GitHub Profile",
    link: "https://github.com/thomassofttech"
  }
};
app.get("/professional", (req, res) => {
    res.json(data);
}); 

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});