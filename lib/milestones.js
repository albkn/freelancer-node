module.exports = function(RB) {
  var _path = 'projects/0.1/milestones/';

  return {
    get: function(data, callback) {
      var path = _path;
      RB.sendGet(path, data, callback);
    },
    create: function(data, callback) {
      var path = _path;
      RB.sendPost(path, data, callback);
    },
    doAction: function(milestoneId, data, callback) {
      var path = _path + milestoneId + '/';
      RB.sendPut(path, data, callback);
    },
  };
};
