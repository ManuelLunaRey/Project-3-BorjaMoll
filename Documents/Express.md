Express.js explanation

Express is a fast, unopinionated and minimalist web framework for Node.js.

Express is a "server-side" or "back-end" framework. It is not comparable to client-side frameworks like React, Angular & Vue. It can be userd in combination with those frameworks to build full stack applications.
Bsic server syntax

Const express = require ('express');

Init express

conts app = express();

Create yout endpoints/route handlers

app.get(`/´, function(req, res) {
res.send(`Hello world´);
})

lsiend on a port

app.listen(5000);
