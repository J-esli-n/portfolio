// server.js
app.post("/contact", (req, res) => {
  console.log(req.body);
  res.json({ message: "Received" });
});