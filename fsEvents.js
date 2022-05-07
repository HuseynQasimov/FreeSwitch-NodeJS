import connect from "./freeswitch.js"
import _ from "lodash"

const fsEvents = () => {
    connect()
        .then((connection) => {
            connection.subscribe("all")
            connection.on("esl::event::*::*", (e) => {
                channel(e)
            })
        })
        .catch((error) => {
            console.log(error)
        })
}

function channel(event) {
    const eventName = event.getHeader("Event-Name")

    const activeChannel = {}

    switch (eventName) {
        case "CHANNEL_STATE":
            activeChannel.state = event.serialize("json")
            // activeChannel.uuid = event.getHeader("Unique-ID")
            // activeChannel.answerState = event.getHeader("Answer-State")
            // activeChannel.callDirection = event.getHeader("Call-Direction")
            break
        case "CHANNEL_HANGUP":
            activeChannel.hangupCause = event.getHeader("Hangup-Cause")
            break
        default:
            break
    }

    if (_.isEmpty(activeChannel) === false) {
        console.log(activeChannel)
    }
}

export default fsEvents
