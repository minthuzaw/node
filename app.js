import express from 'express';
import router from "./router"
// import { engine } from 'express-edge';
const engine = require('express-edge');

const app = express();

//set template engine
app.use(engine);
app.set('views', `${__dirname}/pages`);

//for static file
app.use(express.static('assets'));

//for router
app.use(router)


const port = 4000;
app.listen(port, () => {
    console.log(`server is running on ${port}`);
});
