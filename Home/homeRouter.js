import {Router} from 'express';

const homeRouter = Router();

const pageName = "Home";

// testing the chrome bug that causes Abstract to replace Resumes in the menu

let responseBody = `
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Brian App - Home</title>
        <link rel="stylesheet" href="style.css" />        
    </head>
    <header class="topOfPageBar">
            <div class="navBarContainer">
                <a href="/home" class="menuLink">Home</a>
                <div class="dropdown-Container">
                    <button class="dropdownButton">Games</button>
                    <div class="dropdown-Content">
                        <a href="/games/tictactoe" class="menuSubLink">Tic Tac Toe</a>
                    </div>
                </div>
                <div class="dropdown-Container">
                    <button class="dropdownButton">Resumes</button>
                    <div class="dropdown-Content">
                        <a href="/resumes/softwaredev" class="menuSubLink">Software Development</a>
                        <a href="/resumes/productmanagement" class="menuSubLink">Product Management</a>
                        <a href="/resumes/partnermanagement" class="menuSubLink">Partner Management</a>
                    </div>
                </div>
                <a href="/codesamples" class="menuLink">Code Samples</a>
            </div>
    </header>
    <body>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
        <p>Test</p>
    </body>
</html>`;

homeRouter.get('/', (request, response) => {
    response.send(responseBody);
});

/* normal code
homeRouter.get('/', (request, response) => {
    response.render('header', {
        page: pageName
    });
});
*/

export {homeRouter};