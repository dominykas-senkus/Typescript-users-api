import express, { ErrorRequestHandler } from "express";
import userRoutes from './routes/users';
import { json } from 'body-parser';
const app = express();
app.use(json());
app.use('/users', userRoutes);
app.use(((err, req, res) => {
    res.status(500).json({ message: err.message })
}) as ErrorRequestHandler);

app.listen(3000);