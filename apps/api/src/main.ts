/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as cors from 'cors';

const app = express();
app.use(cors());

const postOne = {
  userId: 1,
  id: 1,
  title: 'Interesting post 1',
  body: 'Some post',
}

app.get('/post/1', (req, res) => {
  res.send(postOne);
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
