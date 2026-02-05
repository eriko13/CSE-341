const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts API',
        description: 'CSE 341 Contacts API Documentation'
    },
    host: 'localhost:8080',
    schemes: ['http', 'https'],
    securityDefinitions: {
        github_oauth: {
            type: 'oauth2',
            authorizationUrl: 'https://github.com/login/oauth/authorize',
            flow: 'implicit',
            scopes: {
                read_user: 'Read user info'
            }
        }
    }
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

// Generate swagger.json
swaggerAutogen(outputFile, endpointsFiles, doc);
