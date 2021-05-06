import express from "express"
import cors from "cors"
import restaurants from "./api/restaurants.route.js"

const app = express()

app.use(cors())
app.use(express.json())     //server can read json

app.use("/api/v1/restaurants", restaurants)
app.use("*", (req, res) => res.status(404).json({error: "Page not found"}))


export default app