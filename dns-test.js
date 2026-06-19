const dns = require('dns').promises;

(async () => {
  try {
    const result = await dns.resolveSrv('_mongodb._tcp.authservice.ozjk9ng.mongodb.net');
    console.log(result);
  } catch (err) {
    console.error(err);
  }
})();
