import ESL from "modesl"
import config from "config"

let connection = null

const connect = () =>
    new Promise((resolve, reject) => {
        if (connection !== null && connection.connected()) {
            resolve(connection)
        } else {
            connection = new ESL.Connection(
                config.get("FS.ip"),
                config.get("FS.port"),
                config.get("FS.password")
            )
            connection.on("error", () => {
                reject("Connection error")
            })

            connection.on("esl::end", () => {
                reject("Connection closed")
            })

            connection.on("esl::ready", () => {
                resolve(connection)
            })
        }
    })

export default connect
