function missingWords(s, t){
    //create an empty array to push missing words
    let missingWordsString=[];
    //create two variables to compare two strings
    //use split method to split string into an array of substrings to return new array
    let mainString = s.split(" ")
    let subString = t.split(" ")

    

    for(const word of subString)
    {
        mainString.splice(mainString.indexOf(word),1) 
    }

    return mainString.join(" ")

  }
  console.log(missingWords("i really love you Jesus", "i you"));