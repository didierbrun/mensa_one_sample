
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
          'https://kolkrabbi.heroku.com/apps/e8b72595-9ac8-460b-a1fb-dbdafff88456/github/push',
          bodyParameters,
          config
        ).then(console.log).catch(console.log);

    }
};