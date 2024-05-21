import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import router from './app/routes/route';
import notFoundRoute from './app/middleware/notFoundRoute';
const app: Application = express();

// parser
app.use(express.json());
app.use(cors());

// Application routers
app.use('/api', router)

// handle 404 route
app.use(notFoundRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('server  is building')
});

export default app;
