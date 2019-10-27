const express = require("express")
const expressLayouts = require("express-ejs-layouts")
const mongoose = require("mongoose")
// const flash = require("connect-flash")
// const session = require("express-session")
const passport = require("passport")

const app = express()

// Passport config
require("./config/passport")(passport)

//DB Config
const db = require("./config/keys").MongoURI;

// Connect to Mongo
mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(console.log("MongoDB connected."))
    .catch(err => console.log(err))

app.use(expressLayouts)
app.set('view engine', 'ejs')

// Body parser middleware
app.use(express.urlencoded({ extended: true }));

// Express session middleware
// app.use(session({
//     secret: 'secret',
//     resave: true,
//     saveUninitialized: true,
//   }))

app.use(passport.initialize())
app.use(passport.session())

// app.use(flash)

// Global vars
// app.use((req, res, next) => {
//     res.locals.error_msg = req.flash("error_msg")
//     res.locals.success_msg = req.flash("success_msg")
//     next()
// })

// Routes
app.use("/", require("./routes/index"))
app.use("/users", require("./routes/users"))


const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Server running on port", PORT))