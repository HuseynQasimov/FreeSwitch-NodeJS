import express from "express"
import FSCallController from "../controllers/FSCallController.js"

const router = express.Router()

const fsCallController = new FSCallController()
router.get("/", (req, res) => {
    res.send(fsCallController.answerCall(req))
})

export default router
