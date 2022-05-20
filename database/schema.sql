CREATE DATABASE shopify;

-- ---
-- Table 'items'
-- ---

DROP TABLE IF EXISTS items;

CREATE TABLE items (
  id SERIAL PRIMARY KEY UNIQUE NOT NULL,
  name VARCHAR(255) NULL DEFAULT NULL,
  quantity INT NULL DEFAULT NULL,
  id_warehouses INT NULL DEFAULT NULL
);

-- ---
-- Table 'warehouses'
-- ---

DROP TABLE IF EXISTS warehouses;

CREATE TABLE warehouses (
  id SERIAL PRIMARY KEY UNIQUE NOT NULL,
  warehouse VARCHAR(255) NULL DEFAULT NULL
);

-- ---
-- Foreign Keys
-- ---

ALTER TABLE items ADD FOREIGN KEY (id_warehouses) REFERENCES warehouses (id);

-- ---
-- Indexing
-- ---
CREATE INDEX "items_id_warehouses" ON items (id_warehouses);

-- ---
-- Test Data
-- ---

-- INSERT INTO `items` (`id`,`name`,`quantity`,`id_warehouses`) VALUES
-- ('','','','');
-- INSERT INTO `warehouses` (`id`,`warehouse`) VALUES
-- ('','');

-- INSERT INTO items (id, name, quantity, id_warehouses) VALUES (2, 'Steak', 5, 2);
-- INSERT INTO items (id, name, quantity, id_warehouses) VALUES (3, 'Steak', 5, 2);
-- INSERT INTO items (id, name, quantity, id_warehouses) VALUES (4, 'Steak', 5, 2);