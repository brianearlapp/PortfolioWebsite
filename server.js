import express from 'express';
import { homeRouter } from './Home/homeRouter.js';
import { gamesRouter } from './Games/gamesRouter.js';

const app = express();

app.use('/home', homeRouter);
app.use('/games', gamesRouter);

app.get('/', (request, response) => response.redirect('/home'));

app.listen(8080, () => {
    console.log(
        "Server is listening to http://localhost:8080"
    );
});