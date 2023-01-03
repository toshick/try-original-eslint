"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _helper_1 = require("./_helper");
module.exports = (0, _helper_1.createRule)({
    create(context) {
        return {
            Literal(node) {
                // if (node.id != null) {
                //   if (/^[a-z]/.test(node.id.name)) {
                //     context.report({
                //       messageId: 'uppercase',
                //       node: node.id,
                //     });
                //   }
                // }
                if (typeof node.value == 'string' &&
                    node.value.indexOf('カマレオ') !== -1) {
                    context.report({ node: node, messageId: 'no-camaleao' });
                }
            },
        };
    },
    name: __filename,
    meta: {
        docs: {
            description: '',
            recommended: 'error',
        },
        messages: {
            'no-camaleao': 'カマレオきんしだぞ',
        },
        type: 'suggestion',
        schema: [],
    },
    defaultOptions: [],
});
