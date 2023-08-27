const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    const response = await fetch('https://c241-64-124-137-130.ngrok-free.app/realms/myrealm/protocol/openid-connect/certs', {
      headers: {
        'User-Agent': 'Custom-UA-For-Ngrok',
        'ngrok-skip-browser-warning': 'true'
      }
    });

    const data = await response.json();

    // Setting CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    
    res.status(200).json(data);
  } catch (error) {
    res.status(500).send('Failed fetching JWKS');
  }
};
