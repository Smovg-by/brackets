module.exports = function check(str, bracketsConfig) {
  for (i = 0; i < str.length; i++) {
    for (j = 0; j < bracketsConfig.length; j++) {
      if (str[i] == bracketsConfig[j][0]) {
        if (str[i + 1] == bracketsConfig[j][0]) {
          continue;
        } else if (str[i + 1] == bracketsConfig[j][1]) {
          continue;
        } else {
          return false;
        }
      }
    }
  }
return true;
};
