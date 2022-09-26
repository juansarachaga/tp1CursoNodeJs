//archivo para configurar bd

const path = require('path');

module.exports= {
    "config": path.resolve("./src/datbase/config", "config.js"),
    "models-path": path.resolve(".src/database/models"),
    "seeders-path": path.resolve(".src/database/seeders"),
    "migration-path": path.resolve("./src/database/migrations"),
}