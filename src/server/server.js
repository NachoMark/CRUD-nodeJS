require("dotenv").config()
const {get} = require("env-var")

const envs = {
    PORT: get("PORT").required().asPortNumber()
}

module.exports = {
    envs
}