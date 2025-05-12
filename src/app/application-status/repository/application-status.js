const { logQuery } = require("../../commons/helpers");
const { APPLICATION_STATUS } = require("../commons/constants");

function applicationStatusRepo(fastify) {
  async function createApplicationStatus({ input, logTrace }) {
    const knex = this;

    const query = knex(APPLICATION_STATUS.NAME)
      .returning(APPLICATION_STATUS.COLUMNS.ID)
      .insert(input);

    logQuery({
      logger: fastify.log,
      query,
      context: "Create Application Status",
      logTrace
    });
    const response = await query;
    return response[0];
  }

  async function getApplicationStatus({ logTrace, filters = {} }) {
    const knex = this;
    const query = knex(APPLICATION_STATUS.NAME).select("*");

    if (filters.outlet_id) {
      query.where(APPLICATION_STATUS.COLUMNS.OUTLET_ID, filters.outlet_id);
    }

    if (filters.terminal_id) {
      query.where(APPLICATION_STATUS.COLUMNS.TERMINAL_ID, filters.terminal_id);
    }

    if (filters.app_type) {
      query.where(APPLICATION_STATUS.COLUMNS.APP_TYPE, filters.app_type);
    }

    if (filters.status !== undefined) {
      query.where(APPLICATION_STATUS.COLUMNS.STATUS, filters.status);
    }

    logQuery({
      logger: fastify.log,
      query,
      context: "Get Application Status",
      logTrace
    });

    return query;
  }
  return {
    createApplicationStatus,
    getApplicationStatus
  };
}

module.exports = applicationStatusRepo;
