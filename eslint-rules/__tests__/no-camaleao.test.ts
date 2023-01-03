import { ruleTester } from '../src/_helper';

const rule = require('../src/no-camaleao');

ruleTester.run('no-camaleao', rule, {
  valid: ['const name = "カママ";'],
  invalid: [
    {
      code: '"カマレオ"',
      errors: [
        {
          messageId: 'no-camaleao',
        },
      ],
    },
    {
      code: 'const name = "カマレオ";',
      errors: [
        {
          messageId: 'no-camaleao',
        },
      ],
    },
  ],
});
