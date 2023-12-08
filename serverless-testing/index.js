const AWS = require("aws-sdk");
const sqs = new AWS.SQS();

module.exports.welcome = async (event) => {
  const params = {
    MessageBody: "testing message",
    QueueUrl: "http://localhost:9324/queue/email-task",
  };

  await sqs.sendMessage(params).promise();

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "server less api is running",
      input: event,
    }),
  };
};
