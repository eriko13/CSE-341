const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Contacts API',
        description: 'CSE 341 Contacts API Documentation'
    },
    host: 'cse-341-s0st.onrender.com',
    schemes: ['https'],
    securityDefinitions: {
        github_oauth: {
            type: 'oauth2',
            authorizationUrl: 'https://cse-341-s0st.onrender.com/login',
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
