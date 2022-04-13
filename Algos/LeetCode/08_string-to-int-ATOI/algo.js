
const clamp = (value) => {
    console.log(Math.pow(2,31))
    if (value > Math.pow(2, 31)-1) return (Math.pow(2, 31)-1);
    else if (value < -Math.pow(2, 31)) return -Math.pow(2,31);
    return value;
  };
  /**
   * @param {string} s
   * @return {number}
   */
  var myAtoi = function (s) {
    let start = 0;
    let end = 0;
    let startFound = false;
    let endFound = false;
    let isNegative = false;
    let foundSymbol = false

      if(s.length === 0) return 0

    while (startFound === false && start < s.length) {
      if (s[start] === ' '){
          if(foundSymbol) return 0;
          start++;
      } 
      else if (s[start] === "-") {
          isNegative = true
          if(foundSymbol) return 0;
          foundSymbol = true
          console.log('found symbol')
          start++;
      }else if(s[start] === "+")
      {
          console.log("found symbol")
          if(foundSymbol) return 0;
          foundSymbol = true
          start++;
      }
      else if(!Number.isInteger(parseInt(s[start])))
      {
          return 0;
      }
      else if (Number.isInteger(parseInt(s[start]))){
          startFound = true;
          console.log(s[start])
          console.log("found number")
      } 
      else {
          start = start+1;
      }
    }
  
    
    while (endFound === false && start+end < s.length) {
      if (!Number.isInteger(parseInt(s[start+end]))) {
          endFound = true;
      }
      else end++;
    }
  
    console.log(start, "|", end, "|" , s.slice(start,start+end),"|");
    let RetVal = parseInt(s.slice(start,start+end));
    if(isNegative) RetVal *= -1;
    RetVal = clamp(RetVal)
    if (isNaN(RetVal)) return 0
    return RetVal
  };


//   console.log(myAtoi("2147483648"))
  console.log(myAtoi("  +  413"))