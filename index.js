const Hapi = require('@hapi/hapi');

const server = Hapi.server({
    port: 3000,
    host: 'localhost',
});

const routes = [
    {
        method: 'GET',
        path: '/users/{id}/{ada}',
        handler: (request, h) => {
            const {id ,ada}  = request.params;
            const reques = {id ,ada};
            return reques ;//`Hello ${ada} id anda ${id}!`;
        },
    },
    {
        method: 'GET',
        path: '/',
        handler: (request, h) => {
            const response = h.response({"data":"cfhgvg"});
            return response;
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
