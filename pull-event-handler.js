console.log('PR event handler script started.');

const eventPayload = require(process.env.GITHUB_EVENT_PATH);

if (eventPayload.action === 'opened') {
  console.log('PR was opened:', eventPayload.pull_request.title);
} else if (eventPayload.action === 'synchronize') {
  console.log('PR was synchronized:', eventPayload.pull_request.title);
} else if (eventPayload.action === 'closed') {
  console.log('PR was closed:', eventPayload.pull_request.title);
} else {
  console.log('Unhandled PR event:', eventPayload.action);
}

console.log('PR event handler script finished.');