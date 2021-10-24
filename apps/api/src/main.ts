/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import * as express from 'express';
import * as cors from 'cors';
import * as jwt from 'jsonwebtoken';
import jwtDecode from 'jwt-decode';

const app = express();
// Header and body Parsers
app.use(cors());
app.use(express.json()); // Middleware for JSON format post data
app.use(express.urlencoded({ extended: false })); // Middleware for Non JSON format post data

const postOne = {
  userId: 1,
  id: 1,
  title: 'Interesting post 1',
  body: 'Some post'
};

app.get('/post/1', (req, res) => {
  res.send(postOne);
});

const createToken = user => {
  // Sign the JWT
  return jwt.sign(
    {
      sub: '1',
      email: 'some email',
      iss: 'api.orbit',
      aud: 'api.orbit'
    },
    // process.env.JWT_SECRET,
    '123',
    { algorithm: 'HS256', expiresIn: '1h' }
  );
};

app.post('/login', async (req, res) => {
  try {
    const { userName, password } = req.body;

    const user = ['wb'].find((allowedUserName) => userName === allowedUserName);

    if (!user) {
      return res.status(403).json({
        message: 'Wrong email or password.'
      });
    }

    const passwordValid = password === '123';

    if (passwordValid) {
      const userInfo = 'some user info';

      const token = createToken(userInfo);
      const decodedToken = jwtDecode(token);
      // const decodedToken = 'decoded token';
      const expiresAt = decodedToken.exp;
      // const expiresAt = 'tomorrow';

      res.json({
        message: 'Authentication successful!',
        token,
        userInfo,
        expiresAt
      });
    } else {
      res.status(403).json({
        message: 'Wrong email or password.'
      });
    }
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ message: 'Something went wrong.' });
  }
});

const port = process.env.port || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});

server.on('error', console.error);
