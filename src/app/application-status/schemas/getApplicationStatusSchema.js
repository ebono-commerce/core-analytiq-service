const getApplicationStatusSchema = {
  querystring: {
    type: 'object',
    properties: {
      outlet_id: { type: 'string' },
      terminal_id: { type: 'string' },
      app_type: { type: 'string', enum: ['POS', 'BACKEND'] },
      status: { type: 'boolean' }
    }
  },
  response: {
    200: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          id: { type: 'string' },
          outlet_id: { type: 'string' },
          terminal_id: { type: 'string' },
          mac_address: { type: 'string' },
          app_type: { type: 'string' },
          status: { type: 'boolean' },
          last_synced_at: { type: 'string' },
        }
      }
    }
  }
};

module.exports = getApplicationStatusSchema; 