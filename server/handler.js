'use strict';


const app = require('./server')



module.exports.server = serverless(app)

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };

