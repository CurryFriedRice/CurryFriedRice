function backspaceCompare(s: string, t: string): boolean {
    let sStack = [];
    let tStack = [];

    for(let i =0; i < s.length; i++){
        if(s[i] === '#') sStack.pop();
        else sStack.push(s[i])
    }
    for(let i = 0; i < t.length; i++){
        if(t[i] === '#') tStack.pop();
        else tStack.push(t[i])
    }
    if(sStack.length !== tStack.length)
        return false;
    
    while(sStack.length != 0){
        if(sStack.pop() != tStack.pop()) return false;
    }
    return true
};