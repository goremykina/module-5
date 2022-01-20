let arr = [1, 1, 1, 1, 2];
let equal = true;

for (let i = 1; i < arr.length; i++) {
  	if (arr[i] !== arr[i - 1]) {
    	equal = false; 
    	break; 
	}
}

console.log(equal)
