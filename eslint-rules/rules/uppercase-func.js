"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("@typescript-eslint/utils");
const createRule = utils_1.ESLintUtils.RuleCreator((ruleName) => `https://example.com/rule/${ruleName}`);
module.exports = createRule({
    create(context) {
        return {
            FunctionDeclaration(node) {
                if (node.id != null) {
                    if (/^[a-z]/.test(node.id.name)) {
                        context.report({
                            messageId: 'uppercase',
                            node: node.id,
                        });
                    }
                }
            },
        };
    },
    name: 'uppercase-func',
    meta: {
        docs: {
            description: 'Function declaration names should start with an upper-case letter.',
            recommended: 'warn',
        },
        messages: {
            uppercase: 'Start this name with an upper-case letter.',
        },
        type: 'suggestion',
        schema: [],
    },
    defaultOptions: [],
});
