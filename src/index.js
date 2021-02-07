module.exports = function check(str, bracketsConfig) {
  let bracketsConfigList = [];
  let tempArray = [];
  let indicator = true;
  for (let i = 0; i < bracketsConfig.length; i++) {
    bracketsConfigList[i] = bracketsConfig[i].join("");
  }
  while (indicator) {
    for (var j = 0; j < bracketsConfigList.length; j++) {
      if (str.indexOf(bracketsConfigList[j]) == -1) {
        tempArray.push(0);
      } else {
        str = str.replace(bracketsConfigList[j], "");
        tempArray.push(1);
      }
    }
    if (tempArray.indexOf(1) == -1) {
      indicator = false;
    }
    tempArray = [];
  }
  return str.length == 0 ? true : false;
}

    
