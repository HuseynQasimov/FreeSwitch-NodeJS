import connect from "../freeswitch.js"

export default class FSCall {
    async answer() {
        const FS = await connect().then((connection) => {
            connection.api("answer")
        })

        return true
    }
}
