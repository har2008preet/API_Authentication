'use strict';
let path = require('path');

const app = require(path.resolve(__dirname, '../server/server'));
const ds = app.datasources.db;
const loopback = require('loopback');

ds.once('connected', function() {
  ds.autoupdate()
    .then(function(err) {
      if (err)
        console.log("Some error occurred :'(");
      else {
        console.log('done...'); process.exit(0);
      }
    });
});
