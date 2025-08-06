const express = require("express");
const path = require("path");
const app = express();

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// khi setTimeout 5s => render blocking css xuat hien vi phai chờ đến khi css được tải xong thì mới hiển thị page
app.get("/style.css", (req, res) => {
  setTimeout(() => {
    res.sendFile(path.join(__dirname, "style.css"));
  }, 5000);
});
//fouc => Hiện tượng html render trước sau đó mới render css
app.get("/fouc", (req, res) => {
  res.sendFile(path.join(__dirname, "fouc.html"));
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
