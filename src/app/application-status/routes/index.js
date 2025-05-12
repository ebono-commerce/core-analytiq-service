const schemas = require("../schemas");

const handlers = require("../handlers");

module.exports = async fastify => {
  // Store application status
  fastify.route({
    method: "POST",
    url: "/",
    schema: schemas.createApplicationStatusSchema,
    handler: handlers.createApplicationStatusHandler(fastify)
  });

  // Get application status with filters
  fastify.route({
    method: "GET",
    url: "/",
    schema: schemas.getApplicationStatusSchema,
    handler: handlers.getApplicationStatusHandler(fastify)
  });
};
