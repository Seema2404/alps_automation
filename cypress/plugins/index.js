module.exports = (on, config) => {
    const plugins = (on) => {
        on('task', {
            log (message) {
                console.log(message)

                return null
            }
        })
    }
}

const { isFileExist } = require('cy-verify-downloads');
module.exports = (on, config) => {
    on('task', {
        isFileExist
    })
}