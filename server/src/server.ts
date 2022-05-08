import express from 'express';
import cors from 'cors';
import { routes } from './routes';

const app = express();

app.use(cors()); // determina os front-ends que tem acesso a nossa aplicação 
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
    console.log('HTTP server running!');
});

//SQLitex 
// Prisma