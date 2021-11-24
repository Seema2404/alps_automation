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
