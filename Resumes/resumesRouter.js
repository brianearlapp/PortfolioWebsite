import { Router } from "express";

const resumesRouter = Router();

let pageName = "";

resumesRouter.get('/', (request, response) => {
    pageName = "Resumes";
    response.render('header', {
        page: pageName
    });
});

resumesRouter.get('/softwaredev', (request, response) => {
    pageName = "Software Development Resume";
    response.render('header', {
        page: pageName
    });
});

resumesRouter.get('/productmanagement', (request, response) => {
    pageName = "Product Management Resume";
    response.render('header', {
        page: pageName
    });
});

resumesRouter.get('/partnermanagement', (request, response) => {
    pageName = "Partner Management Resume";
    response.render('header', {
        page: pageName
    });
});

export {resumesRouter};