module.exports = function check(str, bracketsConfig) {
     
let bracketsArr = [];  
      for (i = 0; i < bracketsConfig.length; i++) {
        for (j = 0; j < str.length; j++) {
            
            if (str[j] === bracketsConfig[i][1]) {
                bracketsArr.pop(); continue}
    
            if (str[j] === bracketsConfig[i][0]) {
                bracketsArr.push(str[j]); continue}
            
     }
      }

if (bracketsArr[0] == undefined) {return true} else {return false}
    };
