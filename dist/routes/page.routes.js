"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const pageRouter = (0, express_1.Router)();
pageRouter.get('/', (req, res) => {
    res.status(200).render('index', {
        title: 'Home',
        message: 'Hello, World!',
        showYear: true
    });
});
pageRouter.get('/about', (req, res) => {
    res.status(200).render('about', {
        title: 'About',
        message: 'This is the about page'
    });
});
pageRouter.get('/contact', (req, res) => {
    res.status(200).render('contact', {
        title: 'Contact',
        content: 'When you need to reach out to us, use the following contacts',
        contacts: ['sample@gmail.com', '123-456-7890']
    });
});
exports.default = pageRouter;
