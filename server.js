import express from 'express';
import { homeRouter } from './Home/homeRouter.js';
import { gamesRouter } from './Games/gamesRouter.js';
import { resumesRouter } from './Resumes/resumesRouter.js';
import { codeSamplesRouter } from './CodeSamples/codeSamplesRouter.js';


const app = express();

app.set('view engine', 'ejs');
app.set('views', './Templates');

app.use('/home', homeRouter);
app.use('/games', gamesRouter);
app.use('/resumes', resumesRouter);
app.use('/codesamples', codeSamplesRouter);

app.get('/', (request, response) => response.redirect('/home'));

app.listen(8080, () => {
    console.log(
        "Server is listening to http://localhost:8080"
    );
});