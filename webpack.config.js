const path = require("path")
module.exports = {
    mode: "development",
    entry : {
        app : "./app/collect.js"
    },
    output: {
        path:  __dirname + "/app/dist",
        filename: "common.bundle.js"
    }
}
