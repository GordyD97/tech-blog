const { User } = require('../models');

const fillData = [
//    add fake users with passwords and emails for complete accounts
    // this should mean implementing a login page?
    // making forcing the user to sign in IF they want to use the features of the sight 
    // yet do not make the login page the FIRST THING THE USER SEES 
]

const seedFill = () => User.bulkCreate(fillData, { individualHooks: true });

module.exports = seedFill;