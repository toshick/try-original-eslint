'use strict';

module.exports = {
  create: function (context) {
    return {
      Literal: function (node) {
        if (
          typeof node.value == 'string' &&
          node.value.indexOf('ニャオス') !== -1
        ) {
          context.report({ node: node, message: 'ニャオスは禁止だカマ' });
        }
      },
    };
  },
};
