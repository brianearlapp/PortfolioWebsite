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
        <h1>Brian App</h1>
    </body>
</html>`;

homeRouter.get('/', (request, response) => {
    response.send(data);
});

export {homeRouter};