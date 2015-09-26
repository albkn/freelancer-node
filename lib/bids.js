module.exports = function(RB) {
  var _path = 'projects/0.1/bids/';

  return {
    get: function(data, callback) {
      var path = _path;
      RB.sendGet(path, data, callback);
    },
    getById: function(bidId, data, callback) {
      var path = _path + 'bidId' + '/';
      RB.sendGet(path, data, callback);
    },
    create: function(data, callback) {
      var path = _path;
      RB.sendPost(path, data, callback);
    },
    update: function(bidId, data, callback) {
      var path = _path + bidId + '/';
      RB.sendPut(path, data, callback);
    },
    performAction: function(bidId, data, callback) {
      var path = _path + bidId + '/';
      RB.sendPut(path, data, callback);
    },
    setBidAward: function(bidId, data, callback) {
      var path = _path + bidId + '/' + 'award_status/';
      RB.sendPut(path, data, callback);
    },
  };
};
