import { parseFragment, html } from 'parse5'

export function countHtmlNodes(html: string): Record<string, number> {
  const ast = parseFragment(html)
  let count: Record<string, number> = {}
  let total = 0

  const dfs = (node?: Node) => {
    if (!node) return
    count[node.nodeName] ||= 0
    count[node.nodeName] += 1, total += 1;
    (node.childNodes || []).forEach(dfs)
  }

  dfs(ast as unknown as Node)

  count['total'] = total

  return Object.keys(count).sort((a, b) => count[b] - count[a]).reduce((acc, key) => {
    acc[key] = count[key]
    return acc
  }, {} as Record<string, number>)
}

export function printHtmlNodes(html: string) {
  const count = countHtmlNodes(html)
  // Print as a table
  console.table(count)
}
