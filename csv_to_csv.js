var csv = require('fast-csv');
var fs = require('fs');

var filename = process.env.IN_FILENAME || '/all_domains.csv';

csv
  .fromPath(filename, {headers: true})

  .transform(function(obj) {
    return {
      domain: obj.domain,
      json: JSON.stringify({
        domain: obj.domain
      })
    };
  })

  .pipe(csv.createWriteStream({headers: true}))
  .pipe(fs.createWriteStream(process.env.OUT_FILENAME || 'out.csv', {encoding: 'utf8'}));


