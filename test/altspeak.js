const assert = require("assert")
const { symbols } = require("../transform.cjs")

const quote = (ch) => {
  return ch === "'" ? `"${ch}"` : `'${ch}'`
}

describe("altspeak", function () {
  it("should not have duplicated symbols", function () {
    const prevChars = new Map()
    for (const [ch, altSymbols] of symbols) {
      assert.equal(
        prevChars.get(ch),
        undefined,
        `character ${quote(ch)} is duplicated in symbols`,
      )
      prevChars.set(ch, true)
      const prevAltSym = new Map()
      for (const altSym of altSymbols) {
        assert.equal(
          prevAltSym.get(altSym),
          undefined,
          `symbol ${quote(altSym)} is duplicated in symbols[${quote(ch)}]`,
        )
        prevAltSym.set(altSym, true)
      }
    }
  })
  it("altSymbols should not have a space in them", function () {
    for (const [ch, altSymbols] of symbols) {
      for (const altSym of altSymbols) {
        assert.equal(
          altSym.includes(" "),
          false,
          `symbol ${quote(altSym)} from symbols[${quote(
            ch,
          )}] includes the space character`,
        )
      }
    }
  })
})
