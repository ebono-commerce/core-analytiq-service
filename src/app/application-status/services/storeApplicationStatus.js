const applicationStatusRepo = require("../repository/application-status");

function storeApplicationStatusService(fastify) {
  const { createApplicationStatus } = applicationStatusRepo(fastify);

  return async ({ body, logTrace }) => {
    fastify.log.info({
      message: "store application status service",
      logTrace
    });

    const { knex } = fastify;
    const response = await createApplicationStatus.call(knex, {
      input: body,
      logTrace
    });
    return response;
  };
}
module.exports = storeApplicationStatusService;
