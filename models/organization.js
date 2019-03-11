const { Client } = require('pg'); 

var Organization = {} 

Organization.create = function(name, email, location, url, twitter, callback) {
  const client = Organization.connection();

  var text = "INSERT INTO Organization(name, email, location, url) VALUES ($1, $2, $3, $4)"
  var values = [name, email, location, url];
  client.query(text, values, (err, results) => {
    if (err) {
      console.error(err);
    } else {
      callback(results.rows);
    }
  })
}

Organization.all = function(callback) {
  const client = Organization.connection(); 

  var text = "SELECT * FROM Organization";
  client.query(text, function(err, results) {
    if (err) {
      callback(nil, error); 
    } else {
      callback(results.rows, nil);
    }
  }) 
}

Organization.connection = function() {
  const client = new Client(); 
  client.connect(); 

  return client
}