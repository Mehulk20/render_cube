const app = require('./app');

const port = process.env.DB_PORT || 5000;

app.listen(port, () => console.log(`API gateway running on port ${port}`));
