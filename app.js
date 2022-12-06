// Setup Express
const express = require('express');
const app = express();
const port = 3000;

// Setup Handlebars
const handlebars = require('express-handlebars');
app.engine(
    'handlebars',
    handlebars({
        helpers: {
            ifEq: function (a, b, options) {
                if (a == b) {
                    return options.fn(this);
                }
                return options.inverse(this);
            },
        },
        defaultLayout: 'main',
    })
);
app.set('view engine', 'handlebars');

// Setup body-parser
app.use(express.urlencoded({ extended: false }));

// Make the "public" folder available statically
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

// Setup routes
app.use(require('./routes/application-routes.js'));

// Start the server running.
app.listen(port, function () {
    console.log(`App listening on port ${port}!`);
});
