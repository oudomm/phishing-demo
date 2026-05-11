const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const publicDir = path.join(__dirname, "public");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(publicDir));

app.get("/", (req, res) => {
  res.sendFile(path.join(publicDir, "index.html"));
});

app.post("/login", (req, res) => {
  const log = `
=== Demo Submission Event ===
Time: ${new Date().toLocaleString()}
==========================
`;

  console.log(log);

  res.send(`
    <h1>Security awareness demo</h1>
    <p>This simulated login form did not save your email or password.</p>
  `);
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Demo running at http://localhost:${PORT}`);
  });
}

module.exports = app;
