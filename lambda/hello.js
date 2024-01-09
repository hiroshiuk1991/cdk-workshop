exports.handler = async function (event) {
  console.log("request:", JSON.stringify(Event, undefined, 2));
  return {
    statusCode: 2000,
    headers: { "Content-Type": "text/plain" },
    body: `Hello,CDK! You've hit ${event.path}\n`,
  };
};
