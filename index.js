const hapi = require('@hapi/hapi');

const server = hapi.server({
    port: 3000,
    host: '0.0.0.0',
});


server.route([
    {
    method: 'GET',
    path: '/',
    handler: async(h) =>{
        const response = await h.response({
            "massage" :"cscs",
        });
        await response.code(200);
        return response
    },
    }
]);

server.start();
    console.log(`Server berjalan pada ${server.info.uri}`);
module.exports =server;