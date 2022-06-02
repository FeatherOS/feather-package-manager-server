const yaml = require("js-yaml")
const { exit } = require("process")
const path = require("path")
const cwd = process.cwd()

const http = require("http")
const express = require("express")
const fs = require("fs")

const Log = require("./modules/logger")
const app = express()

// routers
var route_package = require("./routes/package")
var route_user = require("./routes/user")

console.clear()

app.set('view engine', 'ejs')
Log.e(`Set view engine to '${app.get('view engine')}'`)
app.set('views', path.join(cwd, "www", "pages"))
Log.e(`Set render folder to '${app.get('views')}'`)
app.use(express.static(path.join(cwd, "www", "public")))
Log.e(`Set web root to '${path.join(cwd, "www", "public")}'`)

app.use("/package", route_package)
Log.e(`Initialiced Router 'package'`)
app.use("/user", route_user)
Log.e(`Initialiced Router 'user'`)

/**
 * Loading './config.yaml'
 */
try {
    global.cfg = yaml.loadAll(fs.readFileSync(path.join(cwd, "config.yaml"), "utf-8"))[0]
    Log.log("Config", "Config Loaded")

} catch (error) {
    Log.error("Config", "Could not load 'config.yaml")
    console.log(error)
    exit(1)
}

const port = cfg["port"]["normal"]


/**
 * MAIN
 */
app.get("/", (req, res) => {
    /**
     * TODO:
     *  - list all latest commits
     */
    res.render("main")
})

app.get("/stats", (req, res) => {
    res.send("STILL TODO")
})


app.get("/login", (req, res) => {
    res.send("STILL TODO")
})

app.post("/login", (req, res) => {
    res.send("STILL TODO")
})

app.get("/register", (req, res) => {
    res.send("STILL TODO")
})

app.post("/register", (req, res) => {
    res.send("STILL TODO")
})

app.get("/search", (req, res) => {
    if (req.query.q) {
        res.send(`STILL DOTO`)
        res.end()
    } else {
        res.end()
    }
})


app.listen(port, () => {
    Log.e("Server up and running on: " + port)
})