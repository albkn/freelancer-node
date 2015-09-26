module.exports = function(RB) {
  var _path = 'projects/0.1/milestone_requests/';

  return {
    get: function(data, callback) {
      var path = _path;
      RB.sendGet(path, data, callback);
    },
    create: function(data, callback) {
      var path = _path;
      RB.sendPost(path, data, callback);
    },
    doAction: function(milestoneRequestsId, data, callback) {
      var path = _path + milestoneRequestsId + '/';
      RB.sendPut(path, data, callback);
    },
  };
};
