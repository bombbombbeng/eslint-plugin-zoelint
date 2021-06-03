/**
 * @fileoverview setTimeout 禁止第二个参数是数字
 * @author bombbombbeng
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/settimeout-no-number"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester({
    parserOptions: {
        ecmaVersion: 7, // 默认支持语法为es5
    },
});
ruleTester.run("settimeout-no-number", rule, {

    valid: [
        {
            code: 'let someNumber = 1000; setTimeout(() => { console.log(233) }, someNumber)'
        },
        {
            code: 'setTimeout(() => { console.log(233) }, someNumber)'
        }
    ],

    invalid: [
        {
            code: "setTimeout(() => { console.log(233) }, 1000)",
            errors: [{
                message: "setTimeout第二个参数禁止是数字",
                type: "CallExpression"
            }]
        }
    ]
});
