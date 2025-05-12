const applicationStatusRepo = require("../repository/application-status");

function fetchApplicationStatusService(fastify) {
  const { getApplicationStatus } = applicationStatusRepo(fastify);

  return async ({ query, logTrace }) => {
    fastify.log.info({
      message: "fetch application status service",
      logTrace
    });

    const { knex } = fastify;
    const response = await getApplicationStatus.call(knex, {
      filters: query,
      logTrace
    });

    return response;
  };
}
module.exports = fetchApplicationStatusService;
