module.exports = function(RB) {
  var _pathBase = 'projects/0.1/';
  var _path = _pathBase + 'projects/';

  return {
    create: function(data, callback) {
      var path = _path;
      RB.sendPost(path, data, callback);
    },
    performAction: function(projectId, data, callback) {
      var path = _path + projectId+'/';
      RB.sendPost(path, data, callback);
    },
    search: function(data, callback) {
      var path = _path + 'active/';
      RB.sendGet(path, data, callback);
    },
    inviteTo: function(projectId, data, callback) {
      var path = _path + projectId + '/'+'invite/';
      RB.sendPost(path, data, callback);
    },
    getUpgradeFees: function(data, callback) {
      var path = _path + 'fees/';
      RB.sendGet(path, data, callback);
    },
    get: function(data, callback) {
      var path = _path;
      RB.sendGet(path, data, callback);
    },
    getById: function(projectId, data, callback) {
      var path = _path + projectId+'/';
      RB.sendGet(path, data, callback);
    },
    getBids: function(projectId, data, callback) {
      var path = _path + projectId+'/' + 'bids/';
      RB.sendGet(path, data, callback);
    },
    getBidInfo: function(projectId, data, callback) {
      var path = _path + projectId+'/' + 'bidinfo/';
      RB.sendGet(path, data, callback);
    },
    getMilestoneRequests: function(projectId, data, callback) {
      var path = _path + projectId+'/' + 'milestone_requests/';
      RB.sendGet(path, data, callback);
    },
    getMilestones: function(projectId, data, callback) {
      var path = _path + projectId+'/' + 'milestones/';
      RB.sendGet(path, data, callback);
    },

    // Others
    getActiveProjectTemplates: function(data, callback) {
      var path = _pathBase + 'project_templates/';
      RB.sendGet(path, data, callback);
    },
    getCurrencies: function(data, callback) {
      var path = _pathBase + 'currencies/';
      RB.sendGet(path, data, callback);
    },
    getCategories: function(data, callback) {
      var path = _pathBase + 'categories/';
      RB.sendGet(path, data, callback);
    },
    getBudgets: function(data, callback) {
      var path = _pathBase + 'budgets/';
      RB.sendGet(path, data, callback);
    },
    ping: function(callback) {
      var path = _pathBase + 'ping/';
      RB.sendGet(path, undefined, callback);
    },
  };
};
