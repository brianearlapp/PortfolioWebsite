import express from 'express';
import { homeRouter } from './Home/index.js';

const app = express();

app.use('/home', homeRouter);

app.get('/', (request, response) => response.redirect('/home'));

app.listen(8080, () => {
    console.log(
        "Server is listening to http://localhost:8080"
    );
});