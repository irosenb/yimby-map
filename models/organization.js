const { Client } = require('pg'); 

var Organization = {} 

Organization.create = function(name, email, location, url, twitter, callback) {
  const client = Organization.connection();

  var text = "INSERT INTO Organization(name, email, location, url, twitter) VALUES ($1, $2, $3, $4, $5)"
  var values = [name, email, location, url, twitter];
  client.query(text, values, (err, results) => {
    if (err) {
      callback(null, err)
    } else {
      callback(results.rows, null);
    }
  })
}

Organization.all = function(callback) {
  const client = Organization.connection(); 

  var text = "SELECT * FROM Organization";
  client.query(text, function(err, results) {
    if (err) {
      callback(null, err); 
    } else {
      callback(results.rows, null);
    }
  }) 
}

Organization.connection = function() {
  const client = new Client(); 
  client.connect(); 

  return client
}

for (var k in Organization) {
  exports[k] = Organization[k];
}