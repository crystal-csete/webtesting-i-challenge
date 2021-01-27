const enhancer = require("./enhancer.js");

test("sanity", () => {
  expect(3).toBe(3);
  expect(3).not.toBe(4);
  expect(3).toBeGreaterThan(2);
});
it("is not the same toEqual and toBe", () => {
  let a = {};
  let b = {};
  let c = a;

  expect(a).not.toBe(b);
  expect(a).toEqual(b);
  expect(a).toBe(c);
});
it("exists", () => {
  expect(enhancer).toBeDefined();
});
it("repair", () => {
  expect(
    enhancer.repair({
      name: "Phone",
      enhancement: 10,
      durability: 20,
    })
  ).toEqual({
    name: "Phone",
    enhancement: 10,
    durability: 100,
  });
});

it("success the enhancement increases by 1, durability is the same", () => {
  expect(
    enhancer.success({
      name: "Tablet",
      enhancement: 15,
      durability: 50,
    })
  ).toEqual({
    name: "Tablet",
    enhancement: 16,
    durability: 50,
  });
});

it("fails if item is less than 15, durability is decreased by 5, enhancement is the same", () => {
  expect(
    enhancer.fail({
      name: "Television",
      enhancement: 13,
      durability: 10,
    })
  ).toEqual({
    name: "Television",
    enhancement: 13,
    durability: 5,
  });
});

it("fails if item is more than or equal to 15, durability is decreased by 10, enhancement is the same", () => {
  expect(
    enhancer.fail({
      name: "Stove",
      enhancement: 15,
      durability: 30,
    })
  ).toEqual({
    name: "Stove",
    enhancement: 15,
    durability: 20,
  });
});

it("fails if item is more than 16, enhancement is decreased by one, durability is the same", () => {
  expect(
    enhancer.fail({
      name: "Laptop",
      enhancement: 17,
      durability: 35,
    })
  ).toEqual({
    name: "Laptop",
    enhancement: 16,
    durability: 35,
  });
});

it("gets the item", () => {
  expect(enhancer.get).toBeDefined();
});
