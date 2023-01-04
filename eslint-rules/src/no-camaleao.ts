import { createRule } from './_helper';

module.exports = createRule({
  create(context) {
    return {
      Literal(node) {
        if (typeof node.value == 'string' && node.value.indexOf('カマレオ') !== -1) {
          context.report({
            node: node,
            messageId: 'no-camaleao',
          });
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
