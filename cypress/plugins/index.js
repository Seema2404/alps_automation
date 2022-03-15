import selectTestsWithGrep from 'cypress-select-tests/grep'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { isFileExist } = require('cy-verify-downloads')
const fs = require('fs')

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

module.exports = (on, config) => {
        on('task', {
        isFileExist,
        renameFile ({ filename1, filename2 }) {
            fs.rename(filename1, filename2, (err) => {
                if (err) {
                    console.log(err)
                }
            })

            return null
        }
    })
}

export default plugins
