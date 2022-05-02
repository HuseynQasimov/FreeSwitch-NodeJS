import { server } from "esl"

const call_handler = async function () {
    const isConnected = await this.send("connect")

    console.log(isConnected)

    const isAnswered = await this.command("answer")

    console.log("Answer command result: ", isAnswered)

    this.on("connection", (call) => {
        console.log("This Call: ", call)
    })
}

server(call_handler).listen(7000, () => {
    console.log("Running...")
})

//********************************************************************
// import express from "express"
// import { createServer } from "http"
// import { Server } from "socket.io"

// const app = express()
// const server = createServer(app)

// const io = new Server(server)

// io.on("connection", (event) => {
//     console.log("The Event: ", event)
// })

// server.listen(7000, () => {
//     console.log("http://localhost:7000 running...")
// })
