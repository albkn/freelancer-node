module.exports = function(RB) {
  var _pathBase = 'projects/0.1/';

  return {
    get: function(data, callback) {
      var path = _pathBase + 'jobs/';
      RB.sendGet(path, data, callback);
    },
    getJobBundles: function(data, callback) {
      var path = _pathBase + 'job_bundles';
      RB.sendGet(path, data, callback);
    },
    getJobBundleCategories: function(data, callback) {
      var path = _pathBase + 'job_bundle_categories';
      RB.sendGet(path, data, callback);
    },
  };
};
