module.exports = function(developerId, developerKey) {

  Freelancer = {};
  // Auth constants
  Freelancer.DEVELOPER_ID = developerId;
  Freelancer.DEVELOPER_KEY = developerKey;
  // API constants
  Freelancer.DEFAULT_HOST = 'www.freelancer.com';
  Freelancer.DEFAULT_PORT = '443';
  Freelancer.DEFAULT_PATH = '/api/';

  // Import methods
  var RB = require('./lib/_resource-builder.js')(Freelancer);
  Freelancer.Projects = require('./lib/projects.js')(RB);
  Freelancer.Bids = require('./lib/bids.js')(RB);
  Freelancer.Jobs = require('./lib/jobs.js')(RB);
  Freelancer.Milestones = require('./lib/milestones.js')(RB);
  Freelancer.MilestoneRequests = require('./lib/milestone_requests.js')(RB);
  Freelancer.Reviews = require('./lib/reviews.js')(RB);

  return Freelancer;
};
