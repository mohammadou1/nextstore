const next = require('next');
const express = require('express');
const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();


app.prepare().then(() => {
    const server = express();


    server.get('*', (req, res) => handle(req, res));

    server.listen(port, err => {
        if (err) throw err;
        console.log(port);
    });
});