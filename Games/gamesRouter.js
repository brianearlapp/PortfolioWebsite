import { Router } from "express";

const gamesRouter = Router();

const data = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Brian App - Games</title>
    </head>
    <body>
        <h1><a href='/home' class="titleLink">Brian App - Software Development Portfolio</a></h1>
        <a href="/home">Home</a>
        <a href="/games">Games</a>
    </body>
</html>`;

gamesRouter.get('/', (request, response) => {
    response.send(data);
});

export {gamesRouter};

