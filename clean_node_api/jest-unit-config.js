// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./jest.config')

// override this proper to unit test
// Files with .spec.ts is especific to unit tests
config.testMatch = ['**/*.spec.ts']
module.exports = config
