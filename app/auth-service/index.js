var winston = require('winston');
 
//
// Requiring `winston-logstash` will expose
// `winston.transports.Logstash`
//
require('winston-logstash');


var logger = new (winston.Logger)({
    level: 'info',
    transports: [
      new winston.transports.Logstash({
        port: 5000,
        node_name: 'my node name',
        host: '127.0.0.1'
      }),
      new winston.transports.Console()
    ]
  });

  logger.info('3333 lota')