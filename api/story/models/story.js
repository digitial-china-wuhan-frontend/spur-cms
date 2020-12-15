"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */
const axios = require("axios");

const hooksUri = strapi.config.get("webhooks.uri");

module.exports = {
  lifecycles: {
    async beforeUpdate(params, data) {
      console.error("beforeUpdate");
    },
    async afterUpdate(result, params, data) {
      console.error("afterUpdate");
      axios
        .post(hooksUri, {})
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },
};
