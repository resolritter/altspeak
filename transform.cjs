const symTable = new Map([
  [" ", ["　"]],
  ["0", ["０", "0̷"]],
  ["@", ["＠"]],
  ["P", ["Ｐ"]],
  ["p", ["ｐ"]],
  ["!", ["！"]],
  ["1", ["１"]],
  ["A", ["Ａ"]],
  ["Q", ["Ｑ"]],
  ["a", ["ａ"]],
  ["q", ["ｑ"]],
  ["2", ["２"]],
  ["B", ["Ｂ"]],
  ["R", ["Ｒ"]],
  ["b", ["ｂ"]],
  ["r", ["ｒ"]],
  ["#", ["＃"]],
  ["3", ["３"]],
  ["C", ["Ｃ"]],
  ["S", ["Ｓ"]],
  ["c", ["ｃ"]],
  ["s", ["ｓ"]],
  ["$", ["＄"]],
  ["4", ["４"]],
  ["D", ["Ｄ"]],
  ["T", ["Ｔ"]],
  ["d", ["ｄ"]],
  ["t", ["ｔ"]],
  ["%", ["％"]],
  ["5", ["５"]],
  ["E", ["Ｅ", "Σ", "Ξ"]],
  ["U", ["Ｕ", "∪"]],
  ["e", ["ｅ"]],
  ["u", ["ｕ", "µ"]],
  ["&", ["＆"]],
  ["6", ["６"]],
  ["F", ["Ｆ"]],
  ["V", ["Ｖ"]],
  ["f", ["ｆ"]],
  ["v", ["ｖ"]],
  ["'", ["＇"]],
  ["7", ["７"]],
  ["G", ["Ｇ"]],
  ["W", ["Ｗ"]],
  ["g", ["ｇ"]],
  ["w", ["ｗ"]],
  ["(", ["（"]],
  ["8", ["８"]],
  ["H", ["Ｈ"]],
  ["X", ["Ｘ"]],
  ["h", ["ｈ"]],
  ["x", ["ｘ"]],
  [")", ["）"]],
  ["9", ["９"]],
  ["I", ["Ｉ"]],
  ["Y", ["Ｙ"]],
  ["i", ["ｉ"]],
  ["y", ["ｙ"]],
  ["*", ["＊"]],
  [":", ["："]],
  ["J", ["Ｊ"]],
  ["Z", ["Ｚ"]],
  ["j", ["ｊ"]],
  ["z", ["ｚ"]],
  ["+", ["＋"]],
  [";", ["；"]],
  ["K", ["Ｋ"]],
  ["[", ["【"]],
  ["k", ["ｋ"]],
  ["{", ["{"]],
  [",", ["，"]],
  ["<", ["<"]],
  ["L", ["Ｌ"]],
  ["l", ["ｌ"]],
  ["|", ["|"]],
  ["-", ["－"]],
  ["=", ["＝"]],
  ["M", ["Ｍ"]],
  ["]", ["】"]],
  ["m", ["ｍ"]],
  ["}", ["}"]],
  [".", ["．"]],
  [">", [">"]],
  ["N", ["Ｎ"]],
  ["n", ["ｎ"]],
  ["/", ["／"]],
  ["?", ["？"]],
  ["O", ["Ｏ", "Ø"]],
  ["o", ["ｏ", "ø"]],
])

const transform = (input) => {
  // The string should be split at unicode codepoints. Array.from calls the
  // String's iterator method and builds an array from that, therefore it should
  // be used instead of String.split, which splits characters at character
  // codepoints.
  const chars = Array.from(input)

  const v1 = chars.map((c) => symTable.get(c)?.[0] ?? c).join("")

  const v2OccurrenceTable = new Map()
  const v2 = chars
    .map((c) => {
      const targetSyms = symTable.get(c)
      if (!targetSyms) {
        return c
      }
      const occurrences = v2OccurrenceTable.get(c) ?? 0
      v2OccurrenceTable.set(c, (occurrences + 1) % targetSyms.length)
      return targetSyms[occurrences]
    })
    .join("")

  return { v1, v2 }
}

const exported = { transform }
if (typeof window !== "undefined") {
  window.altspeak = exported
}
if (typeof module !== "undefined") {
  module.exports = exported
}
