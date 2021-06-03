/**
 * @fileoverview setTimeout 禁止第二个参数是数字
 * @author bombbombbeng
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        docs: {
            description: "setTimeout 禁止第二个参数是数字",
            category: "Fill me in",
            recommended: false
        },
        fixable: 'code',  // or "code" or "whitespace"
        schema: [
            // fill in your schema
        ]
    },

    create: function(context) {

        return {
            'CallExpression': (node) => {
                if (node.callee.name !== 'setTimeout') return
                const secondArg = node.arguments && node.arguments[1]
                if(!secondArg) return
                if(secondArg.type === 'Literal' && typeof secondArg.value === 'number') {
                    context.report({
                        node,
                        message: 'setTimeout第二个参数禁止是数字',
                        fix(fixer) {

                        }
                    })
                }
            }
        };
    }
};
