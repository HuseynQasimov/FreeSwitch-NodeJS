import FSCall from "../services/answer.js"

export default class FSCallController {
    #fsCall = new FSCall()

    async answerCall(req) {
        try {
            const res = await this.#fsCall.answer()
            return res
        } catch (error) {
            console.log(error)
        }
    }
}
