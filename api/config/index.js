const env = process.env.NODE_ENV;
const config = env ? require(`./${env}/`) : require('./development/');

module.exports = config;