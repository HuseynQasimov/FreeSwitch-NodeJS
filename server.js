import express from "express"
import config from "config"
import fsEvents from "./fsEvents.js"

const port = config.get("PORT")
const app = express()

fsEvents()

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
