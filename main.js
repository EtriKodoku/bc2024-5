const { program } = require("commander");
const express = require('express');

program
  .requiredOption("-H, --host <host>", "server host")
  .requiredOption("-p, --port <port>", "server port")
  .requiredOption("-c, --cache <path>", "cache directory path")
  .parse(process.argv);

const { host, port, cache } = program.opts();

const app = express();

app.get('/', (req, res) => {
  res.send('Hello!');
});

app.listen(port, host, () => {
    console.log(`Server running at http://${host}:${port}/`);
});
