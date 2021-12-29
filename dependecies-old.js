console.time("OLD");
function solution(operations) {
  let libraries = [];
  let temporary = [];

  for (const key in operations) {
    if (operations[key][0] === "add") {
      temporary.push({
        library: operations[key][1],
        version: operations[key][2],
      });
    } else if (operations[key][0] === "install") {
      // add dependencies on the list

      // 1. check if the item exist on the list
      for (const c in temporary) {
        const lib = temporary[c];
        const library_exist = libraries.find(
          (libra) => libra.library === lib.library
        );
        // check if it exist into the main library
        if (library_exist === undefined) {
          libraries.push(lib);
        } else {
          // check the versions
          if (+library_exist.version < +lib.version) {
            libraries = libraries.map((el) =>
              el.library === lib.library ? lib : el
            );
          }
        }
      }
      temporary = [];
    }
  }

  libraries.sort(function (a, b) {
    if (a.version > b.version) return 1;
    if (a.version < b.version) return -1;
    return 0;
  });
  libraries.sort(function (a, b) {
    if (a.library > b.library) return 1;
    if (a.library < b.library) return -1;
    return 0;
  });
  // console.timeEnd("Start here");
  return libraries.map((itm) => `${itm.library}-${itm.version}`);
}

console.log(
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
console.timeEnd("OLD");
