# count-html-nodes

A simple package to count the number of HTML nodes in a given HTML file.

## Installation

```bash
npm install count-html-nodes
```

## Usage

```javascript
const { countHtmlNodes } = require('count-html-nodes');
const fs = require('fs');
const filePath = '/path/to/your/file.html';
const html = fs.readFileSync(filePath, 'utf8');
const nodeCountMap = countHtmlNodes(html);
console.log(`Number of HTML nodes: `);
console.log(nodeCountMap);
```

## License

MIT
