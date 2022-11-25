const compression = require('compression');

exports.compressionOptions = compression({ level: 6, threshold: 10 * 1000 });
