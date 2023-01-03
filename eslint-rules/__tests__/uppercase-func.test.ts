import { ruleTester } from '../src/_helper';
const rule = require('../src/uppercase-func');

const messageId = 'uppercase';

ruleTester.run('uppercase-func', rule, {
  valid: ['function Hoge(){}'],
  invalid: [
    {
      code: 'function badHoge(){}',
      errors: [
        {
          messageId,
        },
      ],
    },
    {
      code: 'const myfunc = function (){ return 444; };',
      errors: [
        {
          messageId,
        },
      ],
    },
  ],
});
