import selectTestsWithGrep from 'cypress-select-tests/grep'

const plugins = (on) => {
    on('task', {
        log (message) {
            console.log(message)

            return null
        }
    })
}

module.exports = (on, config) => {
    on('file:preprocessor', selectTestsWithGrep(config))
}

const { isFileExist } = require('cy-verify-downloads');
module.exports = (on, config) => {
    on('task', {
        isFileExist
    })
}

export default plugins