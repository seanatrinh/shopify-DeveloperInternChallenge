require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
});

module.exports = {
  getItems(page, count) {
    const query = { text:'', values:[] };

    if (page === 1) {
      query.text = `
        SELECT
          i.id,
          i.name,
          i.quantity,
          w.warehouse
        FROM items AS i
        LEFT JOIN warehouses AS w ON i.id_warehouses = w.id
        WHERE i.name IS NOT NULL
        ORDER BY id ASC
        LIMIT 50;
      `;
    }  else {
      query.text = `
        SELECT
          i.id,
          i.name,
          i.quantity,
          w.warehouse
        FROM items AS i
        LEFT JOIN warehouses AS w ON i.id_warehouses = w.id
        WHERE id > ($1 - 1) * 50
          AND i.name IS NOT NULL
        ORDER BY id ASC
        LIMIT $2;
      `
      query.values = [page, count];
    }
    return pool.query(query);
  },

  getWarehouses() {
    let query = `
      SELECT warehouse
      FROM warehouses;
    `;

    return pool.query(query);
  },

  createItem(obj) {
    const query = { text:'', values: [] };

    query.text = `
      INSERT INTO items(name, quantity, id_warehouses)
      VALUES($1, $2, (SELECT id FROM warehouses WHERE warehouse = $3))
      RETURNING *;
    `
    query.values = [obj.name, obj.quantity, obj.warehouse];

    return pool.query(query);
  },

  createWarehouse(obj) {
    const query = { text:'', values: [] };

    query.text = `
      INSERT INTO warehouses(warehouse)
      VALUES($1)
      RETURNING *;
    `;
    query.values = [obj.warehouse];

    return pool.query(query);
  },

  updateItem(obj) {
    const query = { text:'', values:[] };

    query.text = `
      UPDATE items
      SET name = $1,
          quantity = $2,
          id_warehouses = (SELECT id FROM warehouses WHERE warehouse = $3)
      WHERE id = $4;
    `;
    query.values = [obj.name, obj.quantity, obj.warehouse, obj.id];

    return pool.query(query);
  },

  deleteItem(obj) {
    const query = { text:'', values:[] };

    query.text = `
      DELETE FROM items
      WHERE id = $1
    `;
    query.values = [obj.id];

    return pool.query(query);
  },




}