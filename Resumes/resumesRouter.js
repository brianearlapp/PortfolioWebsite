import { Router } from "express";

const resumesRouter = Router();

const pageName = "Resumes";

resumesRouter.get('/', (request, response) => {
    response.render('header', {
        page: pageName
    });
});

export {resumesRouter};