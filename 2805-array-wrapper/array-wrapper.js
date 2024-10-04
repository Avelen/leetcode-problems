/**
 * @param {number[]} nums
 * @return {void}
 */
class ArrayWrapper {

    constructor(array) {
        this.array = array;
    }

    valueOf() {
        if (this.array.length === 0) return 0;
        return this.array.reduce((a, b) => a + b);
    }

    toString() {
        return `[${this.array.join(',')}]`
    }
}


/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */