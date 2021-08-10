import express from 'express';
import cors from 'cors';
import { users } from './routers/users.routers';

const app = express();
const { PORT } = process.env;

app.use(cors({
  origin: 'http://localhost:3000'
}))

app.use(function(req, res, next) {
  const { headers } = req;
  console.log(`Received a request from ${headers.origin}.`);
  next();
});

app.use("/api", users);

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
