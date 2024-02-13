/* globals describe, it */

const assert = require("assert")
const { symbols } = require("../transform.cjs")

const quote = (ch) => {
  return ch === "'" ? `"${ch}"` : `'${ch}'`
}

describe("altspeak", () => {
  it("should not have duplicated symbols", () => {
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
  it("altSymbols should not have a space in them", () => {
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
  it("all ASCII alphanumerical characters are defined", () => {
    for (let i = 32; i < 127; i++) {
      const chToFind = String.fromCodePoint(i)
      let found = false
      for (const [ch] of symbols) {
        if (ch === chToFind) {
          found = true
          break
        }
      }
      assert.equal(
        found,
        true,
        `character ${quote(chToFind)} was not found in symbols`,
      )
    }
  })
})
