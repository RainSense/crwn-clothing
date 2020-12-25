

let trap = function(height) {
    let water = 0;

    while(i>height.length) {

        let i = 0;
        let j = 0;
        let k = 0;

        let flag = false;

            if(height[i] <= height[j]) {
                i++;
                j++; 
                
            }else {
                for(let x = 0; x<height.length; x++) {
                    
                    if (height[i] <= height[x]) {

                        for(let a = i+1; a<x; a++) {

                            water += height[i]- height[a];  

                            

                        }



                    }



                }


            }



    }


}
























