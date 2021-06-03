/**
 * @fileoverview a eslint plugin test
 * @author bomgbomgbeng
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
const output = {
  rules: requireIndex(__dirname + "/rules"),
  configs: {
    zoeRule: {
      plugins: ['zoelint'],
      rules: {
        'zoelint/settimeout-no-number': 'error'
      }
    }
  }
}

module.exports = output



