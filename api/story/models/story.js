"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */
const axios = require("axios");

const publishURI = strapi.config.get("webhooks.publish");
const notificationURI = strapi.config.get("webhooks.notification");

module.exports = {
  lifecycles: {
    async beforeUpdate(params, data) {
      console.error("beforeUpdate");
    },
    async afterUpdate(result, params, data) {
      console.error("afterUpdate");
      console.log(publishURI);
      console.log(notificationURI);
      try {
        const response1 = await axios.post(publishURI, {});
        console.error(response1);
        const response2 = await axios.post(notificationURI, {
          msgtype: "text",
          text: {
            content: "新故事发布了",
          },
        });
        console.error(response2);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
