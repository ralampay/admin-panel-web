const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Configuration
const port = 3000;
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username == "admin" && password == "password") {
    res.json({
      token: "12345",
      user: {
        username: "admin",
        role: "admin",
        first_name: "User",
        last_name: "Example"
      }
    });
  } else {
    res.status(422).json({
      username: ["invalid"],
      password: ["invalid"]
    });
  }
});

// Run the server application
app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
