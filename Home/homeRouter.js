import {Router} from 'express';

const homeRouter = Router();

const pageName = "Home";

homeRouter.get('/', (request, response) => {
    response.render('header', {
        page: pageName
    });
});

export {homeRouter};