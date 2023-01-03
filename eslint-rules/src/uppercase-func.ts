import { ESLintUtils } from '@typescript-eslint/utils';

const createRule = ESLintUtils.RuleCreator(
  (ruleName: string) => `https://example.com/rule/${ruleName}`
);

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
      description:
        'Function declaration names should start with an upper-case letter.',
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
