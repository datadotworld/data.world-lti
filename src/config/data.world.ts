module.exports = {

    'client_id': process.env.DDW_CLIENT_ID || null,
    'client_secret': process.env.DDW_CLIENT_SECRET || 'something-secret',
    'connector_uri': process.env.DDW_CONNECTOR_REDIRECT || 'localhost',
    'redirect_uri': process.env.DDW_OAUTH_REDIRECT_URI || 'localhost',
    'response_type': process.env.DDW_OAUTH_RESPONSE_TYPE || 'code'

};