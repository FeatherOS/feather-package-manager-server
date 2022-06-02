
const ANSI_PREFIX = "\x1b[38;2;"
const RED = ANSI_PREFIX + "231;76;60m"
const BLUE = ANSI_PREFIX + "0;119;192m"
const GRAY = ANSI_PREFIX + "149;165;166m"
const CYAN = ANSI_PREFIX + "7;171;160m"
const LILAC = ANSI_PREFIX + "126;52;157m"
const BROWN = ANSI_PREFIX + "174;124;91m"
const GREEN = ANSI_PREFIX + "14;172;81m"

function _timestamp() {
    const d_t = new Date()

    let year = d_t.getFullYear()
    let month = ("0" + (d_t.getMonth() + 1)).slice(-2)
    let day = ("0" + d_t.getDate()).slice(-2)
    let hour = d_t.getHours()
    let minute = d_t.getMinutes()
    let seconds = d_t.getSeconds()

    // prints date & time in YYYY-MM-DD HH:MM:SS format
    return year + "-" + month + "-" + day + " " + hour + ":" + minute + ":" + seconds
}

function _writeSuffix(token, message, status = "OK") {
    const date = new Date()
    console.log(`[${_timestamp()} - PS :: ${token}] ${status} :: ${message}`)
}

function ps(message) {
    _writeSuffix("Package Server", message)
}

function be(message) {
    _writeSuffix("Back-End", message)
}

function fe(message) {
    _writeSuffix("Font-End", message)
}

function e(message) {
    _writeSuffix("Express", message)
}

function sql(message) {
    _writeSuffix("SQLite3", message)
}

function log(suffix, message) {
    _writeSuffix(suffix, message)
}

function error(suffix, message) {
    _writeSuffix(suffix, message, "ERROR")
}

module.exports.ps = ps
module.exports.be = be
module.exports.fe = fe
module.exports.e = e
module.exports.sql = sql

module.exports.log = log
module.exports.error = error