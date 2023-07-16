const hapi = require('@hapi/hapi');

const server = hapi.server({
    port: 3000,
    host: 'localhost',
});


server.route([
    {
    method: 'GET',
    path: '/a',
    handler: () => {
        return 'kosong sayang';
    },
    }
]);

server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
module.exports =server;