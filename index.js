import 'dotenv/config';
import express  from 'express';
import employeeRouter from './src/routers/employeeRouter.js';
import NumberRouter from './src/routers/NumberRouter.js';
const app = express();
app.use(express.json())
app.use(NumberRouter)
app.use(employeeRouter)

app.listen(process.env.SERVER_PORT, () => {
  console.log(`Server is running at ${process.env.SERVER_PORT}`)
});
