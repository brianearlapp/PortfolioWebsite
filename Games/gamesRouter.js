import { Router } from "express";

const gamesRouter = Router();

const pageName = "Games";

gamesRouter.get('/', (request, response) => {
    response.send('header', {
        page: pageName
    });
});

export {gamesRouter};

