import * as bodyParser from 'body-parser';
import * as dotenv from 'dotenv';
import * as express from 'express';
import * as morgan from 'morgan';
import * as mongoose from 'mongoose';

dotenv.config();

const app: express.Application = express();
const connect = mongoose.connect;
const DB_URL = process.env.DB_URL;

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use((req, res, next) => {
  // err.status = 404;
  res.json({
    success: false,
    message: 'Not Found Page',
  });
});

connect(DB_URL)
  .then(() => console.log('DB connected!'))
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });

export default app;
