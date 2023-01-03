"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ruleTester = exports.createRule = void 0;
const utils_1 = require("@typescript-eslint/utils");
exports.createRule = utils_1.ESLintUtils.RuleCreator((ruleName) => `https://example.com/rule/${ruleName}/`);
exports.ruleTester = new utils_1.ESLintUtils.RuleTester({
    parser: '@typescript-eslint/parser',
});
