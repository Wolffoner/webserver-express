const express = require("express");
const app = express();
//HBS Require
const hbs = require(`hbs`);
require(`./hbs/helpers.js`);

//PORT
port = process.env.PORT || 3000;

//Public dir
app.use(express.static(__dirname + `/public`));

//Express hbs engine
hbs.registerPartials(__dirname + `/views/partials`);
app.set(`view engine`, `hbs`);

// Req server /about
app.get(`/about`, (req, res) => {
    res.render(`about.hbs`, {
        nombre: `leAndro`
    });
});

// Req server /
app.get("/", (req, res) => {
    res.render(`home.hbs`, {
        nombre: `leAndro`
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${port}`);
});
