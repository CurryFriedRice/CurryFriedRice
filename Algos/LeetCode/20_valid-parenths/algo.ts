function isValid(s: string): boolean {
    let openParenArr:string[] = []

    for(let i = 0; i < s.length; i++){
        if(s[i] === "(" || s[i] === "[" || s[i] === "{"){
            openParenArr.push(s[i])
        }
        else{
            let popped = openParenArr.pop();
            switch(s[i]){
                case ")":
                    if (popped === "(") continue;
                    return false;   
                case "]":
                    if (popped === "[") continue;
                    return false;
                case "}":
                    if (popped === "{") continue;
                    return false;
                default:
                    break;
            }
        }
        return true
    }

};