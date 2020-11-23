const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const db = require('../models')

// Passport "serialize" your info and make it easier to login
passport.serializeUser((user, cb) => {
    cb(null, user.id)
})

// Passport "deserialize" your info and take your idea and look it up in the database
passport.deserializeUser((id, cb) => {
    db.user.findByPk(id)
    .then(user => {
        if (user) {
            cb(null, user)
        }
    })
    .catch(err => {
        console.log(err)
    })
})