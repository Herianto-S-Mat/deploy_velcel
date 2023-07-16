const hapi = require('@hapi/hapi');

const server = hapi.server({
    port: 3000,
    host: 'localhost',
});

const routes = [
    {
        method: 'GET',
        path: '/',
        handler: () => {
            return 'halaman pertama';
        },
        },
    {
    method: 'GET',
    path: '/a',
    handler: () => {
        return 'kosong sayang';
    },
    }
]

server.route(routes);

server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
