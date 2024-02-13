import { Router } from "express";

const codeSamplesRouter = Router();

const pageName = "Code Samples";

codeSamplesRouter.get('/', (request, response) => {
    response.render('header', {
        page: pageName
    });
});

export {codeSamplesRouter};