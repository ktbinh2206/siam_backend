const express = require("express")

// app config
const app = express()
const port = process.env.PORT || 3000;


app.get("/", (req, res) => {
    res.send("API Working")
  });

app.listen(port, () => console.log(`Server started on http://localhost:${port}`))
