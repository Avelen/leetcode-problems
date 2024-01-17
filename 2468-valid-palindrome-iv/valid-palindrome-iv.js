/**
 * @param {string} s
 * @return {boolean}
 */
var makePalindrome = function(s) {
	let p1 = 0;
	let p2 = s.length - 1;
	let count = 2;
	
	while (p1 < p2) {
		if (s[p1] !== s[p2]) { // c c 
			count = count - 1;  // 0
			if (count < 0) return false;
		}
		p1++;
		p2--;
    }

    return true;
};