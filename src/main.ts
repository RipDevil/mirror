import { createServer } from 'http';

const startServer = (port: number) => {
     const server = createServer((_, res) => {
          res.statusCode = 200;
          res.end();
     });

     return server.listen(port);
};

startServer(8000);
