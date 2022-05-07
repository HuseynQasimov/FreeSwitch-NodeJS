import express from "express"
import config from "config"
import fsEvents from "./fsEvents.js"
import router from "./routes/FSCallRoutes.js"

const port = config.get("PORT")
const app = express()

fsEvents()

app.use(router)

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})
