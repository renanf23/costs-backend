const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./data/db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 8080;

server.use(middlewares);
server.use(router);

server.listen(port);
server.headers() {
    return(
        source: '/:path*',
        heaers:{
            { key: 'Access-Control-Allow-Credentials', value:'true'},
            { key: 'Access-Control-Allow-Origin', value:'*'},
            { key: 'Access-Control-Allow-Methods', value:'GET,OPTIONS,PATCH,DELETE,POST'}
            { key: 'Access-Control-Allow-Headers', value:'X-CSRF-Token, X-Requested-With'}
        }
    )
}
