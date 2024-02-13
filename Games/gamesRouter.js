import { Router } from "express";

const gamesRouter = Router();

const pageName = "Games";

gamesRouter.get('/', (request, response) => {
    response.render('header', {
        page: pageName
    });
});

export {gamesRouter};

