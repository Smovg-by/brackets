module.exports = function check(str, bracketsConfig) {
  
if (str.length % 2 !== 0) {return false}

  for (let i = 0; i <= str.length; i++) {
    for (let j = 0; j <= str.length; j++) {
      if(str[i] == bracketsConfig[i][j]) {        
          return true;
      } else {return false;}
    }
  }
};
    
