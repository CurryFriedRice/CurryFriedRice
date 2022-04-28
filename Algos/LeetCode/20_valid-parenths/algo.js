class CustomStack {
    constructor(value)
    {
        this.arr = []
    }
    push (value)
    {
        this.arr.push(value)
    }
    
    pop ()
    {
        console.log(this.arr)
        return this.arr.pop()
    }
    isEmpty()
    {
        return this.arr.length === 0
    }
}

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let myStack = new CustomStack()
    if(s.length <= 1) return false;
    for(const paren of s)
    {
        if(paren === '(' || paren === '{' || paren === '['){
            myStack.push(paren)
        }else
        {
            let popped = myStack.pop();
            let matching = true;
            switch(paren)
            {
                case "}":
                    popped === "{" ? '' : matching = false
                    break;
                case "]":
                    popped === "[" ? '' : matching = false
                    break
                case ")":
                    popped === "(" ? '' : matching = false
                    break;
            }
            if(!matching) return false
        }
    }
    if(!myStack.isEmpty()) return false
    return true
};