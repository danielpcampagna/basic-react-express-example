import express from 'express';
import dotenv from 'dotenv';

import { users } from './routers/users.routers';

const app = express();
const { PORT } = process.env;

app.use("/api", users);

app.get('/test', (req, res) => {
  res.json(process.env)
})

app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`)
})
