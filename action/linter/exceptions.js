'use strict'

const ALWAYS_SKIP = [
	'.git',
	'node_modules'
]

const ALWAYS_VALID = [
  'CONTRIBUTING.md',
  'LICENSE.md',
	'README.md',
  'SECURITY.md',
]

module.exports = {
  alwaysSkip: ALWAYS_SKIP,
  alwaysValid: ALWAYS_VALID
}