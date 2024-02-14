import { Router } from "express";

const gamesRouter = Router();

let pageName = "";

gamesRouter.get('/', (request, response) => {
    pageName = "Games";
    response.render('header', {
        page: pageName
    });
});

gamesRouter.get('/tictactoe', (request, response) => {
    pageName = "Tic Tac Toe";
    response.render('header', {
        page: pageName
    });
});

export {gamesRouter};

