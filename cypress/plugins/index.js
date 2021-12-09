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

export default plugins
