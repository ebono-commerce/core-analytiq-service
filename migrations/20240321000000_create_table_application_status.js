exports.up = knex => {
  return knex
    .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
    .then(() => knex.schema.hasTable("application_status"))
    .then(exists => {
      if (!exists) {
        return knex.schema.createTable("application_status", table => {
          table
            .uuid("id")
            .primary()
            .defaultTo(knex.raw("uuid_generate_v4()"));
          table.string("outlet_id");
          table.string("terminal_id");
          table.string("mac_address");
          table.string("app_type");
          table.string("status");
          table.timestamp("last_synced_at"); 
          // Add indexes for frequently queried fields
          table.index(["outlet_id", "terminal_id", "app_type"]);
        });
      }
      return false;
    });
};

exports.down = knex => {
  return knex.schema.dropTable("application_status");
}; 