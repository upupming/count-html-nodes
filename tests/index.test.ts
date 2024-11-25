import { expect, test } from 'vitest';
import { printHtmlNodes, countHtmlNodes } from '../src/index';

test('squared', () => {
  expect(countHtmlNodes(
    '<div><p>Hello</p></div>'
  )).toMatchInlineSnapshot(`
    {
      "#document-fragment": 1,
      "#text": 1,
      "div": 1,
      "p": 1,
    }
  `)

  expect(countHtmlNodes(
    `<html>
      <head>
        <title>Hello</title>
      </head>
      <body>
        <div><p>Hello</p></div>
        <div><p>World</p></div>
        <div><p>!</p></div>
        <div><p>Hello</p></div>
        <div><p>World</p></div>
        <div><p>!</p></div>
      </body>
    </html>`
  )).toMatchInlineSnapshot(`
    {
      "#document-fragment": 1,
      "#text": 15,
      "div": 6,
      "p": 6,
      "title": 1,
    }
  `)
});
