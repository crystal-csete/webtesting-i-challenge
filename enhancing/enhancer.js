module.exports = {
  success,
  fail,
  repair,
  get,
};

// item: 'name', 'durability', 'enhancement'
// enhancement num 0-20
// durability num 0-100
// name string: 'any'

// enhancement SUCCESS:
//item enhancement increases by 1
//if num is 20, num is unchanged
//also, durability is not changed

function success(item) {
  if (item.enhancement === 20) {
    item.enhancement === 20;
  } else {
    item.enhancement = item.enhancement + 1;
  }
  return { ...item };
}

// enhancement FAIL:
//item < 15 durability = decreased by 5
//item >= 15 durability = decreased by 10
//item > 16 enhancement = decreased by 1

function fail(item) {
  if (item.enhancement < 15 && item.durability < 5) {
    item.durability = 0;
  } else if (item.enhancement < 15) {
    item.durability = item.durability - 5;
  } else if (item.enhancement === 15 || item.enhancement === 16) {
    item.durability = item.durability - 10;
  } else if (item.enhancement > 16) {
    item.enhancement = item.enhancement - 1;
  }
  return { ...item };
}

// durability num 0-100

function repair(item) {
  item.durability = 100;
  return { ...item };
}

function get(item) {
  return { ...item };
}
