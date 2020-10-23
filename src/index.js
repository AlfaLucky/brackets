module.exports = function check(str, bracketsConfig) {
let len = bracketsConfig.length;
  let comparisor = "";
  let count = 0;
  let brackets = "";
  while (count !== len) {
    count = 0;
    for (let i = 0; i < len; i++) {
      brackets = bracketsConfig[i][0] + bracketsConfig[i][1];
      comparisor = str.replace(brackets, "");
      if (str === comparisor) {
        count++;
      }
      str = comparisor;
    }
  }
  return str.length === 0;
}
