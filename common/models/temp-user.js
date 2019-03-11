'use strict';

module.exports = function(Tempuser) {
    Tempuser.login = function(obj, cb) {
        Tempuser.findOne({ "where": { "username": obj.username }}, function (err, user) {
            if (err === null && user !== null) {
                if (user.password === obj.password) {
                    cb(null, user);
                }
            } else {
                cb ("login failure", {"error": "cerror"});
            }
        });
    }
  
    Tempuser.remoteMethod('login', {
        accepts: [
            {arg: 'loginObject', type: 'Object', http: { source: 'body' }}
        ],
        returns: {type: 'Object', root: true}
    });
};
