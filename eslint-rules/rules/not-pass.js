'use strict';

module.exports = {
  create: function (context) {
    return {
      Literal: function (node) {
        if (
          typeof node.value == 'string' &&
          node.value.indexOf('カマレオ') !== -1
        ) {
          context.report({ node: node, message: 'カマレオは禁止だカマ' });
        }
      },
    };
  },
};
