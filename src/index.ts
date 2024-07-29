import express, {Application, Request, Response, NextFunction} from 'express';
import {environtmentConfig} from './config/index';


// Bot express
const app: Application = express();
const port = environtmentConfig.port;

// Application routing
app.get('/', (req: Request, res: Response) => {
  res.status(200).send({
    message: "Hello from Express",
  });
});

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
