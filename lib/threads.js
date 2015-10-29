module.exports = function(RB) {
  var _pathBase = 'messages/0.1/';
  var _path = _pathBase + 'threads/';

  return {
    create: function(data, callback) {
      var path = _path;
      RB.sendPost(path, data, callback);
    },
    addMessage: function(threadId, data, callback) {
      var path = _path + threadId + '/' + 'messages/';
      RB.sendPost(path, data, callback);
    },
    searchForMessages: function(data, callback) {
      var path = _path + 'search/';
      RB.sendGet(path, data, callback);
    },
    get: function(data, callback) {
      var path = _path;
      RB.sendGet(path, data, callback);
    },
    update: function(data, callback) {
      var path = _path;
      RB.sendPut(path, data, callback);
    },
    sendTypingNotification: function(threadId, data, callback) {
      var path = _path + threadId + '/' + 'typing/';
      RB.sendPost(path, data, callback);
    },
    getById: function(threadId, data, callback) {
      var path = _path + threadId + '/';
      RB.sendGet(path, data, callback);
    },
    addRemoveUser: function(threadId, data, callback) {
      var path = _path + threadId + '/' + 'members/';
      RB.sendPut(path, data, callback);
    }
  };
};
