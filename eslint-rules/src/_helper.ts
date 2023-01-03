import { ESLintUtils } from '@typescript-eslint/utils';

export const createRule = ESLintUtils.RuleCreator((ruleName: string) => `https://example.com/rule/${ruleName}/`);

export const ruleTester = new ESLintUtils.RuleTester({
  parser: '@typescript-eslint/parser',
});
