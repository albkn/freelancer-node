var https = require('https');
var qs = require('qs');

module.exports = function(Freelancer) {
  var _sendRequest = function(method, path, data, callback) {
    var headers = {
      'Content-Type': 'application/json',
      'Freelancer-Developer-Auth-V1': Freelancer.DEVELOPER_ID+';'+Freelancer.DEVELOPER_KEY,
    };

    var reqpath = Freelancer.DEFAULT_PATH + path;
    var reqdata = data;

    if (method === 'GET') {
      reqpath += '?' + qs.stringify(data, {arrayFormat: 'brackets'});
      reqdata = undefined;
    }

    var request = https.request({
      host: Freelancer.DEFAULT_HOST,
      path: reqpath,
      headers: headers,
      method: method,
      data: reqdata,
    }, function(response) {
      response.setEncoding('utf8');

      var string = '';

      response.on('data', function(data) {
        string += data;
      });

      response.on('end', function() {
        var resultObject = string;
        callback(undefined, resultObject);
      });
    });

    request.on('error', function(error) {
      callback(error);
    });

    request.write(JSON.stringify(data));
    request.end();
    console.log(reqpath);
  };

  var sendGet = function(path, data, callback) {
    return _sendRequest('GET', path, data, callback);
  };
  var sendPost = function(path, data, callback) {
    return _sendRequest('POST', path, data, callback);
  };
  var sendPut = function(path, data, callback) {
    return _sendRequest('PUT', path, data, callback);
  };

  return {
    sendGet: sendGet,
    sendPost: sendPost,
    sendPut: sendPut
  };
};
