const del = require('del')

const path = require('./paths')

function clean() {
  return del(path.clean)
}

module.exports = clean