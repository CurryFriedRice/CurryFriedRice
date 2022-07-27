//ALGO 1
//BUILD A BASIC CALCULATOR
//TAKES IN A STRING
//NUMBERS ARE NOT NEGATIVE
//OPERATIONS ARE + AND -

const Calculate = (s) => 
{
    let total = 0;              //Total to keep track of
    let numStart = 0;           //Start of the substring that we're looking at
    let mostRecentSymbol = ""   //A symbol to tell us what we were doing
                                //I use this one more time after the loop for a final calculation

    for(let i = 0; i < s.length; i++) //Run through the entire string
    {
        if(s[i] == "+" || s[i] == "-")  //If we find a symbol
        {
            let number = parseInt(s.substring(numStart,i))  //We need to parse a string based off of where our marker is
            if(mostRecentSymbol == '-') number *= -1;       //if the symbol was negative multiply it by negative 1 
            numStart = i+1;                                 //set the new start to the next index 
            mostRecentSymbol = s[i]                         //Set the symbol to the one we've encountered
            total += number;                                //Add the total

            // console.log("operating...")
            // console.log(number);
        }
    }

    //Extra final calculation
    let number = parseInt(s.substring(numStart))
    if(mostRecentSymbol == '-') number *= -1;
    total += number;

    //return the total
    return total
}


//ALGO 2
//BUILD A BASIC CALCULATOR
//TAKES IN A STRING
//NUMBERS ARE NOT NEGATIVE
//OPERATIONS ARE + AND -
//AND TAKE INTO ACCOUNT PARENTHESIS

const CalculateParenths = (s) =>
{
    // console.log("ROUND: " +s)
    //NOW WITH PARENTHESIS
    if(s.indexOf("(") == -1)//First off if there are no parens just calculate it
    {
        return Calculate(s)
    }

    let mostRecent = 0;
    let subStr = []
    let parens = [];

    // console.log(s)
    for(let i = 0; i < s.length; i++)   //Loop through it and start breaking down each part with symbol in front
    {
        if((s[i] == "+" || s[i]=="-" ) && parens.length == 0)   
        {   //if there's a + or a minus well that's a substring... unless we've seen parenths
            subStr.push(s.substring(mostRecent,i))
            mostRecent = i;
        }
        else if(s[i] == "(")    //Add a paren so we don't make a substring
        {
            parens.push(i);
        }else if(s[i] == ")")   //Remove a paren so we can make a substring
        {
            parens.pop();
        }
    }

    //One final add because it doesn't do that in loop
    subStr.push(s.substring(mostRecent,))
    console.log(subStr)
    

    //Well now it's the last part, adding each substring together
    let total = 0;
    for(item of subStr)
    {
        if(item.indexOf("(") == -1)
        {
            //Well if there's no parens then just add it to the total based on symbol
            if(item[0] == "+") total += parseInt(item.slice(1))     //If it's leading with a + skip the +
            else if(item[0] == "-") total -= parseInt(item.slice(1))//If it starts with a - subtract it
            else total += parseInt(item);                           //If it's neither then it's positive
            // console.log(total)
        }
        else    //Otherwise there are parenths and we're recursing...
        {
            let modifier = 1;   //Ininitial offsets and modifiers
            let offset = 1;
            
            //If it leads with a + or minus we need to update the offset
            if(item[0] == "-" || item[0] == "+")
            {
                offset =2;
            }

            if(item[0] == "-") //If it leads witha '-' then we need to subtract it
            {
                modifier = -1;
            }
            
            let cullParen = item.substring(offset,item.length-1)//Take off the end parenths
            console.log("Culled:" + cullParen);
            //Run it through the system again until we reach base case...
            total += parseInt(CalculateParenths(cullParen))*modifier
        }
            
            // CalculateParenths()
    }
    // console.log("total: "+ total)
    // console.log("**************")
    return total
}


// console.log(Calculate("5+4+11-1+5"))
// console.log(Calculate("5"))
// console.log("=================")
// console.log(CalculateParenths("5+4-(11-(5-1))"))
// console.log(CalculateParenths("((5+4))-(11-(5-1))"))
// console.log(CalculateParenths("(1+5)-(1+3)+5"))
// console.log(CalculateParenths("(1+5)+(1+3)+5"))


//QUERY
//GIVEN A TABLE CUSTOMERS THAT HAS COLUMNS: ID, NAME, STATE
//GET THE IDs AND NAMES OF THE CUSTOMERS IN ALPHABETICAL ORDER ASC

//--SELECT CUSTOMER.ID, CUSTOMER,NAME FROM CUSTOMERS ORDER BY CUSTOMER.NAME ASCx