export default function guardrail(func) {
  const queue = [];
  try {
    queue.push(func());
  } catch (err) {
    queue.push(err.toString());
  } finally {
    queue.push('Guardrail was processed');
  }
  return queue;
}
