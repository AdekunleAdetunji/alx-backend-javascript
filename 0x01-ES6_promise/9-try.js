export default function guardrail(Function) {
    const queue = []
    try {
        queue.push(Function())
    } catch (err) {
        queue.push(err.toString())
    } finally {
        queue.push("Guardrail was processed")
    }
    return queue
}