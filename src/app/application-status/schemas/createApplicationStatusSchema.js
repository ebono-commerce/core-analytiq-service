const createApplicationStatusSchema = {
  body: {
    type: "object",
    required: [
      "outlet_id",
      "mac_address",
      "app_type",
      "status",
      "last_synced_at"
    ],
    properties: {
      outlet_id: { type: "string" },
      terminal_id: { type: "string" },
      mac_address: { type: "string" },
      app_type: { type: "string", enum: ["POS", "BACKEND"] },
      status: { type: "boolean" },
      last_synced_at: { type: "string" }
    }
  },
  response: {
    201: {
      type: "object",
      properties: {
        id: { type: "string" }
      }
    }
  }
};

module.exports = createApplicationStatusSchema;
