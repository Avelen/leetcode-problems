/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function (s) {

    while (true) {
        let prefix = 0;
        let suffix = s.length - 1;

        if (s[prefix] !== s[suffix]) {
            return s.length;
        }

        while (s[prefix + 1] === s[prefix]) {
            prefix++;
        }

        while (s[suffix - 1] === s[suffix]) {
            suffix--;
        }

        s = s.substring(prefix + 1, suffix);
        
        if (prefix > suffix) {
            return 0;
        }

        if (prefix === suffix) {
            return 1;
        }
    }
};