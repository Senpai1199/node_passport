dbPassword = 'mongodb+srv://<your_username_here>:' + encodedURIComponent('your_password_here') + '@cluster_name_here.mongodb.net/test?retryWrites=true&w=majority'

module.exports = {
    MongoURI: dbPassword
};