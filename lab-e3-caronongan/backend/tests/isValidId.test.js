import { isValidId } from "../src/isValidId.js"

test("accepts a positive integer string", () => {
  expect(isValidId("3")).toBe(true)
})

test("rejects a non-numeric string", () => {
  expect(isValidId("abc")).toBe(false)
})

test("rejects zero as an edge case", () => {
  expect(isValidId("0")).toBe(false)
})

test("rejects a negative ID", () => {
  expect(isValidId("-1")).toBe(false)
})

test("rejects a decimal ID", () => {
  expect(isValidId("2.5")).toBe(false)
})