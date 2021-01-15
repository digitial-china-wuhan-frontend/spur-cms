module.exports = ({ env }) => ({
  publish: env("WEBHOOK_URI_PUBLISH"),
  notification: env("WEBHOOK_URI_NOTIFICATION"),
});
