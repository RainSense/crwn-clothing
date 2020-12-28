var backspaceCompare = function(S, T) {
    

    for(let i = 0; i<S.length; i++) {
      
        if(S.charAt(i) == "#") {
           
            if(i > 1) {
                S = S.substr(0,i-2) + S.substr(i+1,S.length)
                
                console.log(S.substr(0,i-1))
                console.log(S.substr(i,S.length))
            }
            
        }
    }

    S = S.replace("#", "");


    for(let i = 0; i<T.length; i++) {
      
        if(T.charAt(i) == "#") {
           
            if(i > 1) {
                T = T.substr(0,i-2) + T.substr(i+1,T.length)
                
                console.log(T.substr(0,i-1))
                console.log(T.substr(i,T.length))
            }
            
        }
    }

    S = S.replace("#", "");

    let flag = false;

    if(S == T) {
        flag = true;
    }

    return flag


    
    
};

console.log(backspaceCompare("ab##A"))