const jsonServer = require('json-server');
const path = require('path');
const app = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

app.use(middlewares);
app.use(jsonServer.bodyParser);
app.use(router);

app.listen(process.env.PORT || 3001, () => {
    console.log('JSON Server is running');
});
