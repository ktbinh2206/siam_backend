const express = require("express")
const cors = require("cors")
const userRouter = require("./routes/userRoute");
const foodRouter = require("./routes/foodRoute");
const cartRouter = require("./routes/cartRoute");
const orderRouter = require("./routes/orderRoute");
const blogRouter = require("./routes/blogRoute");
const connectDB = require("./config/db")


// app config
const app = express()
const port = process.env.PORT || 3000;

// middlewares
app.use(express.json())
app.use(cors())

connectDB();

// api endpoints
app.use("/api/user", userRouter)
app.use("/api/food", foodRouter)
app.use("/images", express.static('uploads'))
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)
app.use("/api/blog", blogRouter)

app.get("/", (req, res) => {
  res.send("API Working")
});

app.listen(port, () => console.log(`Server started on http://localhost:${port}`))
