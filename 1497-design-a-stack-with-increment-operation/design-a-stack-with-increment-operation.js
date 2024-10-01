/**
 * @param {number} maxSize
 */
// var CustomStack = function(maxSize) {
    
// };

// /** 
//  * @param {number} x
//  * @return {void}
//  */
// CustomStack.prototype.push = function(x) {
    
// };

// /**
//  * @return {number}
//  */
// CustomStack.prototype.pop = function() {
    
// };

// /** 
//  * @param {number} k 
//  * @param {number} val
//  * @return {void}
//  */
// CustomStack.prototype.increment = function(k, val) {
    
// };

class CustomStack {
    stack = [];
    maxSize = 0;

    constructor(maxSize) {
       this.maxSize = maxSize;
    }

    push = (x) => {
        if (this.stack.length === this.maxSize) return x;
        this.stack.push(x);
    }

    pop = () => {
        if (this.stack.length === 0) return -1;
        return this.stack.pop();
    }

    increment = (index, value) => {
        this.stack = this.stack.map((el, i) => i < index ? el += value : el);
    }
}


/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */