const assert = require("assert")
const { symbols } = require("../transform.cjs")

describe("altspeak", function () {
  it("should not have duplicated symbols", function () {
    const prevK = new Map()
    for (const [k, altSymbols] of symbols) {
      assert.equal(
        prevK.get(k),
        undefined,
        `symbol ${k} is duplicated in symbols`,
      )
      prevK.set(k, true)
      const prevAltSym = new Map()
      for (const altSym of altSymbols) {
        assert.equal(
          prevAltSym.get(altSym),
          undefined,
          `altSymbol ${altSym} is duplicated in symbols[${k}]`,
        )
        prevAltSym.set(altSym, true)
      }
    }
  })
})
