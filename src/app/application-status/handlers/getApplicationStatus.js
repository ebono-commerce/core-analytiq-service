const fetchApplicationStatusService = require("../services/fetchApplicationStatus");

const getApplicationStatusHandler = fastify => {
  const fetchApplicationStatus = fetchApplicationStatusService(fastify);
  return async (request, reply) => {
    const { query, logTrace } = request;
    const response = await fetchApplicationStatus({
      query,
      logTrace
    });
    return reply.send(response);
  };
};

module.exports = getApplicationStatusHandler;
