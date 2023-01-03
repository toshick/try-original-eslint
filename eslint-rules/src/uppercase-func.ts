import { createRule } from './_helper';

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
      FunctionExpression(node) {
        // const variables = context.getDeclaredVariables(node);
        // console.log('variables', variables);
        // const v = variables[0];
        // const name = v.name;
        // const src = context.getSourceCode();
        // const srcText = src.getText(node);
        // console.log('srcText', srcText);
        // const tokens = src.getTokens(node);
        // console.log('tokens', tokens);
      },
      VariableDeclarator(node) {
        const variables = context.getDeclaredVariables(node);
        const v = variables[0];
        const name = v.name;

        const src = context.getSourceCode();
        // const srcText = src.getText(node);
        const tokens = src.getTokens(node);
        // console.log('tokens', tokens);
        const found = tokens.find((t) => {
          return t.type === 'Keyword' && t.value === 'function';
        });
        if (found && /^[a-z]/.test(name)) {
          context.report({
            messageId: 'uppercase',
            node: node.id,
          });
        }
      },
    };
  },
  name: __filename,
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
