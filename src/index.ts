import "express-async-errors";
import Express from 'express';
import router from './routes';

const app = Express();
const port = 3000;

app.use(Express.json());

app.use(router);

app.use((err: Error, req: Express.Request, res: Express.Response, next: Express.NextFunction) => {
  return res.json({
    status: "error",
    message: err.message
  });
  next();
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});