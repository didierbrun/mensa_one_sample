
const axios = require('axios');


module.exports = {
    afterUpdate(event) {

        const config = {
            headers: { Authorization: `Bearer ${process.env.HEROKU_BEARER}` }
        };
        
        const bodyParameters = {
            branch: "release"
        };
        
        axios.post( 
          'https://kolkrabbi.heroku.com/apps/c23cf7e8-b397-42ca-b073-25ada94efc67/github/push',
          bodyParameters,
          config
        ).then(console.log).catch(console.log);

    }
};