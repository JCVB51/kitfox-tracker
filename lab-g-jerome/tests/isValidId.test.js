import { isValidId } from "../src/isValidId.js"

test("accepts a positive integer string as a valid ID", () => {
  expect(isValidId("3")).toBe(true)
})

test("rejects zero as an invalid ID", () => {
  expect(isValidId("0")).toBe(false)
})

test("rejects negative numbers as invalid IDs", () => {
  expect(isValidId("-5")).toBe(false)
})

test("rejects non-numeric strings as invalid IDs", () => {
  expect(isValidId("abc")).toBe(false)
})

test("rejects decimal values as invalid IDs", () => {
  expect(isValidId("3.5")).toBe(false)
})