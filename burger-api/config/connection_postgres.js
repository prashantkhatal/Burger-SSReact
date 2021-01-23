const { Client } = require('pg');

const client = new Client({
    user: 'jerygmcwdjiupd',
    host: 'ec2-18-205-122-145.compute-1.amazonaws.com',
    database: 'dfiqoom5cl5r9d',
    password: '061a3b55e27000121ad2d8bce9bebb950c75d5b9598e2dcd2516bff882d97648',
    port: 5432,
});


client.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id ", client.threadId);
});

// Export connection for our ORM to use.
module.exports = client;
