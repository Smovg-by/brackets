module.exports = function check(str, bracketsConfig) {
  let strArr = str.split("");
  let openingCounter = 0;
  let closingCounter = 0;

  for (i = 0; i < bracketsConfig.length; i++) {
    for (j = 0; j < strArr.length; j++) {
      if (bracketsConfig[i][0] == strArr[j]) {
        ++openingCounter;
      }
    }
  }

  for (i = 0; i < bracketsConfig.length; i++) {
    for (j = 0; j < strArr.length; j++) {
      if (bracketsConfig[i][1] == strArr[j]) {
        ++closingCounter;
      }
    }
  }

  console.log(openingCounter, closingCounter);
  if (openingCounter == closingCounter) {
    return true;
  } else {
    return false;
  }
}
