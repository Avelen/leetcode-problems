/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn, memo = {}) {
    
    return function(...args) {
        
        return memo[args.join()] ?? (memo[args.join()] = fn(...args));

    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */