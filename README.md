### Method list and where to refer for docs

#### Projects
* **Freelancer.Projects**
  * `.create(data, callback)` ==> Projects->Create New Project
  * `.performAction(projectId, data, callback)` ==> Projects->Project Actions
  * `.search(data, callback)` ==> Projects->Search for Projects
  * `.inviteTo(projectId, data, callback)` ==> Projects->Invite to Project
  * `.getUpgradeFees(data, callback)` ==> Projects->Get Upgrade Fees
  * `.get(data, callback)` ==> Projects->Get Projects
  * `.getById(projectId, data, callback)` ==> Projects->Get Project by ID
  * `.getBids(projectId, data, callback)` ==> Projects->Get (Project) Bids
  * `.getBidInfo(projectId, data, callback)` ==> Projects->Get (Project) Bid information
  * `.getMilestoneRequests(projectId, data, callback)` ==> Projects->Get (Project) Milestone Requests
  * `.getMilestones(projectId, data, callback)` ==> Projects->Get (Project) Milestones
  * `.getActiveProjectTemplates(data, callback)` ==> Get Active Project Templates
  * `.getCurrencies(data, callback)` ==> Get Currencies
  * `.getCategories(data, callback)` ==> Get Categories
  * `.getBudgets(data, callback)` ==> Get Budgets
  * `.ping(callback)` ==> Ping
* **Freelancer.Bids**
  * `.get(data, callback)` ==> Bids->Get Bids
  * `.getById(bidId, data, callback)` ==> Bids->Get Bid by ID
  * `.create(data, callback)` ==> Bids->Bid on a Project
  * `.update(bidId, data, callback)` ==> Bids->Update Existing Bid
  * `.performAction(bidId, data, callback)` ==> Bids->Perform Bid Action
  * `.setBidAward(bidId, data, callback)` ==> Bids->Set Bid Award Status
* **Freelancer.Jobs**
  * `.get(data, callback)` ==> Jobs->Get Jobs
  * `.getJobBundles(data, callback)` ==> Jobs->Get Job Bundles
  * `.getJobBundleCategories(data, callback)` ==> Jobs->Get Job Bundle Categories
* **Freelancer.MilestoneRequests**
  * `.get(data, callback)` ==> Milestone Requests->Get Milestone Requests
  * `.create(data, callback)` ==> Milestone Requests->Create a Milestone Request
  * `.doAction(milestoneRequestsId, data, callback)` ==> Milestone Requests->Milestone Request Action
* **Freelancer.Milestones**
  * `.get(data, callback)` ==> Milestones->Get Milestones
  * `.create(data, callback)` ==> Milestones->Create a Milestone
  * `.doAction(milestonesId, data, callback)` ==> Milestones->Milstone Action
* **Freelancer.Reviews**
  * `.get(data, callback)` ==> Reviews->Get Project Reviews
  * `.create(data, callback)` ==> Reviews->Post a Review
