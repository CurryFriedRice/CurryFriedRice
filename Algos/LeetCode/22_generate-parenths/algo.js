/**
 * @param {number} n
 * @return {string[]}
 */
//NEEDED ASSISTANCE WITH THIS ONE... Understand recursive calls better
 var generateParenthesis = function(n) {
    let ans = [];
    //Recursive call to generate the possible combinations of parenths
    const gen = (left, right, _ans) => {//Takes a left and right for parenths
        if(left === n && right === n)   //If left === n and right === n (e.g. 2*n)
        {                               //push the answer
            ans.push(_ans)
            return;                     //Return it
        }
        //Othwerise if left Parenths are less than n add one to left then add a left parenth to the answer
        if(left < n) gen(left+1, right, `${_ans}(`);    
        //Then also after that do right parenths
        if(left > right && right < n) gen(left, right+1, `${_ans})`);
    }
    
    gen(0,0,'') //Ask it to generate it
    return ans;
};


/*
var generateParenthesis = function(n) {
  const r = [];
  const gen = (left, right, _r) => {
    if (left === n && right === n) {
      r.push(_r);
      return;
    }
    if (left < n) gen(left + 1, right, `${_r}(`);
    if (left > right && right < n) gen(left, right + 1, `${_r})`);
  }
  
  gen(0, 0, '');
  
  return r;
};
*/