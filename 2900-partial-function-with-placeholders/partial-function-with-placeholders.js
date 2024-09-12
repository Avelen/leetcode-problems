/**
 * @param {Function} fn
 * @param {Array} args
 * @return {Function}
 */
var partial = function(fn, args) {
    
    return function(...restArgs) {
        
        let newArg = args.map(arg => {
            if (arg === "_") {
                return restArgs.shift();
            }

            return arg;
        });

        newArg = [...newArg, ...restArgs];

        return fn(...newArg);
    }
};