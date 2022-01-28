solution([1, 2, 3, 3, 3, 4, 4, 5]);



function solution(arr) {
    const lower_bound = (target,array) => {
        let low = 0;
        let high = array.length-1;
    
        while(low<=high){
            let mid = Math.floor((low+high)/2);
    
            if(array[mid] === target){
                while(array[mid] === target) mid--;
    
                return mid+1;
            }
    
            if(array[mid] < target) low = mid+1;
            else high = mid-1;
        }
    
        return 0;
    }
    
    const upper_bound = (target,array) => {
        let low = 0;
        let high = array.length-1;
    
        while(low<=high){
            let mid = Math.floor((low+high)/2);
    
            if(array[mid] === target){
                while(array[mid] === target) mid++;
    
                return mid-1;
            }
    
            if(array[mid] < target) low = mid+1;
            else high = mid-1;
        }
    
        return 0;
    }

    console.log(lower_bound(3, arr) , upper_bound(3, arr));
}