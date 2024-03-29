const symbols = [
  ["\\", ["＼"]],
  ["^", ["⌃"]],
  ["_", ["＿"]],
  ["`", ["｀"]],
  [" ", ["　"]],
  ["0", ["０", "0̲", "0̷"]],
  ["@", ["＠", "﹫"]],
  ["P", ["Ｐ", "P̲", "Ᵽ", "Ꝓ", String.fromCodePoint(55296, 57104)]],
  ["p", ["ｐ", "p̲̲", "ꝑ", "ꝓ"]],
  ["!", ["！", "ǃ"]],
  ["1", ["１", "1̲"]],
  ["A", ["Ａ", "A̲", String.fromCodePoint(55296, 57088), "₳"]],
  ["Q", ["Ｑ", "Q̲", "Ԛ"]],
  ["a", ["ａ", "a̲", "ɑ", "α", "Ɑ"]],
  ["q", ["ｑ", "q̲̲", "Ɋ"]],
  ["2", ["２", "2̲"]],
  ["B", ["Ｂ", "B̲", "β", "ß", String.fromCodePoint(55296, 57089)]],
  ["R", ["Ｒ", "R̲", "Ɍ", "Ꭱ", "Ṟ"]],
  ["b", ["ｂ", "b̲̲", "♭", "␢"]],
  ["r", ["ｒ", "r̲̲", "ṟ"]],
  ["#", ["＃", "♯", "⌗", "⋕"]],
  ["3", ["３", "3̲"]],
  ["C", ["Ｃ", "C̲", "ʗ", "Ȼ", "₵"]],
  ["S", ["Ｓ", "S̲"]],
  ["c", ["ｃ", "c̲̲", "ᴄ", "ȼ", "¢"]],
  ["s", ["ｓ", "s̲̲", "ꞩ"]],
  ["$", ["＄"]],
  ["4", ["４", "4̲"]],
  ["D", ["Ｄ", "D̲", "Ɖ", "Ð", "Ɗ", "Ḏ", String.fromCodePoint(55296, 57091)]],
  ["T", ["Ｔ", "T̲", "Ƭ", "Τ", "₮"]],
  ["d", ["ｄ", "d̲̲", "đ", "ḏ"]],
  ["t", ["ｔ", "t̲̲", "τ"]],
  ["%", ["％"]],
  ["5", ["５", "5̲"]],
  ["E", ["Ｅ", "E̲", "Σ", "Ξ", "Є", "∈", "ℇ"]],
  ["U", ["Ｕ", "U̲", "∪", "Ʉ"]],
  ["e", ["ｅ", "e̲̲", "℮"]],
  ["u", ["ｕ", "u̲̲", "µ", "ꭒ"]],
  ["&", ["＆"]],
  ["6", ["６", "6̲"]],
  ["F", ["Ｆ", "F̲", "Ϝ", "ꟻ", "₣"]],
  ["V", ["Ｖ", "V̲", "Ѵ"]],
  ["f", ["ｆ", "f̲̲", "ƒ"]],
  ["v", ["ｖ", "v̲̲", "ѵ", String.fromCodePoint(11380)]],
  ["'", ["＇"]],
  ['"', ["＂"]],
  ["7", ["７", "7̲"]],
  ["G", ["Ｇ", "G̲", "Ǥ", "₲"]],
  ["W", ["Ｗ", "W̲", "Ẉ"]],
  ["g", ["ｇ", "g̲̲", "ց", "ꞡ"]],
  ["w", ["ｗ", "w̲̲", "ⱳ"]],
  ["8", ["８", "8̲"]],
  ["H", ["Ｈ", "H̲", "Ḥ", "Η", "ᚺ", "Ƕ"]],
  [
    "X",
    [
      "Ｘ",
      "X̲",
      String.fromCodePoint(55296, 57111),
      "Χ",
      "Ꭓ",
      String.fromCodePoint(55296, 57159),
    ],
  ],
  ["h", ["ｈ", "h̲̲", "ḥ", "Һ", "ƕ", "h"]],
  ["x", ["ｘ", "x̲̲", "х"]],
  ["(", ["（", "❨", "❪", "⟮"]],
  [")", ["）", "❩", "❫", "⟯"]],
  ["9", ["９", "9̲"]],
  ["I", ["Ｉ", "I̲", "ꟾ", "І"]],
  ["Y", ["Ｙ", "Y̲", "Υ", String.fromCodePoint(55296, 57157), "Ұ"]],
  ["i", ["ｉ", "i̲̲", "і"]],
  ["y", ["ｙ", "y̲̲", "у"]],
  ["*", ["＊"]],
  [":", ["："]],
  ["J", ["Ｊ", "J̲"]],
  [
    "Z",
    ["Ｚ", "Z̲", "Ƶ", "Ẓ", "Ẕ", "Ɀ", "Ζ", String.fromCodePoint(55296, 57142)],
  ],
  ["j", ["ｊ", "j̲̲"]],
  ["z", ["ｚ", "z̲̲", "Ⱬ", "ⱬ"]],
  ["+", ["＋"]],
  [";", ["；"]],
  ["K", ["Ｋ", "K̲", "Κ", "К"]],
  ["[", ["【"]],
  ["k", ["ｋ", "k̲̲", "κ", "к"]],
  ["{", ["｛"]],
  [",", ["，"]],
  ["<", ["＜", String.fromCodePoint(55296, 57090)]],
  ["L", ["Ｌ", "L̲", "Ḷ", "Ḻ"]],
  ["l", ["ｌ", "l̲̲", "ḷ", "ḻ"]],
  ["|", ["⎜", "⎟"]],
  ["-", ["－", "—"]],
  ["=", ["＝"]],
  ["M", ["Ｍ", "M̲", "Ɱ", "Ṃ"]],
  ["]", ["】"]],
  ["m", ["ｍ", "m̲̲", "ṃ"]],
  ["}", ["｝"]],
  [".", ["．"]],
  [">", ["＞"]],
  ["N", ["Ｎ", "N̲", "Ṇ", "Ṉ", "Ɲ", "Ν", String.fromCodePoint(55296, 57149)]],
  ["n", ["ｎ", "n̲̲", "ṇ", "ṉ", "ɳ"]],
  ["/", ["／"]],
  ["?", ["？"]],
  ["O", ["Ｏ", "O̲", "◯"]],
  ["o", ["ｏ", "o̲̲"]],
  ["~", ["～"]],
]
const symTable = new Map(symbols)

const transform = (input) => {
  /*
    The string should be split at unicode codepoints. Array.from calls the
    String's iterator, which yields an item for each unicode codepoint,
    therefore it should be used instead of String.split.
  */
  const chars = Array.from(input)

  const v1 = chars
    .map((c) => {
      return symTable.get(c)?.[0] ?? c
    })
    .join("")

  const v2Occurrences = new Map()
  const v2 = chars
    .map((c) => {
      if (c === " ") {
        return "　　"
      }
      const targetSyms = symTable.get(c)
      if (!targetSyms) {
        return c
      }
      const idx = v2Occurrences.get(c) ?? 0
      v2Occurrences.set(c, (idx + 1) % targetSyms.length)
      return targetSyms[idx]
    })
    .join("")

  return { v1, v2 }
}

const exported = { transform, symbols }
if (typeof window !== "undefined") {
  window.altspeak = exported
}
if (typeof module !== "undefined") {
  // eslint-disable-next-line no-undef
  module.exports = exported
}
