console.time("NEW");

function solution(operations) {
  let installed_libraries = [];
  let temp = [];
  for (let i = 0; i < operations.length; i++) {
    let lib = operations[i];
    if (lib.length > 1 && lib[0] !== "install" && lib[0] === "add") {
      let available = temp.find((item) => item[1] === lib[1]);
      temp =
        available === undefined
          ? [...temp, lib]
          : temp.map((item) => (item[1] === available[1] ? lib : item));
    } else {
      installed_libraries = [...installed_libraries, ...temp];
      temp = [];
      continue;
    }
  }
  installed_libraries.sort(function (a, b) {
    if (a[2] > b[2]) return 1;
    if (a[2] < b[2]) return -1;
    return 0;
  });
  installed_libraries.sort(function (a, b) {
    if (a[1] > b[1]) return 1;
    if (a[1] < b[1]) return -1;
    return 0;
  });
  return installed_libraries.map((item) => `${item[1]}-${item[2]}`);
}
console.log(
  "Response: ",
  solution([
    ["add", "express", "1.1"],
    ["add", "async", "1.0"],
    ["add", "express", "1.0"],
    ["add", "exercise", "1.1"],
    ["add", "exercise-version", "2.1"],
    ["add", "express-vent", "3.1"],
    ["install"],
    ["add", "express", "1.2"],
    ["add", "amazing", "0.9"],
    ["add", "bmazing", "0.1"],
    ["install"],
  ])
);
console.timeEnd("NEW");
