const arr = [0, null, 1, 3, '', 1, 2];
let equal = true;
let odd = 0;
let even = 0;
let zeros = 0

for (let i = 0; i < arr.length; i++) {
	if (!Number.isInteger(arr[i])) {
		continue;
	}
    
  	if (arr[i] % 2 === 0) {
		if (arr[i] === 0) {
			zeros++
		} else {
			even++
		}
	} else {
    	odd++
	}
}

console.log(`нечетных - ${odd}, четных - ${even}, нулей - ${zeros}`)
