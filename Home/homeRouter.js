import {Router} from 'express';

const homeRouter = Router();

const data = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Brian App - Home</title>
    </head>
    <body>
        <h1>Brian App - Software Development Portfolio</h1>
        <a href="/home">Home</a>
        <a href="/games">Games</a>
    </body>
</html>`;

homeRouter.get('/', (request, response) => {
    response.send(data);
});

export {homeRouter};